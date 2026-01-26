import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const memoizedCars = createSelector(
  [(state) => state.carList.cars, (state) => state.carSearch],
  (cars, carSearch) =>
    cars.filter((car) =>
      car.name.toLowerCase().includes(carSearch.toLowerCase())
    )
);

export default function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector(memoizedCars);
    const carAddName = useSelector(state => state.carCreate.name);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map(car => {
        const carsBold = (car.name && carAddName) && car.name.toLowerCase().includes(carAddName.toLowerCase());

        return (
            <div key={car.id} className={`panel ${carsBold && "bold"}`}>
                <p>
                  {car.name} - ${car.cost}  
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        );
    });

    console.log(cars);
    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
}