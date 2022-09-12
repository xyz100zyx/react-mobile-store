import { configureStore } from '@reduxjs/toolkit'
import phonesReducer from "./slices/phonesSlice";
import swiperReducer from './slices/swiperSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
        phones: phonesReducer,
        swiper: swiperReducer,
        filter: filterReducer,
        cart: cartReducer,
    }
})

export default store;