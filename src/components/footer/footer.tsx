import mail from '../../assets/img/mail.svg'

export default function Footer() {
  return (
    <footer className="">
      <div className="flex p-[30px]">
        <div className="w-1/2">
          <div className="text-lg leading-7 uppercase">
            nhận thông báo khuyến mãi mới nhất từ nón sơn
          </div>
        </div>
        <div className="w-1/2 relative">
          <input type="text" className="w-full outline-none pr-[50px] border-solid border-b-2 border-gray-500 h-10 " placeholder="Email của bạn" />
          <button className='absolute w-10 h-10 right-0 p-1'>
            <img src={mail} alt="" className='' />
          </button>
        </div>
      </div>

      <div>

      </div>

      
    </footer>
  )
}
