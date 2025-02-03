
import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import Box from '@mui/material/Box';

// Coordenadas del marcador
const marker = {
  lat: -27.45142358705027,
  lng: -58.9761592739999,
  name: 'Grupo Abbruzzese',
  address: 'Monteagudo 578. ', // Dirección del marcador
  provincia: 'Resistencia,Chaco',
  pais:'Argentina'
};

// Estilo del contenedor del mapa
const containerStyle = {
  width: '100%',
  height: '500px',  // Ajusta la altura del mapa según sea necesario
};

const center = {
  lat: marker.lat,
  lng: marker.lng,
};

const GoogleMapsComponent: React.FC = () => {

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapRef = useRef<google.maps.Map | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState<google.maps.Marker | null>(null);

  // Función para agregar el marcador una vez que el mapa esté listo
  const onLoad = (mapInstance: google.maps.Map) => {
    mapRef.current = mapInstance;

    const googleMarker = new google.maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map: mapInstance,
      title: marker.name,
    });

    // Manejar clic en el marcador
    googleMarker.addListener('click', () => {
      setActiveMarker(googleMarker);
      setIsOpen(true);
    });
  };

  // Función para cerrar el InfoWindow
  const onCloseClick = () => {
    setIsOpen(false);
    setActiveMarker(null);
  };

  return (
    <Box
      sx={{
        padding: '0.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        width: { xs: '90%', sm: '90%', md: '90%' },
      }}
    >
      <LoadScript googleMapsApiKey={`${googleMapsApiKey}`}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad} // Ejecuta esta función cuando el mapa se haya cargado
        >
          {isOpen && activeMarker && (
            <InfoWindow
              position={{ lat: marker.lat, lng: marker.lng }}
              onCloseClick={onCloseClick}
            >
              <div>
                <h4>{marker.name}</h4>
                <p>Tecnologia Medica</p>
                <p>{marker.address}</p>
                <p>{marker.provincia}</p>
                <p>{marker.pais}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default GoogleMapsComponent;
