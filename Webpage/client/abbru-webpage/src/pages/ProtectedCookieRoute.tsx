import React,{ReactNode} from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

interface ProtectedCookieRouteProps {
    children: ReactNode;
  }

const ProtectedCookieRoute:React.FC<ProtectedCookieRouteProps> = ({ children }) => {
  // Función para desencriptar el valor de la cookie
  const decryptCookieValue = (encryptedValue: string) => {
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
  return hasAcceptedCookies ? (
    <>{children}</> // Usamos fragmento vacío para renderizar los hijos
  ) : (
    <Navigate to="/frontend/" />
  );
};

export default ProtectedCookieRoute;