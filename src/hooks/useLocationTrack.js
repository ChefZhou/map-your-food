import { useState, useEffect } from "react";

const useLocationTrack = (targetLatitude, targetLongitude) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ latitude, longitude });
      const calculatedDistance = calculateDistance(
        latitude,
        longitude,
        targetLatitude,
        targetLongitude
      );
      setDistance(calculatedDistance);
    };

    const error = () => {
      setError("Unable to retrieve your location");
    };

    const watchId = navigator.geolocation.watchPosition(success, error);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [targetLatitude, targetLongitude]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  return { currentPosition, distance, error };
};

export default useLocationTrack;
