import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { doModalManageAccountToggle, doUpdateInfo } from "../../redux/account/accountSlice"
import { callUpdateInfo, callUpdatePassowrd } from "../../services/api"
import { toast } from 'react-toastify'

export const ModalManageAccount = () => {

  const user = useSelector((state: RootState) => state.account.user)
  const modalToggle = useSelector((state: RootState) => state.account.modalManageAccount)

  const tabs: string[] = [
    'Cập nhật thông tin',
    'Đổi mật khẩu'
  ]
  const dispatch = useDispatch()
  const [type, setType] = useState('Cập nhật thông tin')
  const [data, setData] = useState({
    phone: '',
    fullName: '',
    password: '',
    newPassword: ''
  })



  const handleOnChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }
  const handleUpdateInfo = async () => {
    try {
      const res = await callUpdateInfo({ userId: user.id, phone: data.phone, fullName: data.fullName })
      if (res && res.data) {
        toast.success(res.message)
        dispatch(doUpdateInfo(res.data.user))
        dispatch(doModalManageAccountToggle());
      }

    } catch (error) {
      toast.error(res.message)
      return
    }
  }

  const handleUpdatePassword = async () => {
    try {
      const res = await callUpdatePassowrd({ userId: user.id, password: data.password, newPassword: data.newPassword });
      console.log('check res ', res);
      if (res && res.data && res.success) {
        // Password update was successful
        // You might want to perform some action, e.g., show a success message
        toast.success(res.message);
        dispatch(doModalManageAccountToggle());
      } else {
        // Password update failed
        // Handle the error, e.g., show an error message
        console.error("Password update failed:", res.data.message);
        toast.error(res.data.message);
        return;
      }

    } catch (error) {
      // Handle other errors, e.g., network issues
      console.error("An error occurred while updating password:", error);
    }
  };

  return (
    <>
      {
        modalToggle &&
        <section className="fixed left-0 top-0 right-0 bottom-0 z-[21] flex">
          <div className="absolute w-full h-full bg-black opacity-[.4]" onClick={() => dispatch(doModalManageAccountToggle())}></div>
          <div className="w-full h-full md:w-[370px] md:h-auto m-auto py-10 px-8 bg-white relative animate-growth ">
            <h1 className="uppercase text-center pb-4 text-xl font-bold">Quản lí tài khoản</h1>
            <div className='absolute bg-black top-4 right-4 w-6 h-6 rounded-2xl cursor-pointer' onClick={() => {
              dispatch(doModalManageAccountToggle())
            }}>
              <span className='absolute w-[15px] h-[2px] bg-white top-[10px] left-[4.5px] rotate-45 after:content-[""] after:absolute after:w-[15px] after:h-[2px] after:bg-white after:top-[0px] after:rotate-90 '  ></span>
            </div>
            <div className="flex gap-4 pb-8">
              {
                tabs.map(tab => {
                  return (
                    <p
                      className={`cursor-pointer ${type === tab ? 'border-b-2 border-primary-color' : ''} `}
                      onClick={() => {
                        setType(tab)
                      }}
                    >
                      {tab}
                    </p>
                  )
                })
              }
            </div>


            <div className="">

              {
                type === 'Cập nhật thông tin' &&
                (
                  <div>
                    <div className='mb-[15px]'>
                      <label htmlFor="">Email</label>
                      <input disabled className="h-[45px] bg-gray-300 cursor-not-allowed  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " type="email" defaultValue={user.email} ></input>
                    </div>
                    <div className='mb-[15px]'>
                      <label htmlFor="">Số điện thoại của bạn</label>
                      <input className="h-[45px]  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " type="tel" name="phone" defaultValue={user.phone} onChange={(e) => handleOnChange(e)}></input>
                    </div>
                    <div className='mb-[15px]'>
                      <label htmlFor="">Tên của bạn</label>
                      <input className="h-[45px]  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " type="text" name="fullName" defaultValue={user.fullName} onChange={(e) => handleOnChange(e)}></input>
                    </div>

                    <button className='w-full bg-black text-white uppercase py-3 px-10 mt-5 hover:bg-primary-color duration-500' onClick={handleUpdateInfo}> cập nhật </button>
                  </div>
                )
              }

              {
                type === 'Đổi mật khẩu' &&
                <>
                  <div className='mb-[15px]'>
                    <label htmlFor="">Email</label>
                    <input disabled className="h-[45px] bg-gray-300 cursor-not-allowed  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " type="email" defaultValue={user.email} ></input>
                  </div>

                  <div className='mb-[15px]'>
                    <label htmlFor="">Mật khẩu hiện tại của bạn</label>
                    <input className="h-[45px]  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " type="password" name="password" onChange={(e) => handleOnChange(e)}></input>
                  </div>
                  <div className='mb-[15px]'>
                    <label htmlFor="">Mật khẩu mới</label>
                    <input className="h-[45px]  outline-none border-solid border-slate-400 border-[1px] border-collapse text-sm w-full px-[10px] " type="password" name="newPassword" onChange={(e) => handleOnChange(e)}></input>
                  </div>

                  <button className='w-full bg-black text-white uppercase py-3 px-10 mt-5 hover:bg-primary-color duration-500' onClick={(e) => handleUpdatePassword(e)}> xác nhận </button>
                </>
              }
            </div>


          </div>
        </section >
      }
    </>

  )
}
