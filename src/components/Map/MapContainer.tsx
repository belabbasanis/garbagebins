// src/components/Map/MapContainer.tsx
import React from 'react';
import { MapContainer as LeafletMapContainer } from 'react-leaflet';
import LeafletMap from './LeafletMap';
import { GarbageBin } from './useGarbageBins';
import { LatLngTuple } from 'leaflet';

interface MapProps {
  defaultLocation: LatLngTuple;
  garbageBins: GarbageBin[];
}

type MapContainerProps = React.PropsWithChildren<React.PropsWithRef<MapProps>>;

const MapContainer: React.FC<MapContainerProps> = ({ defaultLocation, garbageBins }) => (
  <LeafletMapContainer 
    center={defaultLocation} 
    zoom={80} 
    style={{ height: '100vh', width: '100%' }} 
    preferCanvas={true}
  >
    <LeafletMap defaultLocation={defaultLocation} garbageBins={garbageBins} />
  </LeafletMapContainer>
);

export default MapContainer;