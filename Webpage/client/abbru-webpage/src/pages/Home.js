import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography, TextField, Button } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import ImageSlider from '../../Types/ImageSlider';
import GoogleMapsComponent from '../GoogleMaps/GoogleMapsComponent';
import { subscribeToNewsletter } from '../apiconnect/apiconnection';
import CookieModal from '../../Types/CookieModal';
import Cookies from 'js-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { obtenerUltimaRevista } from '../apiconnect/apiconnection';
const theme = createTheme();
function Inicio() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    // Función para validar el correo electrónico
    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('El correo electrónico no es válido.');
        }
        else {
            setEmailError('');
        }
    };
    const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
    const [cookiesAccepted, setCookiesAccepted] = useState(null); // Estado para manejar la aceptación de cookies
    const navigate = useNavigate();
    const location = useLocation(); // Obtener la ubicación actual
    const [enlace, setEnlace] = useState(null);
    useEffect(() => {
        // Verificamos si el modal ya fue visto y si la elección de cookies está definida
        const hasSeenModal = Cookies.get('hasSeenCookieModal');
        const accepted = Cookies.get('cookiesAccepted');
        // Si ya vimos el modal, no lo mostramos
        if (hasSeenModal) {
            setCookiesAccepted(accepted === 'true' ? true : accepted === 'false' ? false : null);
        }
        else {
            // Si no hemos visto el modal, lo mostramos
            setShowModal(true);
        }
    }, []);
    const [nombre, setNombre] = useState('');
    const [imageString, setImageString] = useState('');
    useEffect(() => {
        const fetchUltimaRevista = async () => {
            const ultimaRevista = await obtenerUltimaRevista();
            if (ultimaRevista) {
                //console.log(ultimaRevista); // Verifica el objeto completo
                setNombre(ultimaRevista.Nombre || '');
                setImageString(getImageUrl(ultimaRevista.ImageString) || '');
                setEnlace(ultimaRevista.enlace || '');
            }
        };
        fetchUltimaRevista();
    }, []);
    const getImageUrl = (imageString) => {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (apiUrl) {
            return `${apiUrl}/api/magazine/images/${imageString}`;
        }
        else {
            console.error('API URL no está definida en el entorno.');
            return '';
        }
    };
    const encryptCookieValue = (value) => {
        return CryptoJS.AES.encrypt(value.toString(), 'secretKey').toString();
    };
    const encrytedseenValue = encryptCookieValue(true);
    const handleAcceptCookies = () => {
        const encryptedValue = encryptCookieValue(true);
        Cookies.set('cookiesAccepted', encryptedValue, { expires: 1, sameSite: 'Strict' });
        Cookies.set('hasSeenCookieModal', encrytedseenValue, { expires: 1, sameSite: 'Strict' });
        setCookiesAccepted(true);
        setShowModal(false);
        navigate(location.pathname || '/frontend/');
    };
    const handleRejectCookies = () => {
        const encryptedValue = encryptCookieValue(false);
        Cookies.set('cookiesAccepted', encryptedValue, { expires: 365 });
        Cookies.set('hasSeenCookieModal', encrytedseenValue, { expires: 365 });
        setCookiesAccepted(false);
        setShowModal(false);
        navigate('/frontend/');
    };
    // Función para validar si el formulario es válido
    const validateForm = () => {
        const isValid = emailError === '' && email.trim() !== '';
        setIsFormValid(isValid); // Actualiza el estado de validez del formulario
    };
    // Llamar a validateForm cada vez que cambie algún valor
    useEffect(() => {
        validateForm();
    }, [email, emailError]);
    const handleSubscribe = async () => {
        try {
            // Llamada a la función para suscribir el email
            await subscribeToNewsletter(email);
            setMessage('¡Te has suscrito exitosamente al newsletter!');
        }
        catch (error) {
            console.error('Error al suscribirse:', error);
            setMessage('Ocurrió un error. Por favor, intenta nuevamente.');
        }
    };
    const slides = [
        {
            image: '/sl1.png',
            link: '/aboutus'
        },
        {
            image: '/sl2.png', // Cambia estas rutas a las imágenes que tengas
            link: '/products'
        },
    ];
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsxs(Grid, { container: true, component: "main", sx: { height: '100%', width: '100vw', backgroundColor: '#ffffff',
                    minWidth: '100%',
                    maxWidth: '100%',
                    position: 'relative', margin: 0, padding: 0 }, children: [_jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: {
                            margin: 0,
                            height: '18vh',
                            backgroundColor: '#00349a',
                            position: 'relative',
                            width: '100vw'
                        }, children: [_jsx(Box, { sx: {
                                    top: { xs: '0.5rem', sm: '0', md: '0' },
                                    minHeight: '12vh',
                                    position: { xs: 'relative', sm: 'absolute', md: 'absolute' },
                                    width: { xs: '30%', sm: '30%', md: 'auto' },
                                    textAlign: { xs: 'left', sm: 'left', md: 'left' },
                                }, children: _jsx("img", { src: "/abbrulogo.svg", alt: "Logo", style: {
                                        width: 'auto',
                                        height: '40%',
                                        maxWidth: '70%',
                                        minWidth: '30%',
                                        marginTop: '0.5rem',
                                        objectFit: 'contain',
                                    } }) }), _jsx(Box, { sx: {
                                    top: { xs: '0.5rem', sm: '0.5rem', md: '1.5rem' },
                                    left: { xs: '0rem', sm: '7rem', md: '9.5rem' },
                                    minHeight: '12vh',
                                    position: { xs: 'relative', sm: 'relative', md: 'relative' },
                                    width: { xs: '42%', sm: '50%', md: '50%' },
                                    textAlign: { xs: 'center', sm: 'center', md: 'center' },
                                    marginLeft: { xs: 'rem', sm: '5.5rem', md: '12rem' }
                                }, children: _jsx("img", { src: "/10marcas.png", alt: "Logo", style: {
                                        width: 'auto',
                                        height: '30%',
                                        maxWidth: '100%',
                                        minWidth: '25%',
                                        marginTop: '0.5rem',
                                        objectFit: 'contain',
                                    } }) }), _jsx(Box, { sx: {
                                    top: { xs: '0.5rem', sm: '0.5rem', md: '1.5rem' },
                                    left: { xs: '1rem', sm: '6rem', md: '7rem' },
                                    minHeight: '12vh',
                                    position: { xs: 'relative', sm: 'relative', md: 'relative' },
                                    width: { xs: '20%', sm: '15%', md: '15%' },
                                    textAlign: { xs: 'center', sm: 'center', md: 'center' },
                                }, children: _jsx("img", { src: "/gmax.png", alt: "Logo", style: {
                                        width: 'auto',
                                        height: '40%',
                                        maxWidth: '45%',
                                        minWidth: '25%',
                                        objectFit: 'contain',
                                    } }) }), _jsxs(Box, { sx: {
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: { xs: 'row', sm: 'row', md: 'row' },
                                    alignItems: 'center',
                                    justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end' },
                                    width: { xs: '100%', sm: '100%', md: 'auto' },
                                    position: { xs: 'relative', sm: 'relative', md: 'absolute' },
                                    right: { xs: 'auto', sm: 'auto', md: '3rem' },
                                    top: { xs: 'auto', sm: 'auto', md: '90%' },
                                    transform: { md: 'translateY(-50%)' },
                                }, children: [_jsx(Link, { href: "/frontend/", sx: {
                                            color: '#FFFFFF',
                                            mx: 2,
                                            fontSize: { xs: '7px', sm: '14px', md: '16px' },
                                        }, children: "Inicio" }), _jsx(Link, { href: "/frontend/news", sx: {
                                            color: '#FFFFFF',
                                            mx: 2,
                                            fontSize: { xs: '7px', sm: '14px', md: '16px' },
                                            whiteSpace: 'nowrap',
                                        }, children: "Eventos" }), _jsx(Link, { href: "/frontend/aboutus", sx: {
                                            color: '#FFFFFF',
                                            mx: 2,
                                            fontSize: { xs: '7px', sm: '14px', md: '16px' },
                                            whiteSpace: 'nowrap',
                                        }, children: "La Empresa" }), _jsx(Link, { href: "/frontend/products", sx: {
                                            color: '#FFFFFF',
                                            mx: 2,
                                            fontSize: { xs: '7px', sm: '14px', md: '16px' },
                                        }, children: "Producto" }), _jsx(Link, { href: "/frontend/contact", sx: {
                                            color: '#FFFFFF',
                                            mx: 2,
                                            fontSize: { xs: '7px', sm: '14px', md: '16px' },
                                        }, children: "Contacto" })] })] }), _jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: { flexGrow: '1', mt: 0, height: 'auto', maxHeight: 'auto', minHeight: 'auto', padding: 0, backgroundColor: '#e7e7e7', width: '100vw', maxWidth: '100%', minWidth: '100%' }, children: [showModal && cookiesAccepted === null && (_jsx(CookieModal, { onAccept: handleAcceptCookies, onReject: handleRejectCookies })), _jsx(Box, { sx: {
                                    padding: 0,
                                    heigth: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
                                    justifyContent: 'flex-start',
                                    width: { xs: '100%', sm: '90%', md: '95%' },
                                    position: 'relative',
                                    marginLeft: { sm: '2.5rem', md: '1.5rem' },
                                    marginBottom: '1.5rem'
                                }, children: _jsx(ImageSlider, { slides: slides }) }), _jsxs(Box, { sx: {
                                    height: { xs: '8vh', sm: 'auto', md: 'auto' },
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
                                    justifyContent: 'space-around',
                                    width: { xs: '100%', sm: '90%', md: '95%' },
                                    position: 'relative',
                                    marginLeft: { sm: '2.5rem', md: '2rem' },
                                    marginBottom: { xs: '0.5rem' },
                                    marginTop: '2rem',
                                }, children: [_jsx(Box, { sx: {
                                            height: { xs: '8vh', sm: 'auto', md: 'auto' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: { xs: '20%', sm: '22%', md: '33%' },
                                            textAlign: 'center', // Centra el texto
                                        }, children: _jsxs(Link, { href: "/frontend/aboutus", sx: { textDecoration: 'none',
                                                '&:hover': { textDecoration: 'none', color: '#00349a'
                                                } }, children: [_jsx(Box, { component: "img", src: "q1.png", alt: "La Empresa", sx: { width: { xs: '60%', sm: '70%', md: '80%' }, height: 'auto', minWidth: '30%', minHeight: '30%' } }), _jsx(Typography, { variant: "body1", sx: { color: '#727376',
                                                        '&:hover': { color: '#00349a', textDecoration: 'underline'
                                                        },
                                                        fontSize: { xs: '10px', sm: '14px', md: '16px' },
                                                        textWrap: 'nowrap'
                                                    }, children: "La Empresa" })] }) }), _jsx(Box, { sx: {
                                            height: { xs: '8vh', sm: 'auto', md: 'auto' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: { xs: '20%', sm: '22%', md: '33%' },
                                            textAlign: 'center',
                                        }, children: _jsxs(Link, { href: "/frontend/products", sx: { textDecoration: 'none',
                                                '&:hover': { textDecoration: 'none', color: '#00349a'
                                                } }, children: [_jsx(Box, { component: "img", src: "q2.png", alt: "Productos", sx: { width: { xs: "60%", sm: '70%', md: '80%' }, height: 'auto', minWidth: '30%' } }), _jsx(Typography, { variant: "body1", sx: { color: '#727376',
                                                        '&:hover': { color: '#00349a', textDecoration: 'underline'
                                                        },
                                                        fontSize: { xs: '10px', sm: '14px', md: '16px' }
                                                    }, children: "Productos" })] }) }), _jsx(Box, { sx: {
                                            height: { xs: '8vh', sm: 'auto', md: 'auto' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: { xs: '20%', sm: '22%', md: '33%' },
                                            textAlign: 'center',
                                        }, children: _jsxs(Link, { href: "/frontend/news", sx: { textDecoration: 'none',
                                                '&:hover': { textDecoration: 'none', color: '#00349a'
                                                } }, children: [_jsx(Box, { component: 'img', src: "a3.png", alt: "Eventos", sx: { width: { xs: '60%', sm: '70%', md: '80%' }, height: 'auto', minWidth: '30%' } }), _jsx(Typography, { variant: "body1", sx: { color: '#727376',
                                                        '&:hover': { color: '#00349a', textDecoration: 'underline',
                                                        },
                                                        fontSize: { xs: '10px', sm: '14px', md: '16px' }
                                                    }, children: "Eventos" })] }) })] }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: { xs: '3.5rem', sm: '1rem', md: '2rem' }, // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                }, children: _jsx(Box, { sx: {
                                        heigth: 'auto',
                                        width: { xs: '90%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflowX: 'hidden',
                                    }, children: _jsx(Link, { href: "/frontend/news", sx: {
                                            textDecoration: 'none',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            overflowX: 'hidden',
                                            padding: '10px'
                                        }, children: _jsx("img", { src: "/bannereventos.png", alt: "Revistas", style: {
                                                maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
                                                height: 'auto', // Mantener proporción de la imagen
                                            } }) }) }) }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: { xs: '0.7rem', sm: '1rem', md: '2rem' }, // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                    '&:hover': { cursor: 'pointer' },
                                }, children: _jsxs(Box, { sx: {
                                        heigth: '10vh',
                                        width: { xs: '87%', sm: '87%', md: '87%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        overflowX: 'hidden',
                                        backgroundColor: '#00349a',
                                    }, onClick: () => window.open(`${enlace || '/'}`, '_blank'), children: [_jsx(Link
                                        // href={enlace||"/"}
                                        // target={enlace ? '_blank' : undefined}
                                        , { 
                                            // href={enlace||"/"}
                                            // target={enlace ? '_blank' : undefined}
                                            sx: {
                                                textDecoration: 'none',
                                                display: 'flex',
                                                overflowX: 'hidden',
                                                padding: '10px'
                                            }, children: _jsx(Box, { component: "img", src: imageString || "/", alt: "Revistas", sx: { width: { xs: '50%', sm: '75%', md: '100%' }, }, style: {
                                                    maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
                                                    height: '100%', // Mantener proporción de la imagen
                                                } }) }), _jsx(Box, { sx: {
                                                display: 'flex',
                                                alignItems: 'center', // Centra verticalmente
                                                justifyContent: 'flex-end', // Alinea todo a la derecha
                                                flexGrow: 1,
                                                marginLeft: '1rem',
                                            }, children: _jsxs(Box, { sx: {
                                                    display: 'flex',
                                                    flexDirection: 'column', // Organiza los elementos en columna
                                                    alignItems: 'flex-end', // Alinea a la izquierda dentro del contenedor
                                                    justifyContent: 'center',
                                                    flexGrow: 1,
                                                    marginLeft: { xs: 0, sm: '1rem', md: '1rem' },
                                                    marginRight: { xs: '0.5rem', sm: '2rem', md: '3.5rem' }, // Espacio al borde derecho
                                                    padding: { xs: '0.2rem', sm: 0 }
                                                }, children: [_jsx(Typography, { variant: "h4", fontWeight: "bold", sx: { color: 'white', fontSize: { xs: '0.7rem', sm: '1.2rem', md: '2rem', whiteSpace: 'nowrap' }, }, children: "Revista Abbruzzese \u2022 Grupo Medica" }), _jsx(Typography, { variant: "h6", sx: { color: 'white', fontSize: { xs: '0.5rem', sm: '1rem', md: '1.5rem' }, whiteSpace: 'nowrap' }, children: nombre || 'Cargando...' }), _jsx(Button, { color: "secondary", 
                                                        // href={enlace||"/"}
                                                        // target="_blank"
                                                        sx: {
                                                            color: 'white',
                                                            height: { xs: '.5rem', sm: '1.7rem', md: '3.5 rem' },
                                                            backgroundColor: '#ff9800',
                                                            '&:hover': { textDecoration: 'underline', color: 'white', cursor: 'pointer' },
                                                            fontWeight: 'bold',
                                                            width: { xs: '2%', sm: '8%', md: '12%' }, // Cambia el ancho según la resolución
                                                            fontSize: { xs: '0.4rem', sm: '0.8rem', md: '1rem' }
                                                        }, children: "Ver" })] }) })] }) }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: { xs: '0.5rem', sm: '1rem', md: '1.5rem' }, // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                }, children: _jsx(Box, { sx: {
                                        heigth: 'auto',
                                        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflowX: 'hidden',
                                    }, children: _jsx(Link, { href: "/frontend/magazine", sx: {
                                            textDecoration: 'none',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            overflowX: 'hidden',
                                        }, children: _jsx("img", { src: "/TOD-REV.png", alt: "Revistas", style: {
                                                maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
                                                height: 'auto', // Mantener proporción de la imagen
                                            } }) }) }) }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: { xs: '0.5rem', sm: '1rem', md: '2.5rem' }, // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                    marginBottom: '0rem'
                                }, children: _jsx(Box, { sx: {
                                        heigth: 'auto',
                                        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflowX: 'hidden',
                                    }, children: _jsx(Link, { href: "/frontend/", sx: {
                                            textDecoration: 'none',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            overflowX: 'hidden',
                                        }, children: _jsx("img", { src: "/camino12423.png", alt: "Revistas", style: {
                                                maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
                                                height: 'auto', // Mantener proporción de la imagen
                                            } }) }) }) }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: { xs: '0.5rem', sm: '1rem', md: '2.5rem' }, // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                    marginBottom: '1rem'
                                }, children: _jsx(Box, { sx: {
                                        heigth: { xs: '8vh', sm: '24vh', md: '50vh' },
                                        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflowX: 'hidden',
                                    }, children: _jsx("img", { src: "/BannerNews.png", alt: "Revistas", style: {
                                            maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
                                            height: 'auto', // Mantener proporción de la imagen
                                            borderRadius: '20px'
                                        } }) }) }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: '0.5rem', // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                    marginBottom: '1rem'
                                }, children: _jsx(Box, { sx: {
                                        heigth: { xs: '8vh', sm: '24vh', md: '50vh' },
                                        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflowX: 'hidden',
                                        padding: '1rem'
                                    }, children: _jsxs(Box, { display: "flex", gap: 2, alignItems: "center", sx: { flexDirection: 'column', justifyContent: 'center', width: '90%' }, children: [message && (_jsx(Typography, { variant: "body2", color: "green", sx: { mt: 2 }, children: message })), _jsx(TextField, { required: true, label: "Ingresa tu correo electr\u00F3nico", variant: "outlined", value: email, onChange: (e) => {
                                                    setEmail(e.target.value);
                                                    validateEmail(e.target.value);
                                                }, onBlur: (e) => validateEmail(e.target.value), sx: { width: { xs: '100%', sm: '70%', md: '50%' }, height: 'auto', fontSize: { xs: '8px', sm: '12px', md: '16px' },
                                                    '& .MuiInputLabel-root': {
                                                        fontSize: '1rem',
                                                        '@media (max-width:600px)': {
                                                            fontSize: '0.8rem',
                                                        },
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        fontSize: {
                                                            xs: '4px',
                                                            sm: '12px',
                                                            md: '16px',
                                                        },
                                                    },
                                                } }), _jsx(Button, { variant: "contained", color: "primary", onClick: handleSubscribe, sx: { fontSize: { xs: '8px', sm: '12px', md: '14px' } }, disabled: !isFormValid, children: "Suscribirse" })] }) }) }), _jsx(Box, { sx: {
                                    height: 'auto', // Altura del box principal
                                    marginTop: { xs: '0.5rem', sm: '1rem', md: '2.5rem' }, // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                    marginBottom: '1rem'
                                }, children: _jsx(Box, { sx: {
                                        heigth: { xs: '8vh', sm: '24vh', md: '50vh' },
                                        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        overflowX: 'hidden',
                                    }, children: _jsx(GoogleMapsComponent, {}) }) }), _jsxs(Box, { sx: {
                                    height: '12vh', // Altura del box principal
                                    // Margin top de 2rem
                                    width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
                                    display: 'flex',
                                    overflowX: 'hidden', // Evita barra de desplazamiento horizontal
                                    overflowY: 'hidden', // Permite scroll vertical si es necesario
                                    marginBottom: '0rem',
                                    backgroundColor: '#89898e'
                                }, children: [_jsxs(Box, { sx: {
                                            padding: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' },
                                            justifyContent: 'flex-start',
                                            width: { xs: '20%', sm: '40%', md: '40%' },
                                            position: 'absolute',
                                            marginLeft: '0',
                                        }, children: [_jsxs(Typography, { component: 'span', variant: "body2", sx: {
                                                    fontFamily: 'Josefin Sans',
                                                    fontSize: { xs: '4px', sm: '8px', md: '10px' },
                                                    color: '#FFFFFF',
                                                    textWrap: 'nowrap',
                                                }, children: [_jsx(PlaceIcon, {}), "Chaco  Monteagudo 578 \u2022 Resistencia"] }), _jsx(Typography, { component: 'span', variant: "body2", sx: {
                                                    fontFamily: 'Josefin Sans',
                                                    fontSize: { xs: '4px', sm: '8px', md: '10px' },
                                                    color: '#FFFFFF',
                                                    textWrap: 'nowrap',
                                                    marginLeft: '1.5rem'
                                                }, children: "TEL.: (0362) 4430466 / 4438409" }), "            ", _jsx(Typography, { component: 'span', variant: "body2", sx: {
                                                    fontFamily: 'Josefin Sans',
                                                    fontSize: { xs: '4px', sm: '8px', md: '10px' },
                                                    color: '#FFFFFF',
                                                    textWrap: 'nowrap',
                                                    marginLeft: '1.5rem'
                                                }, children: "gerencia@ortopediaabbruzzese.com.ar" })] }), _jsxs(Box, { sx: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            height: '80%',
                                            marginLeft: { xs: '3.5rem' }
                                        }, children: [_jsx(Typography, { variant: "body2", sx: {
                                                    fontFamily: 'Josefin Sans',
                                                    fontSize: { xs: '10px', sm: '16px', md: '18px' },
                                                    color: '#FFFFFF',
                                                    textWrap: 'nowrap'
                                                }, children: "S\u00EDguenos en:" }), _jsxs(Box, { sx: {
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: '15%',
                                                    marginLeft: { xs: '1.5rem', sm: '1rem', md: '.5rem' }
                                                }, children: [_jsx(Link, { href: "https://www.facebook.com/people/Grupo-Abbruzzese/100057542465339/", target: "_blank", rel: "noopener noreferrer", children: _jsx(Box, { component: "img", src: "/facebook-square-logo-48.png", alt: "Facebook", sx: {
                                                                width: { xs: '20px', sm: '35px', md: '7vh' },
                                                                height: 'auto',
                                                                margin: '0 0.2rem',
                                                                objectFit: 'contain',
                                                            } }) }), _jsx(Link, { href: "https://www.instagram.com/grupoabbruzzese2024/", target: "_blank", rel: "noopener noreferrer", children: _jsx(Box, { component: "img", src: "/instagram-logo-48.png", alt: "Instagram", sx: {
                                                                width: { xs: '20px', sm: '35px', md: '7vh' },
                                                                height: 'auto',
                                                                margin: '0 0.2rem',
                                                                objectFit: 'contain',
                                                            } }) }), _jsx(Link, { href: "https://www.linkedin.com/company/grupo-abbruzzese/", target: "_blank", rel: "noopener noreferrer", children: _jsx(Box, { component: "img", src: "/linkedin-square-logo-48.png", alt: "LinkedIn", sx: {
                                                                width: { xs: '20px', sm: '35px', md: '7vh' },
                                                                height: 'auto',
                                                                margin: '0 0.2rem',
                                                                objectFit: 'contain',
                                                            } }) })] })] }), _jsx(Box, { sx: {
                                            position: 'absolute',
                                            right: 0,
                                            bottom: 0,
                                            padding: '0.5rem',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                            width: '80%',
                                        }, children: _jsxs(Typography, { variant: "body2", sx: {
                                                fontFamily: 'Josefin Sans',
                                                fontSize: { xs: '6px', sm: '8px', md: '10px' },
                                                color: '#FFFFFF',
                                                marginRight: '1rem'
                                            }, children: ["\u00A9 ", new Date().getFullYear(), " Grupo Abbruzzese. Todos los derechos reservados."] }) })] })] })] })] }));
}
export default Inicio;
