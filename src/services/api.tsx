import axios from '../utils/axios-customize'

const callLogin = (data:any) => {
    return axios.post('/user/login', data)
}

const callRegister = (data:any) => {
    return axios.post('/user/register', data)
}

const callLogout = () => {
    return axios.post('/user/logout')
}

const callFetchAccount = () => {
    return axios.get('/user/account')
}

const callRefreshToken = () => {
    return axios.get('/user/refreshToken')
}

const callGetCategory = () => {
    return axios.get('/category/')
}

const callGetCategoryById = (params: any) => {
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

export {
    callRegister,
    callLogin,
    callGetCategory,
    callGetCategoryById,
    callGetProductByID,
    callGetFeaturedProducts,
    callGetBOGOProducts,
    callRefreshToken,
    callFetchAccount,
    callLogout,
}