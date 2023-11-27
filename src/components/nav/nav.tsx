import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BsBag, BsSearch } from "react-icons/bs";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { callLogout } from "../../services/api";
import { doDrawerCartToggle, doDrawerNavToggle, doLoginToggle, doLogoutAction, doModalManageAccountToggle, doRegisterToggle } from "../../redux/account/accountSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";


export default function NavBar() {

    const [isSticky, setIsSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector((state: RootState) => state.account.user)
    const isAuthenticated = useSelector((state: RootState) => state.account.isAuthenticated);
    const wishList = useSelector((state: RootState) => state.account.user.wishList)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleShowLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(doLoginToggle())
    }

    const handleShowRegister = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(doRegisterToggle())
    }



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

    const handleLogout = async () => {
        const res = await callLogout();
        if (res && res.data) {
            dispatch(doLogoutAction());
            toast.success("Đăng xuất thành công");
            navigate("/");
        }
    }


    return (

        <nav className={`sticky top-0  bg-white ${isSticky ? 'shadow-lg z-[20]' : 'z-[1]'} `}>
            {/* navbar desktop*/}
            <ul className={`w-full flex justify-center gap-4 mt-[4.5rem] hidden lg:flex p-2   `}>
                <li className='text-sm cursor-pointer  '>
                    <Link to={'/category/non-da'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN DA</Link>
                </li>
                <li className='text-sm cursor-pointer '>
                    <Link to={'/category/non-snapback'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN SNAPBACK</Link>
                </li>
                <li className='text-sm cursor-pointer '>
                    <Link to={'/category/non-ket'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN KẾT</Link>
                </li>
                <li className='text-sm cursor-pointer '>
                    <Link to={'/category/non-jacket'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN JACKET</Link>
                </li>
                <li className='text-sm cursor-pointer '>
                    <Link to={'/category/non-dan-tay'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN ĐAN TAY</Link>
                </li>
                <li className='text-sm cursor-pointer relative group '>
                    <Link to={'/category/non-vanh'} className='hover:text-[#e21e70] duration-500 block py-2'>
                        NÓN VÀNH
                    </Link>

                    {/* subnav */}
                    <div className='absolute bg-slate-50 -ml-[467px] p-[20px] w-[830px] flex-col border-t border-solid border-gray-300 mt-[9px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 z-[7] '>
                        <div className="w-[230px]">
                            <div className='text-base font-medium py-[5px] border-b border-solid border-gray-500 mb-[20px] hover:text-primary-color duration-500'>NÓN VÀNH</div>
                            <ul>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón vành thời trang</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón đi nắng</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bucket</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='text-sm cursor-pointer '>
                    <Link to={'/category/non-phot'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN PHỚT</Link>
                </li>
                <li className='text-sm cursor-pointer relative group '>
                    <Link to={'/category/non-bao-hiem'} className='hover:text-[#e21e70] duration-500 block py-2'>
                        NÓN BẢO HIỂM

                    </Link>
                    {/* subnav */}
                    <div className='absolute bg-slate-50 -ml-[643px] p-[20px] w-[830px] flex-col border-t border-solid border-gray-300 mt-[9px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 '>
                        <div className="w-[230px]">
                            <div className='text-base font-medium py-[5px] border-b border-solid border-gray-500 mb-[20px] hover:text-primary-color duration-500'>NÓN BẢO HIỂM</div>
                            <ul>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm trơn</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm có kính</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm sơn mài</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm họa tiết</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm 3/4</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='text-sm cursor-pointer relative group '>
                    <Link to={'/category/non-tre-em'} className='hover:text-[#e21e70] duration-500 block py-2'>NÓN TRẺ EM</Link>

                    {/* subnav */}
                    <div className='absolute bg-slate-50 -ml-[757px] p-[20px] w-[830px] flex-col border-t border-solid border-gray-300 mt-[9px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  duration-500 '>
                        <div className="w-[230px]">
                            <div className='text-base font-medium py-[5px] border-b border-solid border-gray-500 mb-[20px] hover:text-primary-color duration-500'>NÓN BẢO HIỂM</div>
                            <ul>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón bảo hiểm trẻ em</a></li>
                                <li className=''><a href="#" className='uppercase block py-[10px] border-b border-solid border-gray-300 hover:text-primary-color relative duration-500 after:content-[""] after:absolute after:left-0 after:top-[100%] after:w-[0] after:h-[1px]  after:bg-primary-color after:hover:w-[100%] after:duration-500  '>Nón vãi trẻ em</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='text-sm cursor-pointer py-2 text-primary-color hover:underline'>FLASHSALE</li>
            </ul>

            {/* navbar tablet vs mobile*/}
            <div className='w-full mt-20 flex justify-between h-[50px] px-[10px]  lg:hidden '>
                <div className='flex items-center gap-2' onClick={() => dispatch(doDrawerNavToggle())}>
                    <span><AiOutlineMenu /></span>
                    <span>MENU</span>
                </div>
                <div className='flex items-center gap-3'>
                    <span className=""><BsSearch /> </span>
                    <span className="block pl-1 relative" onClick={() => dispatch(doDrawerCartToggle())}><BsBag />
                        <div className="absolute bg-black w-3 h-3 top-[5px] left-4 text-white flex items-center justify-center rounded text-xs">{(wishList?.length > 0) ? wishList.length : 0}</div>
                    </span>
                </div>
            </div>

            {/* fixed header */}
            <div className={`hidden absolute right-4 top-[10px] xl:flex gap-4 items-center duration-100 ${isSticky ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <span className='flex items-center cursor-pointer' onClick={() => setShowMenu(pre => !pre)}>
                    <AiOutlineUser />
                    <span className='hover:text-primary-color  duration-500'>
                        {
                            isAuthenticated ?
                                <span>
                                    {user.fullName}
                                </span>
                                :
                                <span>
                                    Tài khoản
                                </span>
                        }
                    </span>

                    {showMenu && isSticky &&

                        <div className='absolute right-8 top-[50px] shadow-xl rounded-2xl z-10 bg-white '>
                            <ul className='p-[10px] min-w-[200px]'>
                                {
                                    !isAuthenticated ?
                                        <>
                                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleShowLogin}>Đăng nhập</a></li>
                                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleShowRegister}>Đăng ký</a></li>
                                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' >Facebook</a></li>
                                        </>
                                        :
                                        <>
                                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={() => dispatch(doModalManageAccountToggle())} >Quản lí tài khoản</a></li>
                                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color cursor-pointer' onClick={() => navigate('/history')} >Xem lịch sử đặt hàng</a></li>
                                            <li className='mb-[10px]'><a className='bg-black text-white block text-center py-[10px] px-[15px] text-sm rounded hover:bg-primary-color' onClick={handleLogout}>Đăng xuất</a></li>

                                        </>
                                }
                            </ul>
                        </div>


                    }
                </span>
                <span className="block pl-1 relative cursor-pointer" onClick={() => dispatch(doDrawerCartToggle())}><BsBag />
                    <div className="absolute bg-black w-3 h-3 top-[5px] left-4 text-white flex items-center justify-center rounded text-xs">{(wishList?.length > 0) ? wishList.length : 0}</div>
                </span>
            </div>

        </nav>
    )
}
