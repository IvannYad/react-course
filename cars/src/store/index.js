import { configureStore } from "@reduxjs/toolkit";
import { carSearchReducer, changeSearchTerm } from "./slices/CarSearchSlice";
import { carListReducer, addCar, removeCar } from "./slices/CarListSlice";
import { carCreateReducer, changeName, changeCost } from "./slices/CarCreateSlice";

export const store = configureStore({
    reducer: {
        carSearch: carSearchReducer,
        carCreate: carCreateReducer,
        carList: carListReducer,
    }
});

export {
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
}