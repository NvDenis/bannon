import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AccountState {
    isAuthenticated: boolean,
    loginToggle: boolean,
    registerToggle: boolean,
    user: {
        _id: string,
        fullName: string,
        email: string,
        phone: string,
        role: string,
        wishList: unknown[]

    },
    drawerCart: boolean,
}

// Define the initial state using that type
const initialState: AccountState = {
    isAuthenticated: false,
    loginToggle: false,
    registerToggle: false,
    user: {
        _id: '',
        fullName: '',
        email: '',
        phone: '',
        role: '',
        wishList: []
    },
    drawerCart: false,
}

export const accountSlice = createSlice({
    name: 'account',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        doDrawerCartToggle: (state) => {
            state.drawerCart = !state.drawerCart;
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

        }
        ,
        doAddProductCart: (state, action) => {
            const product: { id: string, img: string[]; name: string; price: string; sold: number } = action.payload;

            // Ensure that state.user is not optional
            if (state.user) {
                // Check if state.user.wishList is defined before accessing it
                state.user.wishList = state.user.wishList ? [...state.user.wishList, product] : [product];
            }
        },

        // Use the PayloadAction type to declare the contents of `action.payload`
        doLoginAction: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload
        },
        doLogoutAction: (state) => {
            localStorage.removeItem('access_token');
            state.isAuthenticated = false;
            state.user = {
                _id: '',
                fullName: '',
                email: '',
                phone: '',
                role: '',
                wishList: []
            }
        },
    },
})

export const { doLoginAction, doLogoutAction, doLoginToggle, doRegisterToggle, doDrawerCartToggle, doAddProductCart, doDeleteProductCart } = accountSlice.actions


export default accountSlice.reducer