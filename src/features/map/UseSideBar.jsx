import { useState, useEffect } from "react";

const UseSideBar = ({
  markers = [],
  updateMarker,
  newMarker,
  deleteMarker,
  distanceCalculator,
}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (newMarker) {
      setSelectedMarker(newMarker);
      setDescription(newMarker.description);
    }
  }, [newMarker]);

  const handleSelectMarker = (marker) => {
    setSelectedMarker(marker);
    setDescription(marker.description);
  };

  const handleUpdateMarker = () => {
    if (selectedMarker) {
      updateMarker(selectedMarker.id, description);
      setSelectedMarker(null);
      setDescription("");
    }
  };

  const handleDeleteMarker = (id) => {
    deleteMarker(id);
    if (selectedMarker && selectedMarker.id === id) {
      setSelectedMarker(null);
      setDescription("");
    }
  };

  return {
    markers,
    selectedMarker,
    description,
    handleSelectMarker,
    handleUpdateMarker,
    handleDeleteMarker,
    setDescription,
  };
};

export default UseSideBar;
