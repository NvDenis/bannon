import axios from '../utils/axios-customize'

const callGetCategory = () => {
    return axios.get('/product/category')
}

export {
    callGetCategory,
}