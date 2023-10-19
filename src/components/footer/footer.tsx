import mail from '../../assets/img/mail.svg'

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

      <div>
        <ul>
          <li><a href="#">Tìm cửa hàng</a></li>
          <li><a href="">nón sơn và báo chí</a></li>
          <li><a href="">quy trình sản xuất</a></li>
          <li><a href="">thư viện video - hình ảnh</a></li>
          <li><a href="">tuyển dụng</a></li>
          <li><a href="">theo dõi đơn hàng</a></li>
        </ul>
        <ul>
          <li><a href="#">nón da</a></li>
          <li><a href="">Nón Snapback</a></li>
          <li><a href="">Nón Kết</a></li>
          <li><a href="">Nón phớt</a></li>
          <li><a href="">Nón đan tay</a></li>
          <li><a href="">Nón vành</a></li>
          <li><a href="">Nón bảo hiểm</a></li>
          <li><a href="">Phụ kiện</a></li>
        </ul>
        <ul>
          <li><a href="#">Quy định chung</a></li>
          <li><a href="">Bảo mật thông tin</a></li>
          <li><a href="">Hướng dẫn tạo tài khoản</a></li>
          <li><a href="">Hướng dẫn mua hàng</a></li>
          <li><a href="">Chính sách đổi sản phẩm</a></li>
          <li><a href="">Thanh toán, giao nhận</a></li>
          <li><a href="">Các câu hỏi thường gặp</a></li>
        </ul>
        <ul>
          <li><a href="#">Thanh toán khi giao hàng</a></li>
          <li><a href="">nón sơn và báo chí</a></li>
          <li><a href="">quy trình sản xuất</a></li>
          <li><a href="">thư viện video - hình ảnh</a></li>
          <li><a href="">tuyển dụng</a></li>
          <li><a href="">theo dõi đơn hàng</a></li>
        </ul>
      </div>

      
    </footer>
  )
}
