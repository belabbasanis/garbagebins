// src/App.tsx
import React from 'react';
import { useGarbageBins } from './components/Map/useGarbageBins';
import 'leaflet/dist/leaflet.css';

import { LatLngTuple } from 'leaflet';
import MapContainer from './components/Map/MapContainer';

const App = () => {
  const defaultLocation: LatLngTuple = [45.5017, -73.5673]; // Coordinates for Montreal, Canada
  const garbageBins = useGarbageBins();

  return (
    <MapContainer defaultLocation={defaultLocation} garbageBins={garbageBins} />
  );
};

export default App;
