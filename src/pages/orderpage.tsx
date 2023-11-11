import { useState } from "react"
import nonson1 from '../assets/img/800_nonson_1 (4).png'
import deleteBtn from '../assets/img/delete-button.png'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function OrderPage() {

  const steps: string[] = [
    'Giỏ hàng',
    'Vận chuyển và thanh toán',
    'Hoàn tất',
  ]

  const [currentSteps, setCurrentSteps] = useState(0)
  const navigate = useNavigate()
  const wishList = useSelector(state => state.account.user.wishList)

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

      {
        wishList?.length > 0 ?
          <div>

            {
              currentSteps === 0 &&
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
                          wishList.map(e => {
                            return (
                              <div className="py-[30px] flex border-b-[1px] border-gray-300">
                                <div className="w-full md:w-[50%]  relative md:h-[90px] pl-[130px] md:pl-[170px]">
                                  <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer">
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
                                    <input type="number" className="md:hidden w-20 border border-black py-2 pl-8 outline-none" defaultValue={1} min={1} />
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
                                  <input type="number" className="w-full border border-black py-2 pl-8 outline-none" defaultValue={1} min={1} />
                                </div>
                                <div className="text-base min-w-[110px] md:w-[20%] text-right font-semibold md:text-xl flex items-center md:block">
                                  {e.price} VND
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
                        <div className="font-light uppercase ">3493949 vnđ</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="font-normal uppercase ">mã khuyến mãi</div>
                        <div className="font-light uppercase ">3493949 vnđ</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="font-normal uppercase ">giảm giá dùng điểm</div>
                        <div className="font-light uppercase ">3493949 vnđ</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="font-normal uppercase ">ưu đãi</div>
                        <div className="font-light uppercase ">3493949 vnđ</div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <div className="font-normal uppercase ">Tiền hàng</div>
                        <div className="font-medium text-xl uppercase  ">3493949 vnđ</div>
                      </div>

                      <button className="bg-black text-white w-full uppercase py-2 hover:bg-primary-color duration-500 " onClick={() => setCurrentSteps(1)}>tiếp tục thanh toán</button>
                    </div>

                  </div>
                </div>
              </div>
            }

            {
              currentSteps === 1 &&
              <div className="w-full max-w-[1190px] mx-auto px-[10px] flex justify-between flex-wrap">

                <div className="mt-8 md:w-[48%] w-full md:border-r md:border-r-gray-200 md:pr-12">
                  <div className="uppercase font-semibold text-primary-color border-b-primary-color border-b-[1px]">thông tin khách hàng</div>
                  <input type="text" placeholder="Họ và tên *" className="w-full border my-2 p-2 rounded" />
                  <input type="tel" placeholder="Điện thoại *" className="w-full border my-2 p-2 rounded" />
                  <input type="email" required placeholder="Email " className="w-full border my-2 p-2 rounded" />
                  <input type="email" required placeholder="Địa chỉ: Nhập số nhà, tên Đường, Phường/Xã *" className="w-full border my-2 p-2 rounded" />
                  <textarea name="" id="" placeholder="Ghi chú hóa đơn" className="w-full border my-2 p-2 rounded"></textarea>

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
                      <div className="py-[30px] flex justify-between">
                        <div className="w-full  relative md:h-[90px] pl-[130px] md:pl-[170px]">
                          <div className="bg-cover bg-center bg-no-repeat w-[70px]  h-auto absolute left-1 md:left-10 top-[50%] -translate-y-1/2">
                            <img src={nonson1} alt="" className="w-full" />
                          </div>
                          <div className="">
                            <div className="uppercase mb-1 font-semibold">nón trẻ em</div>
                            <div className=" flex text-sm">
                              Màu:  <span className=""> Trắng</span>
                            </div>
                            <div className=" text-sm">
                              Số lượng: <span>1</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-base min-w-[100px]  text-right font-semibold md:text-xl flex items-center md:block text-primary-color">
                          600.000 VND
                        </div>
                      </div>
                      <hr />
                    </>

                    <div className="">
                      <div className="flex justify-between">
                        <div className="uppercase font-light my-1">tiền hàng</div>
                        <div className="uppercase">950,000 vnđ</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="uppercase font-light my-1">phí vận chuyển</div>
                        <div className="uppercase">950,000 vnđ</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="uppercase font-light my-1">tổng cộng</div>
                        <div className="uppercase">950,000 vnđ</div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <button className="uppercase w-full bg-black text-white py-2" onClick={() => setCurrentSteps(2)}>hoàn tất đơn hàng</button>
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
                <button className="bg-black text-white py-2 px-8 uppercase">Xem lịch sử đặt hàng</button>
              </div>
            }

          </div>
          :
          <div className="flex h-[300px] justify-center items-center">
            <span className="text-red-500">Giỏ hàng của bạn đang trống</span>
          </div>
      }


    </>
  )
}
