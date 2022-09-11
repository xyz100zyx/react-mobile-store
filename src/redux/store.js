import { configureStore } from '@reduxjs/toolkit'
import phonesReducer from "./slices/phonesSlice";
import swiperReducer from './slices/swiperSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
    reducer: {
        phones: phonesReducer,
        swiper: swiperReducer,
        filter: filterReducer,
    }
})

export default store;