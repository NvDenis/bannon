import { useState, useEffect } from "react"
import deleteBtn from '../assets/img/delete-button.png'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { doDeleteProductCart, doOnChangeQuantity, doResetCart } from "../redux/account/accountSlice"
import { callOrder } from "../services/api"
import { toast } from "react-toastify"

export default function OrderPage() {

  const steps: string[] = [
    'Giỏ hàng',
    'Vận chuyển và thanh toán',
    'Hoàn tất',
  ]

  const [currentSteps, setCurrentSteps] = useState(0)
  const navigate = useNavigate()
  const wishList = useSelector((state: RootState) => state.account.user.wishList)
  const dispatch = useDispatch()
  const [totalCost, setTotalCost] = useState<string>('')

  useEffect(() => {
    const calculatedTotalCost = wishList.reduce((acc, product) => {
      // Loại bỏ dấu chấm và chuyển đổi sang số
      const priceWithoutComma = product.price.replace(/\./g, "");
      const price = parseFloat(priceWithoutComma);
      acc += price * product.quantity;
      return acc;
    }, 0);

    // Định dạng tổng giá trị theo định dạng số có dấu chấm
    const formattedTotalCost = calculatedTotalCost.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    // Loại bỏ chữ "₫" từ định dạng số
    const totalCostWithoutSymbol = formattedTotalCost.replace("₫", "");
    // Cập nhật state với tổng giá trị đã tính toán và không có chữ "₫"
    setTotalCost(totalCostWithoutSymbol);
  }, [wishList]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnchangeQuantity = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity: number = +event.target.value
    dispatch(doOnChangeQuantity({ id, quantity }))
  }

  const cost = (price: string, quantity: number) => {
    const priceWithoutComma = price.replace(/\./g, "");
    const total = parseFloat(priceWithoutComma) * quantity;

    // Định dạng tổng giá trị theo định dạng số có dấu chấm
    const formattedTotalCost = total.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    // Loại bỏ chữ "₫" từ định dạng số
    const totalCostWithoutSymbol = formattedTotalCost.replace("₫", "");
    // Cập nhật state với tổng giá trị đã tính toán và không có chữ "₫"
    return totalCostWithoutSymbol
  }

  const user = useSelector((state: RootState) => state.account.user)
  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    email: string;
    address: string;
    note: string;
  }>({
    fullName: user.fullName,
    phone: user.phone,
    email: user.email,
    address: '',
    note: '',
  });

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrder = async () => {
    const { fullName, phone, email, address, note } = formData;


    // Tạo một mảng chứa tên các trường cần kiểm tra
    const requiredFields = ['fullName', 'phone', 'email', 'address'];

    // Kiểm tra từng trường cần thiết
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const missingFields = requiredFields.filter(field => !(formData as any)[field]);

    // Nếu có trường nào thiếu, hiển thị thông báo lỗi và không tiếp tục đặt hàng
    if (missingFields.length > 0) {
      const missingFieldNames = missingFields.map(field => {
        // Chuyển đổi tên trường từ camelCase sang định dạng chuẩn
        const fieldName = field.replace(/([A-Z])/g, " $1").toLowerCase();
        // Viết hoa chữ cái đầu của tên trường
        return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
      });

      const errorMessage = `Vui lòng nhập đầy đủ thông tin cho các trường: ${missingFieldNames.join(', ')}.`;

      toast.error(errorMessage);
      return;
    }

    const detail = wishList.map(e => {
      return {
        id: e.id,
        thumbnail: e.img[0],
        productName: e.name,
        quantity: e.quantity,
        price: e.price
      };
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await callOrder({ userId: user.id, fullName, phone, email, address, note, detail, totalPrice: totalCost });

    if (res && res.success === true) {
      setCurrentSteps(2);
      toast.success('Đặt hàng thành công');
      dispatch(doResetCart());
    } else {
      toast.error(res.data.message)
    }

  };

  return (
    <>
      <div className="bg-color-header uppercase text-3xl flex justify-center items-center py-8 font-semibold">
        đặt mua hàng
      </div>
      <div className="flex justify-center gap-4 text-sm py-2">
        {
          steps.map((e: string, index: number) => {
            const isLastElement = index === steps.length - 1;
            return (
              <span key={e} className={`${index === currentSteps ? 'text-primary-color' : 'text-slate-400'}`}>
                {e}
                {!isLastElement && <span className="ml-2">&gt;</span>}
              </span>
            );
          })

        }
      </div>
      <hr />


      <div>

        {
          wishList.length === 0 && currentSteps === 0 &&
          <div className="flex h-[300px] justify-center items-center">
            <span className="text-red-500">Giỏ hàng của bạn đang trống</span>
          </div>
        }

        {
          currentSteps === 0 && wishList.length > 0 && 
          (
            <div className="pt-[40px] pb-[30px]">
              <div className="w-full max-w-[1190px] m-auto  px-[10px]">
                <div className="">
                  {/* head */}
                  <div className="flex pb-2 border-b border-black">
                    <div className="w-[50%] text-lg">Sản phẩm</div>
                    <div className="hidden md:block w-[20%] text-lg">Lựa chọn</div>
                    <div className="hidden md:block w-[10%] text-lg">Số lượng</div>
                    <div className="hidden md:block w-[20%] text-right text-lg">Thành tiền</div>
                  </div>
                  {/* body */}
                  <div className="">
                    <>
                      {
                        wishList?.length > 0 &&
                        wishList.map((e) => {
                          return (
                            <div className="py-[30px] flex border-b-[1px] border-gray-300" key={e.id}>
                              <div className="w-full md:w-[50%]  relative md:h-[90px] pl-[130px] md:pl-[170px]">
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer" onClick={() => dispatch(doDeleteProductCart(e.id))}>
                                  <img src={deleteBtn} alt="" />
                                </div>
                                <div className="bg-cover bg-center bg-no-repeat w-[70px] md:w-[90px] h-auto absolute left-10 md:left-16 top-[50%] -translate-y-1/2">
                                  <img src={e.img[0]} alt="" className="w-full" />
                                </div>
                                <div className="">
                                  <div className="uppercase mb-1">{e.name}</div>
                                  <div className="text-primary-color font-light text-sm">{e.price} VNĐ</div>
                                  <div className="md:hidden flex">
                                    MÀU: <span className="font-semibold">TRẮNG</span>
                                  </div>
                                  <div className="md:hidden ">
                                    SIZE:
                                  </div>
                                  <input type="number" className="md:hidden w-20 border border-black py-2 pl-8 outline-none" defaultValue={e.quantity} min={1} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchangeQuantity(e.id, event)} />
                                </div>
                              </div>
                              <div className="hidden md:block w-[20%] text-sm">
                                <div className="">
                                  MÀU: <span>TRẮNG</span>
                                </div>
                                <div className="">
                                  SIZE:
                                </div>
                              </div>
                              <div className="hidden md:block w-[10%] ">
                                <input type="number" className="w-full border border-black py-2 pl-8 outline-none" defaultValue={e.quantity} min={1} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchangeQuantity(e.id, event)} />
                              </div>
                              <div className="text-base min-w-[110px] md:w-[20%] text-right font-semibold md:text-xl flex items-center md:block">
                                {
                                  cost(e.price, e.quantity)
                                } VND
                              </div>
                            </div>
                          )
                        })

                      }
                    </>

                  </div>

                </div>
                <div className="pt-[20px] flex flex-wrap border-t-[1px] border-black">
                  <div className="w-full md:w-[50%] mb-4">
                    <button className="w-full md:max-w-[200px] bg-color-header py-2 uppercase px-8 font-light hover:bg-primary-color hover:text-white duration-500" onClick={() => navigate('/')}>tiếp tục mua</button>
                  </div>
                  <div className="w-full md:w-[50%] border-t-[1px] border-black pt-4 md:border-none">
                    <div className="flex justify-between mb-3">
                      <div className="font-normal uppercase ">Tổng giỏ hàng</div>
                      <div className="font-light uppercase ">{totalCost} vnđ</div>
                    </div>
                    <div className="flex justify-between mb-3">
                      <div className="font-normal uppercase ">mã khuyến mãi</div>
                      <div className="font-light uppercase ">0 vnđ</div>
                    </div>
                    <div className="flex justify-between mb-3">
                      <div className="font-normal uppercase ">giảm giá dùng điểm</div>
                      <div className="font-light uppercase ">0 vnđ</div>
                    </div>
                    <div className="flex justify-between mb-3">
                      <div className="font-normal uppercase ">ưu đãi</div>
                      <div className="font-light uppercase ">0 vnđ</div>
                    </div>
                    <div className="flex justify-between mb-3">
                      <div className="font-normal uppercase ">Tiền hàng</div>
                      <div className="font-medium text-xl uppercase  ">{totalCost} vnđ</div>
                    </div>

                    <button className="bg-black text-white w-full uppercase py-2 hover:bg-primary-color duration-500 " onClick={() => setCurrentSteps(1)}>tiếp tục thanh toán</button>
                  </div>

                </div>
              </div>
            </div>
          )
        }

        {
          currentSteps === 1 &&
          <div className="w-full max-w-[1190px] mx-auto px-[10px] flex justify-between flex-wrap">

            <div className="mt-8 md:w-[48%] w-full md:border-r md:border-r-gray-200 md:pr-12">
              <div className="uppercase font-semibold text-primary-color border-b-primary-color border-b-[1px]">thông tin khách hàng</div>
              <input type="text" placeholder="Họ và tên *" className="w-full border my-2 p-2 rounded" name="fullName" defaultValue={user.fullName} onChange={handleInputChange} />
              <input type="tel" placeholder="Điện thoại *" className="w-full border my-2 p-2 rounded" name="phone" defaultValue={user.phone} onChange={handleInputChange} />
              <input type="email" required placeholder="Email " className="w-full border my-2 p-2 rounded" name="email" defaultValue={user.email} onChange={handleInputChange} />
              <input type="text" required placeholder="Địa chỉ: Nhập số nhà, tên Đường, Phường/Xã *" name="address" className="w-full border my-2 p-2 rounded" onChange={handleInputChange} />
              <textarea placeholder="Ghi chú hóa đơn" className="w-full border my-2 p-2 rounded" name="note" onChange={handleInputChange}></textarea>

              <div className="uppercase font-semibold text-primary-color border-b-primary-color border-b-[1px]">phương thức thanh toán</div>
              <div className="flex mt-2 gap-2">
                <input type="radio" id="COD" defaultChecked name="paymentMethod" className="bg-primary-color" />
                <label htmlFor="COD" className="font-semibold"> Thanh toán khi nhận hàng</label>
              </div>
              <div className="flex mt-2 gap-2">
                <input type="radio" id="bank" name="paymentMethod" className="bg-primary-color" />
                <label htmlFor="bank" className="font-semibold"> Thanh toán qua TÀI KHOẢN NGÂN HÀNG</label>
              </div>


            </div>

            <div className="mt-8 md:w-[48%] w-full">
              <div className="uppercase font-semibold text-primary-color border-b-primary-color border-b-[1px]">Chi tiết hóa đơn</div>

              <div className="">
                <>
                  {
                    wishList?.length > 0 &&
                    wishList.map(e => {
                      return (
                        <div className="py-[30px] flex justify-between border-b border-gray-200">
                          <div className="w-full  relative md:h-[90px] pl-[130px] md:pl-[170px]">
                            <div className="bg-cover bg-center bg-no-repeat w-[70px]  h-auto absolute left-1 md:left-10 top-[50%] -translate-y-1/2">
                              <img src={e.img[0]} alt="" className="w-full" />
                            </div>
                            <div className="">
                              <div className="uppercase mb-1 font-semibold">{e.name}</div>
                              <div className=" flex text-sm">
                                Màu:  <span className="ml-1"> Trắng</span>
                              </div>
                              <div className=" text-sm">
                                Số lượng: <span>{e.quantity}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-base   font-semibold md:text-base flex items-center md:block text-primary-color">
                            <span>{cost(e.price, e.quantity)}</span>
                            <span>VNĐ</span>
                          </div>
                        </div>
                      )
                    })
                  }

                </>

                <div className="">
                  <div className="flex justify-between">
                    <div className="uppercase font-light my-1">tiền hàng</div>
                    <div className="uppercase">{totalCost}vnđ</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="uppercase font-light my-1">phí vận chuyển</div>
                    <div className="uppercase">0 vnđ</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="uppercase font-light my-1">tổng cộng</div>
                    <div className="uppercase">{totalCost} vnđ</div>
                  </div>
                </div>

                <div className="mt-2">
                  <button className="uppercase w-full bg-black text-white py-2" onClick={handleOrder}>hoàn tất đơn hàng</button>
                  <div className="text-xs text-center mt-2">Vui lòng kiểm tra lại thông tin khi hoàn tất</div>
                </div>
              </div>

            </div>

          </div>
        }

        {
          currentSteps === 2 &&
          <div className="flex justify-center items-center h-[300px] flex-col gap-2">
            <span className=" text-primary-color" >Bạn đã đặt hàng thành công ^^</span>
            <button className="bg-black text-white py-2 px-8 uppercase" onClick={() => navigate('/history')}>Xem lịch sử đặt hàng</button>
          </div>
        }

      </div>




    </>
  )
}
