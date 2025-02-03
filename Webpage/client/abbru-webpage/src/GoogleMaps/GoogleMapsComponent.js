import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import Box from '@mui/material/Box';
// Coordenadas del marcador
const marker = {
    lat: -27.45142358705027,
    lng: -58.9761592739999,
    name: 'Grupo Abbruzzese',
    address: 'Monteagudo 578. ', // Dirección del marcador
    provincia: 'Resistencia,Chaco',
    pais: 'Argentina'
};
// Estilo del contenedor del mapa
const containerStyle = {
    width: '100%',
    height: '500px', // Ajusta la altura del mapa según sea necesario
};
const center = {
    lat: marker.lat,
    lng: marker.lng,
};
const GoogleMapsComponent = () => {
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mapRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeMarker, setActiveMarker] = useState(null);
    // Función para agregar el marcador una vez que el mapa esté listo
    const onLoad = (mapInstance) => {
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
    return (_jsx(Box, { sx: {
            padding: '0.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            width: { xs: '90%', sm: '90%', md: '90%' },
        }, children: _jsx(LoadScript, { googleMapsApiKey: `${googleMapsApiKey}`, children: _jsx(GoogleMap, { mapContainerStyle: containerStyle, center: center, zoom: 12, onLoad: onLoad, children: isOpen && activeMarker && (_jsx(InfoWindow, { position: { lat: marker.lat, lng: marker.lng }, onCloseClick: onCloseClick, children: _jsxs("div", { children: [_jsx("h4", { children: marker.name }), _jsx("p", { children: "Tecnologia Medica" }), _jsx("p", { children: marker.address }), _jsx("p", { children: marker.provincia }), _jsx("p", { children: marker.pais })] }) })) }) }) }));
};
export default GoogleMapsComponent;
