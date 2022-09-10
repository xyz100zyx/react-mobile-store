import {createSlice} from "@reduxjs/toolkit";

const initalState = {
    activeManufacturer: 0,
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setActiveManufacturer:  (state, action) => {
            state.activeManufacturer = action.payload;
        }
    }
})