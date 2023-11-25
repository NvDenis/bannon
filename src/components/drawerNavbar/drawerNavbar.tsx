import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { doDrawerNavToggle, doLoginToggle } from "../../redux/account/accountSlice";
import { Link } from "react-router-dom";




const DrawerNavbar: React.FC = () => {
    const drawerNav = useSelector((state: RootState) => state.account.drawerNav)
    const dispatch = useDispatch()
    return (
        <main
            className={
                " fixed overflow-hidden z-[22] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (drawerNav
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-300 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (drawerNav ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="h-screen overflow-y-scroll">
                    {/* header nav */}
                    <div className="relative text-center py-4">
                        MENU
                        {/* close */}
                        <span className="absolute right-4" onClick={() => dispatch(doDrawerNavToggle())}>
                            <AiOutlineClose />
                        </span>
                    </div>
                    <hr />

                    <div className="flex justify-between">
                        <ul className=" ">
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-da'} className='inline-block py-3 px-4 text-sm'>Nón da</Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-vanh'} className='inline-block py-3 px-4 text-sm'>nón vành</Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-ket'} className='inline-block py-3 px-4 text-sm'>nón kết</Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-phot'} className='inline-block py-3 px-4 text-sm'>nón phớt </Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-tre-em'} className='inline-block py-3 px-4 text-sm'>nón trẻ em</Link></li>
                        </ul>
                        <ul className="">
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-dan-tay'} className='inline-block py-3 px-4 text-sm'>Nón đan tay</Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-bao-hiem'} className='inline-block py-3 px-4 text-sm'>nón bảo hiểm</Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-snapback'} className='inline-block py-3 px-4 text-sm'>nón snapback</Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={'/category/non-jacket'} className='inline-block py-3 px-4 text-sm'>nón jacket </Link></li>
                            <li className='uppercase' ><Link onClick={() => dispatch(doDrawerNavToggle())} to={"/category/#"} className='inline-block py-3 px-4 text-sm'>flashsale</Link></li>
                        </ul>
                    </div>
                    <hr />

                    <div className="">
                        <ul>
                            <li><a className='uppercase inline-block py-3 px-4 text-sm'>thư viện video - hình ảnh</a></li>
                            <li><a className='uppercase inline-block py-3 px-4 text-sm'>nón sơn và báo chí</a></li>
                            <li><a className='uppercase inline-block py-3 px-4 text-sm'>thông tin tuyển dụng</a></li>
                            <li><a className='uppercase inline-block py-3 px-4 text-sm'>hình thức thanh toán </a></li>
                            <li><a className='uppercase inline-block py-3 px-4 text-sm'>hỗ trợ khách hàng</a></li>
                        </ul>
                    </div>

                    {/* footer nav */}
                    <div className="bg-color-footer">
                        <ul>
                            <li><a className='uppercase text-sm flex items-center gap-2 px-4 py-5'><BsTelephone /> 1800 7191 (miễn phí cuộc gọi)</a></li>
                            <li><a className='uppercase text-sm flex items-center gap-2 px-4 py-5'><BiMap /> Hệ thống cửa hàng</a></li>
                            <li><a className='uppercase text-sm flex items-center gap-2 px-4 py-5' onClick={() => {
                                dispatch(doLoginToggle());
                                dispatch(doDrawerNavToggle())
                            }}><AiOutlineUser /> tài khoản</a></li>
                            <li><a className='uppercase text-sm flex items-center gap-2 px-4 py-5'><AiOutlineMenu /> theo dõi đơn hàng</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default DrawerNavbar;

















