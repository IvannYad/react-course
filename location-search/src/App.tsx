import './App.css'
import LocationSearch from './components/LocationSearch';
import Map from './components/Map';
import type { Place } from './api/Place';
import { useState } from 'react';

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  const onPlaceClick = (place: Place) => {
    setPlace(place);
  };

  return (
    <div className="h-screen w-screen grid grid-cols-12"> 
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={onPlaceClick}/>
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  )
}

export default App
