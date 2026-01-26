import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

export default function CarForm() {
    const dispatch = useDispatch();
    const carToAdd = useSelector((state) => state.carCreate); 

    const handleNameChange = (event) => {
        const name = event.target.value;
        dispatch(changeName(name));
    };

    const handleCostChange = (event) => {
        const cost = Number.parseInt(event.target.value) || 0;
        dispatch(changeCost(cost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addCar({ ...carToAdd }));
    };

    console.log(carToAdd);
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                            className="input is-expanded"
                            value={carToAdd.name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                            className="input is-expanded"
                            value={carToAdd.cost || ""}
                            type="number"
                            onChange={handleCostChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}