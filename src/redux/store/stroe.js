import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import couterReducer from '../slices/couterSlice'

const reducer = {
    auth : authReducer,
    couter : couterReducer
}

const store = configureStore({
    reducer : reducer,
   
})

export default store
