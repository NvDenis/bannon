import axios from '../utils/axios-customize'

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
    callGetCategory,
    callGetCategoryById,
    callGetProductByID,
    callGetFeaturedProducts,
    callGetBOGOProducts
}