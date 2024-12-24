import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("您的瀏覽器不支援地理定位");
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const error = () => {
      setError("無法取得您的位置");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { location, error };
};

export default useLocation;
