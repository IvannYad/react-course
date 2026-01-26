import { createSlice } from "@reduxjs/toolkit";

const carSearchSlice = createSlice({
    name: 'car-search',
    initialState: "",
    reducers: {
        changeSearchTerm: (state, action) => {
            return action.payload;
        },
    }
});

export const carSearchReducer = carSearchSlice.reducer;
export const { changeSearchTerm } = carSearchSlice.actions;