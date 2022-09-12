import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    chosenPhones: [

    ],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsOpen: (state) => {
            state.isOpen = true;
        },
        setIsClose: (state) => {
            state.isOpen = false;
        },
        addChosenPhones: (state, action) => {
            state.chosenPhones.push(action.payload);
            state.totalPrice+=action.payload.price;
        },
        deleteChosenPhones: (state, action) => {
            state.chosenPhones = state.chosenPhones.filter(item => item.id !== action.payload.id)
            state.totalPrice-=action.payload.price;
        },
        clearChosenPhones: (state) => {
            state.chosenPhones = []
            state.totalPrice = 0
        },
        incTotalPrice: (state, action) => {
            state.totalPrice+=action.paylaod.price;
        },
        decTotalPrice: (state, action) => {
            state.totalPrice -= action.paylaod.price;
        }
    }
})

export const { addChosenPhones, clearChosenPhones, deleteChosenPhones } = cartSlice.actions;
export default cartSlice.reducer;