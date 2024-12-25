import { useState, useEffect } from "react";

const useLocationTrack = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("無法取得您的位置");
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ latitude, longitude });
    };

    const error = () => {
      setError("無法獲取您的位置");
      setCurrentPosition({ latitude: 25.033964, longitude: 121.564468 }); //預設位置
    };

    const watchId = navigator.geolocation.watchPosition(success, error);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { currentPosition, error };
};

export default useLocationTrack;
