import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
const ProtectedCookieRoute = ({ children }) => {
    // Función para desencriptar el valor de la cookie
    const decryptCookieValue = (encryptedValue) => {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, 'secretKey');
        const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedValue === 'true'; // Retorna true o false basado en el valor desencriptado
    };
    // Obtener la cookie cifrada
    const encryptedCookieValue = Cookies.get('cookiesAccepted');
    // Si la cookie está presente y se desencripta correctamente, verificamos su valor
    const hasAcceptedCookies = encryptedCookieValue
        ? decryptCookieValue(encryptedCookieValue)
        : false;
    // Si el usuario no ha aceptado las cookies, lo redirigimos a la página principal
    return hasAcceptedCookies ? (_jsx(_Fragment, { children: children }) // Usamos fragmento vacío para renderizar los hijos
    ) : (_jsx(Navigate, { to: "/frontend/" }));
};
export default ProtectedCookieRoute;
