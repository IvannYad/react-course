import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import { addCar } from "./CarListSlice";

const resetCarCreate = createAction((state, action) => {
    return {
        name: '',
        cost: 0
    };
});

const carCreateSlice = createSlice({
    name: 'car-create',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCost(state, action){
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0;
        });
    }
});

export const carCreateReducer = carCreateSlice.reducer;
export const { changeName, changeCost } = carCreateSlice.actions;