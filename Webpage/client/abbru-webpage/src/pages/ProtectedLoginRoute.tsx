import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // O js-cookie si prefieres
import CryptoJS from 'crypto-js';

const SECRET_KEY = '734bed22-1b4f-4f91-87ef-8ea0069c832e';  // Utiliza una clave secreta para cifrado

interface ProtectedRouteProps {
  children: JSX.Element;
}

// Función para verificar si el token ha expirado
const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;

  try {
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
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return true; // Si no se puede decodificar, se considera expirado
  }
};

const ProtectedLoginRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  // Obtener el token cifrado de la cookie
  const encryptedToken = Cookies.get('authToken'); // Usamos cookie-js para obtener el valor de la cookie
  
  if (!encryptedToken) {
    //console.log("No se encontró el token cifrado.");
    return  <>{children}</>; // Si no hay token, redirigir a inicio
  }

  // Desencriptar el token usando crypto-js
  const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
  const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

  
  //console.log("Token cifrado:", encryptedToken); 
  //console.log(decryptedToken);
  if (!decryptedToken) {
    console.error("No se pudo desencriptar el token.");

  }

  // Verificar si el token es válido y no ha expirado
  if (decryptedToken && !isTokenExpired(decryptedToken)) {
    //console.log("El token es válido y no ha expirado. Redirigiendo a '/'");
    return <Navigate to="/frontend/" />; // Si el token es válido, redirige
  }

  //console.log("El token ha expirado o no es válido. Renderizando los hijos.");
  return <>{children}</>; // Renderiza los hijos si el token no es válido
};

export default ProtectedLoginRoute;
