import mail from '../../assets/img/mail.svg'
import congthuong from '../../assets/img/congthuong.png'

export default function Footer() {
  return (
    <footer className="">
      <div className="flex p-[30px] gap-4 flex-col sm:flex-row ">
        <div className="sm:w-1/2">
          <div className="text-lg leading-7 uppercase">
            nhận thông báo khuyến mãi mới nhất từ nón sơn
          </div>
        </div>
        <div className="sm:w-1/2 relative">
          <input type="text" className="w-full outline-none pr-[50px] border-solid border-b-2 border-gray-500 h-10 " placeholder="Email của bạn" />
          <button className='absolute w-10 h-10 right-0 p-1'>
            <img src={mail} alt="" className='' />
          </button>
        </div>
      </div>

      {/* body footer */}
      <div className='flex flex-col px-6 bg-color-footer p-10'>
        <div className="flex lg:justify-evenly lg:flex-row gap-6 ">
          <ul className='hidden lg:block  flex-1'>
            <li><a href="#" className='font-bold uppercase py-[8px] px-1 block text-sm hover:text-primary-color duration-500'>Tìm cửa hàng</a></li>
            <li><a href="#" className='font-bold uppercase py-[8px] px-1 block text-sm hover:text-primary-color duration-500'>nón sơn và báo chí</a></li>
            <li><a href="#" className='font-bold uppercase py-[8px] px-1 block text-sm hover:text-primary-color duration-500'>quy trình sản xuất</a></li>
            <li><a href="#" className='font-bold uppercase py-[8px] px-1 block text-sm hover:text-primary-color duration-500'>thư viện video - hình ảnh</a></li>
            <li><a href="#" className='font-bold uppercase py-[8px] px-1 block text-sm hover:text-primary-color duration-500'>tuyển dụng</a></li>
            <li><a href="#" className='font-bold uppercase py-[8px] px-1 block text-sm hover:text-primary-color duration-500'>theo dõi đơn hàng</a></li>
          </ul>
          <ul className='hidden lg:block  flex-1'>
            <h2 className='uppercase py-2 font-bold'>sản phẩm</h2>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón da</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón Snapback</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón Kết</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón phớt</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón đan tay</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón vành</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Nón bảo hiểm</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Phụ kiện</a></li>
          </ul>
          <ul className='hidden lg:block flex-1'>
            <h2 className='uppercase py-2 font-bold'>hỗ trợ khách hàng</h2>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Quy định chung</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Bảo mật thông tin</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Hướng dẫn tạo tài khoản</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Hướng dẫn mua hàng</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Chính sách đổi sản phẩm</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Thanh toán, giao nhận</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Các câu hỏi thường gặp</a></li>
          </ul>
          <ul className='hidden lg:block flex-1'>
            <h2 className='uppercase py-2 font-bold'>phương thức thanh toán</h2>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Thanh toán khi giao hàng(COD)</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Thanh toán chuyển khoảng ngân hàng</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Thanh toán thẻ ATM nội địa</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Thanh toán thẻ Visa/Master/JCB</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>Thanh toán qua ví điện tử VNPay/Mobile Banking</a></li>
            <li><a href="#" className='block py-1 text-base hover:text-primary-color duration-500'>theo dõi đơn hàng</a></li>
          </ul>
          <ul>
            <h2 className='uppercase py-2 font-bold flex-[2]'>thông tin liên hệ</h2>
            <li><a href="#" className='block py-1 text-sm lg:text-base hover:text-primary-color duration-500'>199 Hai Bà Trưng, Phường Võ Thị Sáu, Quận 3, TP.Hồ Chí Minh</a></li>
            <li><a href="#" className='block py-1 text-sm lg:text-base hover:text-primary-color duration-500'>Hotline Mua Hàng: 1800 7179 - 0918 43 43 43</a></li>
            <li><a href="#" className='block py-1 text-sm lg:text-base hover:text-primary-color duration-500'>Hotline CSKH 1800 7078</a></li>
            <li><a href="#" className='block py-1 text-sm lg:text-base hover:text-primary-color duration-500'>Email: info@nonson.vn</a></li>
            <li><a href="#" className='block py-1 text-sm lg:text-base hover:text-primary-color duration-500'>Website: nonson.vn</a></li>
            <li><a href="#" className='block py-1 text-sm lg:text-base hover:text-primary-color duration-500'>Theo dõi Nón Sơn trên </a></li>
          </ul>
        </div>

        <div className="flex lg:hidden justify-start gap-[40%] mt-6">
          <ul className=" ">
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>Nón da</a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón vành</a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón kết</a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón phớt </a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón trẻ em</a></li>
          </ul>
          <ul className="">
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>Nón đan tay</a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón bảo hiểm</a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón snapback</a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs '>nón jacket </a></li>
            <li className='' ><a href="" className='uppercase inline-block py-2 text-xs  text-primary-color'>flashsale</a></li>
          </ul>
        </div>


      </div>
      
      <hr />

      {/* copyright */}
      <div className=" bg-color-footer">
        <div className="flex py-10">
          <div className="w-[50%] hidden lg:flex flex-col items-center justify-center">
            <p className="">Copyright @ 2014-2020 Nón Sơn</p>
            <p className="">Thiết kế web: TRUST.vn</p>
          </div>
          <div className="lg:w-[50%] flex flex-col lg:flex-row px-6  ">
            <div className="">
              <p className='text-[13px] py-1'>GPĐKKD Nón Sơn số 0304246816 do Sở KHĐT TP.HCM cấp ngày 09/03/2006 </p>
              <p className='text-[13px] leading-5'>Mọi hành động sử dụng nội dung đăng tải trên Website Nón Sơn tại địa chỉ
                <a href="#"> www.nonson.vn </a>
                phải có sự đồng ý bằng văn bản của Công ty TNHH Thời Trang Nón Sơn.
              </p>
            </div>
            <img src={congthuong} alt="" className='h-12 w-36 mr-8 mt-4' />
          </div>
        </div>
      </div>

    </footer>
  )
}
