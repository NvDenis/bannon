import { useDispatch, useSelector } from "react-redux";
import { doDeleteProductCart, doDrawerCartToggle } from "../../redux/account/accountSlice";

import { useNavigate } from "react-router-dom";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { RootState } from "../../redux/store";



export default function DrawerCart() {

    const drawerCart = useSelector((state: RootState) => state.account.drawerCart)
    const dispatch = useDispatch();
    const wishList = useSelector((state: RootState) => state.account.user.wishList)
    const navigate = useNavigate()

    return (
        <main
            className={
                " fixed overflow-hidden z-[22] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (drawerCart
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-300 opacity-0 translate-x-full  ")
                    
            }
        >
            <section
                className={
                    " w-screen max-w-[360px] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (drawerCart ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <div className="h-screen overflow-y-scroll">
                    {/* header nav */}
                    <div className="py-4 px-8 flex justify-between">
                        <h1 className="uppercase font-semibold">Giỏ hàng của bạn</h1>
                        {/* close */}
                        <span className="relative" >
                            <div className='absolute bg-black -right-2 top-[0] w-6 h-6 rounded-2xl cursor-pointer' onClick={() => dispatch(doDrawerCartToggle())}>
                                <span className='absolute w-[15px] h-[2px] bg-white top-[10px] left-[5px] rotate-45 after:content-[""] after:absolute after:w-[15px] after:h-[2px] after:bg-white after:top-[0px] after:rotate-90 '  ></span>
                            </div>
                        </span>
                    </div>
                    <hr />

                    {
                        wishList && wishList?.length > 0 ?
                            <div>
                                <div>
                                    {
                                        wishList.map((e: { id: Key | null | undefined; img: (string | undefined)[]; name: string | number | boolean | ReactElement<string, string | JSXElementConstructor<string>> | Iterable<ReactNode> | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<string, string | JSXElementConstructor<string>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
                                            return (
                                                <div className="flex p-6 items-center border-b border-b-gray-200" key={e.id}>
                                                    <div className="w-[130px] bg-color-header">
                                                        <img src={e.img[0]} alt="" className="w-full" />
                                                    </div>
                                                    <div className="flex flex-col ml-2 w-full">
                                                        <div className="font-light text-xl">{e.name}</div>
                                                        <div className="font-light">1 x <span className="text-primary-color uppercase">{e.price} vnd</span></div>
                                                    </div>
                                                    <span className="relative cursor-pointer" onClick={() => dispatch(doDeleteProductCart(e.id))} >
                                                        <div className='absolute bg-black -right-2 top-[0] w-4 h-4 rounded-2xl cursor-pointer hover:bg-primary-color  duration-500'>
                                                            <span className='absolute w-[10px] h-[2px] bg-white top-[7px] left-[3px] rotate-45 after:content-[""] after:absolute after:w-[10px] after:h-[2px] after:bg-white after:top-[0px] after:rotate-90 '  ></span>
                                                        </div>
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="bg-color-header px-6 py-2">
                                    <div className="uppercase flex justify-between">
                                        <div className="">tổng giỏ hàng</div>
                                        <div className="">1,150,000 vnđ</div>
                                    </div>
                                    <div className="uppercase flex justify-between">
                                        <div className="">ưu đãi</div>
                                        <div className="">0 vnđ</div>
                                    </div>
                                    <div className="uppercase flex justify-between">
                                        <div className="">tiền hàng</div>
                                        <div className=" text-primary-color">1,150,000 vnđ</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <button className="py-2 bg-black text-white hover:bg-primary-color uppercase w-full duration-500" onClick={() => {
                                        navigate('/order')
                                        dispatch(doDrawerCartToggle())
                                    } }>xem giỏ hàng</button>
                                </div>
                            </div>
                            :
                            <div className="">
                                <h2 className="text-primary-color text-center py-4">Giỏ hàng của bạn chưa có sản phẩm nào</h2>
                            </div>

                    }


                </div>
            </section>

        </main>
    )
}
