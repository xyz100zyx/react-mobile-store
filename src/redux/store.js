import { configureStore } from '@reduxjs/toolkit'
import phonesReducer from "./slices/phonesSlice";
import swiperReducer from './slices/swiperSlice';

const store = configureStore({
    reducer: {
        phones: phonesReducer,
        swiper: swiperReducer,
    }
})

export default store;