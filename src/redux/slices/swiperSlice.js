import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    activeIndex: 0,
}

const swiperSlice = createSlice({
    name: 'activeIndex',
    initialState,
    reducers: {
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
            state.isOpen = true;
        },
        closeSwiper: (state) => {
            state.isOpen = false;
        },
        setStart: (state) => {
            state.activeIndex = 0;
        }
    }
})

export const {setActiveIndex, closeSwiper, setStart} = swiperSlice.actions;
export default swiperSlice.reducer;