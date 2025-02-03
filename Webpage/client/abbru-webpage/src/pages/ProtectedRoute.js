import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';
const SECRET_KEY = '734bed22-1b4f-4f91-87ef-8ea0069c832e'; // Asegúrate de que sea la misma clave utilizada para cifrar
// Función para desencriptar el token
const decryptToken = (encryptedToken) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
        const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedToken || null; // Devuelve el token desencriptado o null si falla
    }
    catch (error) {
        //console.error("Error al desencriptar el token:", error);
        return null;
    }
};
const isTokenExpired = (token) => {
    if (!token)
        return true;
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
const ProtectedRoute = ({ children }) => {
    // Obtener el token cifrado desde la cookie
    const encryptedToken = Cookies.get('authToken');
    if (!encryptedToken) {
        //console.log("Token no encontrado en la cookie.");
        return _jsx(Navigate, { to: "/signin" });
    }
    // Desencriptar el token
    const token = decryptToken(encryptedToken);
    // Verificar si el token es válido y no ha expirado
    if (!token || isTokenExpired(token)) {
        //console.log("El token ha expirado o no es válido.");
        Cookies.remove('authToken'); // Remover la cookie si el token es inválido o ha expirado
        return _jsx(Navigate, { to: "/signin" });
    }
    return children;
};
export default ProtectedRoute;
