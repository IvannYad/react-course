import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
    name: 'car-list',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar: (state, action) => {
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload;
            });

            state.cars = updated;
        },
    }
});

export const carListReducer = carListSlice.reducer;
export const { addCar, removeCar } = carListSlice.actions;