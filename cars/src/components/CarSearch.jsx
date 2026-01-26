import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

export default function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.carSearch);
    
    const handleSeatchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };
    
    return (
        <div className="list-header">
            <h3 className="title is-3">MyCars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input 
                    className="input"
                    value={searchTerm}
                    onChange={handleSeatchTermChange}
                />
            </div>
        </div>
    )
}