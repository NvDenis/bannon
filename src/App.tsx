import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { doLoginAction } from './redux/account/accountSlice'
import { callFetchAccount } from './services/api'
import Login from './components/login/login'
import Register from './components/register/register'
import DrawerNavbar from './components/drawerNavbar/drawerNavbar'
import DrawerCart from './components/drawerCart/drawerCart'
import { ModalManageAccount } from './components/modalManageAccount/ModalManageAccount'

function App() {

  
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAccount = async () => {
      const res = await callFetchAccount();
      if (res && res.data && res.data.user) {
        dispatch(doLoginAction(res.data.user))
      }
    }

    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      fetchAccount();
    }
  }, [])


  return (
    < >
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
      <Login  />
      <Register  />
      <DrawerCart />
      <DrawerNavbar />
      <ModalManageAccount />
    </>
  )
}

export default App
