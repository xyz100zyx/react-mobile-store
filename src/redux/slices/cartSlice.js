import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    chosenPhones: [
        {
            "manufacturer": "POCO",
            "model": "X4 Pro G",
            "id": "ff886df7-b1d4-4fe4-ab37-e5983e8d8ff8",
            "color": "чёрный",
            "price": 1199,
            "resolutionWidth": 1080,
            "resolutionHeight": 2400,
            "RAM": 8,
            "SSD": 256,
            "images": [
                "https://shop.mts.by/upload/resize_cache/webp/iblock/fed/X4_Pro_Black_1.webp",
                "https://shop.mts.by/upload/resize_cache/webp/iblock/a37/310_620_1/X4_Pro_Black_2.webp",
                "https://shop.mts.by/upload/resize_cache/webp/iblock/b10/310_620_1/X4_Pro_Black_3.webp",
                "https://shop.mts.by/upload/resize_cache/webp/iblock/6f9/310_620_1/X4_Pro_Black_5.webp",
                "https://shop.mts.by/upload/resize_cache/webp/iblock/783/310_620_1/X4_Pro_Black_6.webp",
                "https://shop.mts.by/upload/resize_cache/webp/iblock/72e/310_620_1/X4_Pro_Black_7.webp",
                "https://shop.mts.by/upload/resize_cache/webp/iblock/cb1/310_620_1/X4_Pro_Black_10.webp"
            ]
        }
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
            state.chosenPhones.push(action.payload)
            console.log(state.chosenPhones)
        },
        deleteChosenPhones: (state, action) => {
            state.chosenPhones = state.chosenPhones.filter(item => item.id !== action.payload)
        },
        clearChosenPhones: (state) => {
            state.chosenPhones = []
        }
    }
})

export const { setIsOpen, setIsClose, addChosenPhones, clearChosenPhone, deleteChosenPhones } = cartSlice.actions;
export default cartSlice.reducer;