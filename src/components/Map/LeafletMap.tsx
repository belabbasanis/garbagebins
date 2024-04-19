// src/components/Map/LeafletMap.tsx
import React from 'react';
import { TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { GarbageBin } from './useGarbageBins';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { LatLngTuple } from 'leaflet';

const garbageIcon = L.icon({
  iconUrl: '/Icons/garbageIcon.svg',
  iconSize: [64, 64], // size of the icon
});

interface MapProps {
  defaultLocation: LatLngTuple;
  garbageBins: GarbageBin[];
}

const LeafletMap: React.FC<MapProps> = React.memo(({ defaultLocation, garbageBins }) => {
  const map = useMap();

  React.useEffect(() => {
    map.setView(defaultLocation, 80);
  }, [defaultLocation, map]);

  return (
    <>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {garbageBins.map((bin: GarbageBin, index: number) => (
          <Marker
            key={index}
            position={[bin.geometry.coordinates[1], bin.geometry.coordinates[0]]}
            icon={garbageIcon}
          />
        ))}
      </MarkerClusterGroup>
    </>
  );
});

export default LeafletMap;