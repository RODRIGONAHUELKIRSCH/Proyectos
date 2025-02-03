// import React from 'react';
// import { Navigate } from 'react-router-dom';

// interface ProtectedRouteProps {
//   children: JSX.Element;
// }

  
// const isTokenExpired = (token: string | null): boolean => {
//     if (!token) return true;
  
//     // Dividir el token en sus tres partes (header, payload, signature)
//     const payloadBase64 = token.split('.')[1];
  
//     // Decodificar el payload del JWT que está en base64
//     const decodedPayload = JSON.parse(atob(payloadBase64));
  
//     // Obtener la fecha actual en segundos
//     const currentTime = Math.floor(Date.now() / 1000);
  
//     // Obtener el tiempo de expiración del token
//     const expirationTime = decodedPayload.exp;
  
//     // Calcular el tiempo restante en segundos
//     const timeLeftInSeconds = expirationTime - currentTime;
  
//     // Convertir el tiempo restante a horas (1 hora = 3600 segundos)
//     const timeLeftInHours = (timeLeftInSeconds / 3600).toFixed(2);
  
//     // Mostrar un log con el tiempo que falta para que expire el token en segundos y horas
//     if (timeLeftInSeconds > 0) {
//       console.log(`Tiempo restante antes de que el token expire: ${timeLeftInSeconds} segundos (${timeLeftInHours} horas).`);
//     } else {
//       console.log('El token ha expirado.');
//     }
  
//     // Verificar si el token ha expirado
//     return expirationTime < currentTime;
//   };
  
// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const token = sessionStorage.getItem('authToken');

//   // Verificar si el token ha expirado
//   if (!token || isTokenExpired(token)) {
//     console.log("El token ha expirado o no es válido.");
//     sessionStorage.removeItem('token');
//     return <Navigate to="/signin" />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const SECRET_KEY = '734bed22-1b4f-4f91-87ef-8ea0069c832e';  // Asegúrate de que sea la misma clave utilizada para cifrar

// Función para desencriptar el token
const decryptToken = (encryptedToken: string): string | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken || null;  // Devuelve el token desencriptado o null si falla
  } catch (error) {
    //console.error("Error al desencriptar el token:", error);
    return null;
  }
};

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

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Obtener el token cifrado desde la cookie
  const encryptedToken = Cookies.get('authToken');
  
  if (!encryptedToken) {
    //console.log("Token no encontrado en la cookie.");
    return <Navigate to="/signin" />;
  }

  // Desencriptar el token
  const token = decryptToken(encryptedToken);

  // Verificar si el token es válido y no ha expirado
  if (!token || isTokenExpired(token)) {
    //console.log("El token ha expirado o no es válido.");
    Cookies.remove('authToken'); // Remover la cookie si el token es inválido o ha expirado
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
