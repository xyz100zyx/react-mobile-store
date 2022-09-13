import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    chosenPhones: [],
    totalPrice: 0,
    totalCount: 0,
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
            state.chosenPhones.push({cartItem: action.payload, count: 1});
            state.totalPrice+=action.payload.price;
            state.totalCount++;
        },
        deleteChosenPhones: (state, action) => {
            state.chosenPhones.map(phone => {
                if (phone.cartItem.id === action.payload.id){
                    for (let i = 0; i<phone.count;i++){
                        state.totalPrice-=action.payload.price;
                    }
                    state.totalCount -= phone.count;
                }
            })
            state.chosenPhones = state.chosenPhones.filter(obj => obj.cartItem.id !== action.payload.id)
            /*state.totalPrice-=action.payload.price;
            state.totalCount--;*/
        },
        clearChosenPhones: (state) => {
            state.chosenPhones = []
            state.totalPrice = 0
            state.totalCount = 0
        },
/*        incTotalPrice: (state, action) => {
            state.totalPrice+=action.paylaod.price;
        },
        decTotalPrice: (state, action) => {
            state.totalPrice -= action.paylaod.price;
        },*/
        incCount: (state, action) => {
            state.chosenPhones.map(phone => {
                if (phone.cartItem.id === action.payload.id){
                    phone.count++;
                    state.totalPrice+=action.payload.price
                    state.totalCount++;
                }
            })
        },
        decCount: (state, action) => {
            state.chosenPhones.map(phone => {
                if (phone.cartItem.id === action.payload.id){
                    if (phone.count <= 1){
                        state.chosenPhones = state.chosenPhones.filter(phone=> (phone.cartItem.id !== action.payload.id))
                    }
                    else{
                        phone.count--;
                    }
                    state.totalPrice-=action.payload.price
                    state.totalCount--;
                }
            })
        }
    }
})

export const { addChosenPhones, clearChosenPhones, deleteChosenPhones, incCount, decCount } = cartSlice.actions;
export default cartSlice.reducer;