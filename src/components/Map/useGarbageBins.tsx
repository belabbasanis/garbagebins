import { useState, useEffect } from 'react';

// Define a type for the garbage bin locations
export type GarbageBin = {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: any;
};

export function useGarbageBins() {
  const [garbageBins, setGarbageBins] = useState<GarbageBin[]>([]);

  // Fetch and parse the GeoJSON data
  useEffect(() => {
    fetch('/garbage_bins.geojson')
      .then(response => response.json())
      .then(data => setGarbageBins(data.features));
  }, []);

  return garbageBins;
}