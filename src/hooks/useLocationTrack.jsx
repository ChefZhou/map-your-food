import { useState, useEffect } from "react";

const useLocationTrack = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ latitude, longitude });
    };

    const error = () => {
      setError("Unable to retrieve your location");
      setCurrentPosition({ latitude: 25.033964, longitude: 121.564468 }); // 使用預設位置
    };

    const watchId = navigator.geolocation.watchPosition(success, error);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { currentPosition, error };
};

export default useLocationTrack;
