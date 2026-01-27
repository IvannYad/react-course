import { Fragment, useState, type ChangeEvent, type FormEvent } from 'react';
import type { Place } from '../api/Place';
import { search } from '../api/search';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick } : LocationSearchProps) {
    const [places, setPlaces] = useState<Place[]>([]);
    const [term, setTerm] = useState("");

    const handleTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const results = await search(term);
        setPlaces(results);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label className="font-bold" htmlFor="term">
                Search
            </label>
            <input id="term"
                className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
                value={term}
                onChange={handleTermChange}
            />
        </form>
        <h1 className="font-bold mt-6">Found Locations</h1>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
            { places.map(place => {
                return (
                    <Fragment key={place.id}>
                        <p className="text-sm">{place.name}</p>
                        <button className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded hover:cursor-pointer"
                            onClick={() => onPlaceClick(place)}
                        >Go</button>
                        <div className="border-b w-full col-span-2"></div>
                    </Fragment>
                );
            })}
        </div>
      </div>  
    );
};