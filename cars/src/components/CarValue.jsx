import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"

const totalCostSelector = createSelector(
  [(state) => state.carList.cars, (state) => state.carSearch],
  (cars, carSearch) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(carSearch.toLowerCase())
    ).map(car => car.cost);

    return filteredCars.reduce((accum, curr, _) => accum + curr, 0);
  }
    
);

export default function CarValue() {
    const totalCost = useSelector(totalCostSelector);

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
}