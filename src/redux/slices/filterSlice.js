import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeManufacturer: 0,
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setActiveManufacturer: (state, action) => {
            state.activeManufacturer = action.payload;
        }
    }
})

export const {setActiveManufacturer} = filterSlice.actions;
export default filterSlice.reducer;