import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    phones: [],
    active: {},
}

const phonesSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        setPhones: (state, action) => {
            state.phones = action.payload;
        },
        deletePhones: (state) => {
            state.phones = [];
        },
        setActivePhone: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const {setPhones, deletePhones, setActivePhone} = phonesSlice.actions;
export default phonesSlice.reducer;