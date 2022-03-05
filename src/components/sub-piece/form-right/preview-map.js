import React, { useState } from "react";
import MapPicker from "react-google-map-picker";

const PreviewMap = ({ preview, setPreview }) => {
  const [zoom, setZoom] = useState(10);

  const handleChangeLocation = (lat, lng) => {
    setPreview({ lat: lat, lng: lng });
  };

  const handleChangeZoom = (newZoom) => {
    setZoom(newZoom);
  };

  return (
    <div id="preview-map-container">
      <MapPicker
        defaultLocation={preview}
        zoom={zoom}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
      />
    </div>
  );
};

export default PreviewMap;
