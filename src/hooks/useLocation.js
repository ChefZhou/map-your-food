import { useState, useEffect } from "react";
import { useMapEvents } from "react-leaflet";

const defaultPosition = { latitude: 25.033964, longitude: 121.564468 };

const useLocation = (setMarkers) => {
  const [location, setLocation] = useState(defaultPosition);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);
  const [markerCount, setMarkerCount] = useState(1);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err);
        }
      );
    } else {
      setError(new Error("Geolocation is not supported by this browser."));
    }
  }, []);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkers((prevMarkers) => [
        ...prevMarkers,
        { lat, lng, id: Date.now(), description: `自訂座標點${markerCount}` },
      ]);
      setMarkerCount(markerCount + 1);
    },
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return { location, error, position };
};

export default useLocation;
