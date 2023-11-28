import { BsTelephone, BsSearch, BsBag } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import logo from '../../assets/img/logo_Non_Son_doc.svg'
import bglogo from '../../assets/img/bglogo.png'
import { useState } from 'react';
import NavBar from '../nav/nav.tsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { doDrawerCartToggle, doLoginToggle, doLogoutAction, doModalManageAccountToggle, doRegisterToggle } from '../../redux/account/accountSlice.tsx';
import { callLogout } from '../../services/api.tsx';
import { RootState } from '../../redux/store.tsx';

export default function Header() {
  const user = useSelector((state: RootState) => state.account.user)
  const isAuthenticated = useSelector((state: RootState) => state.account.isAuthenticated);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishList = useSelector((state: RootState) => state.account.user.wishList)


  const handleShowLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(doLoginToggle())
  }

  const handleShowRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(doRegisterToggle())
  }


  const handleLogout = async () => {
    const res = await callLogout();
    if (res && res.data) {
      dispatch(doLogoutAction());
      toast.success("Đăng xuất thành công");
      navigate("/");
    }
  }



  return (
    <>
      <header >
        {/* topheader */}
        <div className="w-full py-1.5 px-4 bg-color-header  ">
          <div className='flex justify-between items-center '>
            <div className="flex gap-2 ">
              <span className='flex items-center cursor-pointer gap-1'><BsTelephone /><span className=' hover:text-primary-color  duration-500 flex gap-1 '>1800 7179 <span className='hidden md:flex'> (Miễn phí cuộc gọi)</span></span></span>
              <span className='flex items-center cursor-pointer gap-1 hidden lg:flex'><BiMap /><span className='  hover:text-primary-color cursor-pointer duration-500 '> Hệ thống cửa hàng</span></span>
            </div>

            <div className="flex gap-2">
              <span className='flex items-center hidden lg:flex'><BsSearch /><span className=' hover:text-primary-color cursor-pointer duration-500'> Tìm kiếm</span></span>
              <div className='flex items-center hidden lg:flex relative' >
                <AiOutlineUser />
                {
                  isAuthenticated === false ?
                    <span className=' hover:text-primary-color cursor-pointer duration-500' onClick={() => setShowMenu(pre => !pre)}>
                      Tài khoản
                    </span>
                    :
                    <span className=' hover:text-primary-color cursor-pointer duration-500' onClick={() => setShowMenu(pre => !pre)}>
                      {
                        user.fullName
                      }
                    </span>
                }
                {showMenu &&

                  <div className='absolute right-0 top-[30px] shadow-lg rounded-2xl z-10 bg-white'>
                    <ul className='p-[10px] min-w-[200px]'>
                      {
                        !isAuthenticated ?
                          <>
                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={handleShowLogin}>Đăng nhập</a></li>
                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={handleShowRegister}>Đăng ký</a></li>
                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' >Facebook</a></li>
                          </>
                          :
                          <ul>
                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={() => dispatch(doModalManageAccountToggle())} >Quản lí tài khoản</a></li>
                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={() => navigate('/history')} >Xem lịch sử đặt hàng</a></li>
                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={handleLogout} >Đăng xuất</a></li>

                          </ul>
                      }
                    </ul>
                  </div>

                }
              </div>
              <span className='flex items-center hidden lg:flex relative' onClick={() => dispatch(doDrawerCartToggle())}>
                <BsBag />
                <span className=' hover:text-primary-color cursor-pointer duration-500'> {wishList?.length > 0 ? wishList.length : 0} Sản phẩm</span>
              </span>
              <span className='flex items-center lg:hidden'><FiFacebook /><span className=' hover:text-primary-color cursor-pointer duration-500'> Mua hàng qua Facebook</span></span>
            </div>
          </div>
        </div>

        {/* logo */}
        <div className='flex justify-center relative'>

          <div className="hidden sm:block sm:absolute top-[-33px] left-1/2 transform -translate-x-1/2 w-56">
            <img src={bglogo} alt="Logo" className="w-220 h-90 object-contain w-full " />
          </div>

          <img src={logo} alt="" className=" max-h-16 top-[15px] sm:max-h-24 absolute sm:top-[-25px] cursor-pointer" onClick={() => navigate('/')} />
        </div>


      </header>

      {/* NavBar */}
      <NavBar />
    </>
  )
}
