import axios from '../utils/axios-customize'

interface IData {
    userId: string,
    fullName: string;
    phone: string;
    email: string;
    address: string;
    note: string;
    detail: {
        id: string;
        thumbnail: string;
        productName: string;
        quantity: number;
        price: string;
    }[];
    totalPrice: string;
}

export const callUpdateInfo = ({ userId, phone, fullName }: { userId: string, phone: string, fullName: string }) => {
    return axios.post(`user/update-info`, { userId, phone, fullName })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callLogin = (data: any) => {
    return axios.post('/user/login', data)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callRegister = (data: any) => {
    return axios.post('/user/register', data)
}

const callLogout = () => {
    return axios.post('/user/logout')
}

const callFetchAccount = () => {
    return axios.get('/user/account')
}

// const callRefreshToken = () => {
//     return axios.get('/user/refreshToken')
// }

const callGetCategory = () => {
    return axios.get('/category/')
}

const callGetCategoryById = (params: string | undefined) => {
    return axios.get(`/category/${params}`,)
}

const callGetProductByID = (id: string) => {
    return axios.get(`/product/detail/${id}`)
}

const callGetFeaturedProducts = () => {
    return axios.get('/product/featured-product')
}

const callGetBOGOProducts = () => {
    return axios.get('/product/buy-one-get-one')
}

const callOrder = (data: IData) => {
    return axios.post('/order/', data)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const callGetHistory = () => {
    return axios.get('/history')
}

export const callUpdatePassowrd = ({ userId, password, newPassword }: { userId: string, password: string, newPassword: string }) => {
    return axios.post('/user/update-password', { userId, password, newPassword })
}

export {
    callRegister,
    callLogin,
    callGetCategory,
    callGetCategoryById,
    callGetProductByID,
    callGetFeaturedProducts,
    callGetBOGOProducts,
    // callRefreshToken,
    callFetchAccount,
    callLogout,
    callOrder,
    callGetHistory,
}