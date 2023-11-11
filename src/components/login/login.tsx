import { useState } from "react"
import { callLogin } from "../../services/api"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux"
import { doLoginAction, doLoginToggle, doRegisterToggle } from "../../redux/account/accountSlice"
import { RootState } from "../../redux/store"



interface IData {
    email: string,
    password: string,
}

export default function Login() {
    const loginToggle = useSelector((state: RootState) => state.account.loginToggle)
    const dispatch = useDispatch();
    const [data, setData] = useState<IData>({ email: '', password: '' })

    const handleShowRegister = () => {
        dispatch(doLoginToggle())
        dispatch(doRegisterToggle())
    }

    const handleOnChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;

        setData((pre) => {
            return {
                ...pre,
                [name]: value,
            }
        })
    }

    const handleLogin = async () => {
        try {
            const res = await callLogin(data);

            if (res && res?.data && res?.data?.user?._id) {
                localStorage.setItem("access_token", res.data.access_token);
                dispatch(doLoginAction(res.data.user));
                toast.success('Login successfully!')
                dispatch(doLoginToggle())
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            // Hiển thị thông báo lỗi cho người dùng
            toast.error('Đã xảy ra lỗi khi đăng ký');
        }
    }

    return (
        <>
            {
                loginToggle ?
                    <div className="fixed left-0 top-0 right-0 bottom-0 z-[21] flex">
                        <div className="absolute w-full h-full bg-black opacity-[.4]" onClick={() => dispatch(doLoginToggle())}></div>
                        <div className="w-full h-full md:w-[370px] md:h-auto m-auto py-10 px-8 bg-white relative animate-growth">

                            <div className="flex justify-between px-4 relative mb-[25px]">
                                <div className="uppercase text-[25px] leading-[38px] font-[400] text-black cursor-pointer ">đăng nhập</div>
                                <div className="uppercase text-[25px] leading-[38px] font-[400] text-gray-400 cursor-pointer " onClick={handleShowRegister}>đăng ký</div>

                                <div className='absolute bg-black -right-2 top-[-25px] w-6 h-6 rounded-2xl cursor-pointer' onClick={() => {
                                    dispatch(doLoginToggle())
                                }}>
                                    <span className='absolute w-[15px] h-[2px] bg-white top-[10px] left-[5px] rotate-45 after:content-[""] after:absolute after:w-[15px] after:h-[2px] after:bg-white after:top-[0px] after:rotate-90 '  ></span>
                                </div>
                            </div>

                            <div className='mb-[15px]'>
                                <input className="h-[45px]  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " onChange={handleOnChange} name="email" placeholder='Email của bạn'></input>
                            </div>
                            <div className='mb-[10px]'>
                                <input className="h-[45px]  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " onChange={handleOnChange} name="password" placeholder='Mật khẩu' type='password'></input>
                            </div>

                            <button className='w-full bg-black text-white uppercase py-3 px-10 mt-5 hover:bg-primary-color duration-500' onClick={handleLogin}> đăng nhập </button>

                            <div className="flex justify-between mt-[10px] items-center">
                                <span className="flex gap-2 items-center">
                                    <input type="checkbox" className="w-[20px] h-[20px]" width={20} height={20} />
                                    Ghi nhớ
                                </span>

                                <span className="text-primary-color cursor-pointer">
                                    Quên mật khẩu?
                                </span>
                            </div>

                            <div className="text-center my-[10px]">- Hoặc đăng nhập với -</div>

                            <button className='w-full bg-black text-white uppercase py-3 px-10 mt-5 hover:bg-primary-color duration-500'> facebook </button>
                            <div className="text-base text-center text-[14px] my-[10px]">Tôi đã đọc và đồng ý với Điều khoản và Quy định của Nón Sơn </div>

                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}
