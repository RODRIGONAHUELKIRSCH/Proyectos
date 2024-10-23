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

  // Verificar si el token ha expirado
  return expirationTime < currentTime;
};

const ProtectedLoginRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem('authToken');

  // Verificar si el token es válido
  if (token && !isTokenExpired(token)) {
    console.log("El token es válido y no ha expirado. Redirigiendo a '/'");
    return <Navigate to="/" />;
  }

  console.log("El token ha expirado o no es válido. Renderizando los hijos.");
  return <>{children}</>; // Renderiza los hijos si el token no es válido
};

export default ProtectedLoginRoute;

