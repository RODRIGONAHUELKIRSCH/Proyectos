import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

  
const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;
  
    // Dividir el token en sus tres partes (header, payload, signature)
    const payloadBase64 = token.split('.')[1];
  
    // Decodificar el payload del JWT que está en base64
    const decodedPayload = JSON.parse(atob(payloadBase64));
  
    // Obtener la fecha actual en segundos
    const currentTime = Math.floor(Date.now() / 1000);
  
    // Obtener el tiempo de expiración del token
    const expirationTime = decodedPayload.exp;
  
    // Calcular el tiempo restante en segundos
    const timeLeftInSeconds = expirationTime - currentTime;
  
    // Convertir el tiempo restante a horas (1 hora = 3600 segundos)
    const timeLeftInHours = (timeLeftInSeconds / 3600).toFixed(2);
  
    // Mostrar un log con el tiempo que falta para que expire el token en segundos y horas
    if (timeLeftInSeconds > 0) {
      console.log(`Tiempo restante antes de que el token expire: ${timeLeftInSeconds} segundos (${timeLeftInHours} horas).`);
    } else {
      console.log('El token ha expirado.');
    }
  
    // Verificar si el token ha expirado
    return expirationTime < currentTime;
  };
  
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem('authToken');

  // Verificar si el token ha expirado
  if (!token || isTokenExpired(token)) {
    console.log("El token ha expirado o no es válido.");
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
