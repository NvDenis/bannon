import { BsTelephone, BsSearch, BsBag } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../../assets/img/logo_Non_Son_doc.svg'
import bglogo from '../../assets/img/bglogo.png'
import slogan from '../../assets/img/slogan_fix_1.svg'
import { useEffect, useState } from 'react';
import Login from '../login/login.tsx';
import Register from '../register/register.tsx';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMenuMobileTalet, setShowMenuMobileTablet] = useState(false);

  const handleShowLogin = (e: any) => {
    e.preventDefault();
    setShowLogin(pre => !pre)
  }

  const handleShowRegister = (e: any) => {
    e.preventDefault();
    setShowRegister(pre => !pre)
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <header id='myHeader' >
      {/* topheader */}
      <div className="w-full py-1.5 px-4 bg-color-header  ">
        <div className='flex justify-between items-center '>
          <div className="flex gap-2 ">
            <span className='flex items-center cursor-pointer gap-1'><BsTelephone /><span className=' hover:text-primary-color  duration-500 flex gap-1 '>1800 7179 <span className='hidden md:flex'> (Miễn phí cuộc gọi)</span></span></span>
            <span className='flex items-center cursor-pointer gap-1 hidden lg:flex'><BiMap /><span className='  hover:text-primary-color cursor-pointer duration-500 '> Hệ thống cửa hàng</span></span>
          </div>

          <div className="flex gap-2">
            <span className='flex items-center hidden lg:flex'><BsSearch /><span className=' hover:text-primary-color cursor-pointer duration-500'> Tìm kiếm</span></span>
            <span className='flex items-center hidden lg:flex relative' ><AiOutlineUser />
              <span className=' hover:text-primary-color cursor-pointer duration-500' onClick={() => setShowMenu(pre => !pre)}>
                Tài khoản
              </span>

              {showMenu && !isSticky &&

                <div className='absolute right-0 top-[30px] shadow-lg rounded z-10 bg-white'>
                  <ul className='p-[10px] min-w-[200px]'>
                    <li className='mb-[10px]'><a href="" className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleShowLogin}>Đăng nhập</a></li>
                    <li className='mb-[10px]'><a href="" className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleShowRegister}>Đăng ký</a></li>
                    <li className='mb-[10px]'><a href="" className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' >Facebook</a></li>
                  </ul>
                </div>

              }
            </span>
            <span className='flex items-center hidden lg:flex'><BsBag /><span className=' hover:text-primary-color cursor-pointer duration-500'> 0 Sản phẩm</span></span>
            <span className='flex items-center lg:hidden'><FiFacebook /><span className=' hover:text-primary-color cursor-pointer duration-500'> Mua hàng qua Facebook</span></span>
          </div>
        </div>
      </div>

      {/* logo */}
      <div className='flex justify-center relative'>

        <div className="hidden sm:block sm:absolute top-[-33px] left-1/2 transform -translate-x-1/2 w-56">
          <img src={bglogo} alt="Logo" className="w-220 h-90 object-contain w-full" />
        </div>

        <img src={logo} alt="" className=" max-h-16 top-[15px] sm:max-h-24 absolute sm:top-[-25px]" />
      </div>

      {/* navbar */}
      <nav className={`w-full ${isSticky ? 'fixed w-full left-0 right-0 -top-[4.5rem] shadow-md z-50 bg-white' : ''} `}>
        {/* navbar desktop*/}
        <ul className={`w-full flex justify-center gap-4 mt-[4.5rem] hidden lg:flex p-2   `}>
          <li className='text-sm cursor-pointer  '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN DA</a>
          </li>
          <li className='text-sm cursor-pointer '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN SNAPBACK</a>
          </li>
          <li className='text-sm cursor-pointer '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN KẾT</a>
          </li>
          <li className='text-sm cursor-pointer '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN JACKET</a>
          </li>
          <li className='text-sm cursor-pointer '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN ĐAN TAY</a>
          </li>
          <li className='text-sm cursor-pointer relative group '>
            <a href="" className='hover:text-[#e21e70] duration-500'>
              NÓN VÀNH
            </a>

            {/* subnav */}
            <div className='absolute bg-slate-50 -ml-[467px] p-[20px] w-[830px] flex-col border-t border-solid border-gray-300 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 '>
              <div className="w-[230px]">
                <div className='text-base font-medium py-[5px] border-b border-solid border-gray-500 mb-[20px] hover:text-primary-color duration-500'>NÓN VÀNH</div>
                <ul>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón vành thời trang</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón đi nắng</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bucket</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className='text-sm cursor-pointer '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN PHỚT</a>
          </li>
          <li className='text-sm cursor-pointer relative group '>
            <a href="" className='hover:text-[#e21e70] duration-500'>
              NÓN BẢO HIỂM

            </a>
            {/* subnav */}
            <div className='absolute bg-slate-50 -ml-[643px] p-[20px] w-[830px] flex-col border-t border-solid border-gray-300 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 '>
              <div className="w-[230px]">
                <div className='text-base font-medium py-[5px] border-b border-solid border-gray-500 mb-[20px] hover:text-primary-color duration-500'>NÓN BẢO HIỂM</div>
                <ul>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm trơn</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm có kính</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm sơn mài</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm họa tiết</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm 3/4</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className='text-sm cursor-pointer relative group '>
            <a href="" className='hover:text-[#e21e70] duration-500'>NÓN TRẺ EM</a>

            {/* subnav */}
            <div className='absolute bg-slate-50 -ml-[757px] p-[20px] w-[830px] flex-col border-t border-solid border-gray-300 mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 '>
              <div className="w-[230px]">
                <div className='text-base font-medium py-[5px] border-b border-solid border-gray-500 mb-[20px] hover:text-primary-color duration-500'>NÓN BẢO HIỂM</div>
                <ul>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm trẻ em</a></li>
                  <li className=''><a href="" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón vãi trẻ em</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className='text-sm cursor-pointer '>FLASHSALE</li>
        </ul>

        {/* navbar tablet vs mobile*/}
        <div className='w-full mt-20 flex justify-between h-[50px] px-[10px] shadow lg:hidden'>
          <div className='flex items-center gap-2' onClick={() => setShowMenuMobileTablet(pre => !pre)}>
            <span><AiOutlineMenu /></span>
            <span>MENU</span>
          </div>
          <div className='flex items-center gap-2'>
            <span><BsSearch /></span>
            <span><BsBag /></span>
          </div>
        </div>

        {/* fixed header */}
        <div className={`hidden absolute right-4 top-20 xl:flex gap-4 items-center duration-100 ${isSticky ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <span className='flex items-center cursor-pointer' onClick={() => setShowMenu(pre => !pre)}>
            <AiOutlineUser />
            <span className='hover:text-primary-color  duration-500'>Tài khoản</span>

            {showMenu && isSticky &&

              <div className='absolute right-4 top-[30px] shadow-lg rounded z-10 bg-white '>
                <ul className='p-[10px] min-w-[200px]'>
                  <li className='mb-[10px]'><a href="" className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleShowLogin}>Đăng nhập</a></li>
                  <li className='mb-[10px]'><a href="" className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleShowRegister}>Đăng ký</a></li>
                  <li className='mb-[10px]'><a href="" className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' >Facebook</a></li>
                </ul>
              </div>

            }
          </span>

          <span className='cursor-pointer'>
            <BsBag />
          </span>
        </div>

      </nav>

      {/* slogan */}
      <div className={`h-[44px] flex justify-center  ${isSticky ? 'mt-[8rem]' : 'mt-[1.5rem]'} `}>
        <img src={slogan} alt="" className='h-full' />
      </div>

      <Login showLogin={showLogin} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      <Register showRegister={showRegister} setShowRegister={setShowRegister} setShowLogin={setShowLogin} />

      {/* nav mobile vs tablet */}
     {
      showMenuMobileTalet && 
      <div className="fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 ">
      <div className="absolute bg-white w-[400px] max-w-[100%] right-0 transform z-30 duration-500 ">
        <div className="h-screen overflow-y-scroll">
          {/* header nav */}
          <div className="relative text-center py-4">
            MENU
            {/* close */}
            <span className="absolute right-4" onClick={() => setShowMenuMobileTablet(pre => !pre)}>
              <AiOutlineClose />
            </span>
          </div>
          <hr />

          <div className="flex justify-between">
            <ul className=" ">
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>Nón da</a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón vành</a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón kết</a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón phớt </a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón trẻ em</a></li>
            </ul>
            <ul className="">
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>Nón đan tay</a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón bảo hiểm</a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón snapback</a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>nón jacket </a></li>
              <li className='uppercase' ><a href="" className='inline-block py-3 px-4 text-sm'>flashsale</a></li>
            </ul>
          </div>
          <hr />

          <div className="">
            <ul>
              <li><a href="" className='uppercase inline-block py-3 px-4 text-sm'>thư viện video - hình ảnh</a></li>
              <li><a href="" className='uppercase inline-block py-3 px-4 text-sm'>nón sơn và báo chí</a></li>
              <li><a href="" className='uppercase inline-block py-3 px-4 text-sm'>thông tin tuyển dụng</a></li>
              <li><a href="" className='uppercase inline-block py-3 px-4 text-sm'>hình thức thanh toán </a></li>
              <li><a href="" className='uppercase inline-block py-3 px-4 text-sm'>hỗ trợ khách hàng</a></li>
            </ul>
          </div>

          {/* footer nav */}
          <div className="bg-color-footer">
            <ul>
              <li><a href="" className='uppercase text-sm flex items-center gap-2 px-4 py-5'><BsTelephone /> 1800 7191 (miễn phí cuộc gọi)</a></li>
              <li><a href="" className='uppercase text-sm flex items-center gap-2 px-4 py-5'><BiMap /> Hệ thống cửa hàng</a></li>
              <li><a href="" className='uppercase text-sm flex items-center gap-2 px-4 py-5'><AiOutlineUser /> tài khoản</a></li>
              <li><a href="" className='uppercase text-sm flex items-center gap-2 px-4 py-5'><AiOutlineMenu /> theo dõi đơn hàngx</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     }
    </header>
  )
}
