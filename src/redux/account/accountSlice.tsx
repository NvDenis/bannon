import { createSlice } from '@reduxjs/toolkit'

interface IProduct {
    id: string,
    img: string[],
    name: string,
    price: string,
    quantity: number,
}

// Define a type for the slice state
interface AccountState {
    isAuthenticated: boolean,
    loginToggle: boolean,
    registerToggle: boolean,
    user: {
        id: string,
        fullName: string,
        email: string,
        phone: string,
        role: string,
        wishList: IProduct[],
    },
    drawerCart: boolean,
    drawerNav: boolean,
}

// Define the initial state using that type
const initialState: AccountState = {
    isAuthenticated: false,
    loginToggle: false,
    registerToggle: false,
    user: {
        id: '',
        fullName: '',
        email: '',
        phone: '',
        role: '',
        wishList: [],
    },
    drawerCart: false,
    drawerNav: false,
}

export const accountSlice = createSlice({
    name: 'account',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        doResetCart: (state) => {
            state.user.wishList = []
        },
        doDrawerCartToggle: (state) => {
            state.drawerCart = !state.drawerCart;
        },
        doDrawerNavToggle: (state) => {
            state.drawerNav = !state.drawerNav;
        },
        doLoginToggle: (state) => {
            state.loginToggle = !state.loginToggle;
        },
        doRegisterToggle: (state) => {
            state.registerToggle = !state.registerToggle;
        },
        doDeleteProductCart: (state, action) => {
            const id = action.payload;


            // Use the filter method to create a new array without the item with the specified id
            const updatedWishList = state.user.wishList.filter((product) => product.id !== id);

            // Update the state with the new wishList array
            state.user.wishList = updatedWishList;

        },
        doOnChangeQuantity: (state, action) => {
            const { id, quantity } = action.payload

            // Kiểm tra xem sản phẩm có tồn tại trong wishList không
            const existingProductIndex = state.user?.wishList.findIndex(product => product.id === id);

            if (existingProductIndex !== -1) {
                // Ví dụ sử dụng optional chaining và kiểm tra trước khi gán
                if (state.user?.wishList) {
                    const existingProductIndex = state.user.wishList.findIndex(product => product.id === id);

                    if (existingProductIndex !== -1) {
                        state.user.wishList[existingProductIndex].quantity = quantity;
                    }
                }
            }

        },
        doAddProductCart: (state, action) => {
            const productToAdd: IProduct = action.payload;

            const existingProductIndex = state.user?.wishList.findIndex(product => product.id === productToAdd.id);
            if (existingProductIndex !== -1) {
                state.user.wishList[existingProductIndex].quantity += 1;
            } else {
                state.user.wishList.push(productToAdd)
            }
        },
        doLoginAction: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload
        },
        doLogoutAction: (state) => {
            // Kiểm tra trước khi đặt lại state.user
            localStorage.removeItem('access_token');
            state.isAuthenticated = false;
            state.user = {
                id: '',
                fullName: '',
                email: '',
                phone: '',
                role: '',
                wishList: []
            };
        },
    },
})

export const {
    doLoginAction,
    doLogoutAction,
    doLoginToggle,
    doRegisterToggle,
    doDrawerCartToggle,
    doAddProductCart,
    doDeleteProductCart,
    doDrawerNavToggle,
    doOnChangeQuantity,
    doResetCart
} = accountSlice.actions


export default accountSlice.reducer