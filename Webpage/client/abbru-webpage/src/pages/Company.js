import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
const theme = createTheme();
const Company = () => {
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsxs(Grid, { container: true, component: "main", sx: { height: '100vh', width: '100vw', backgroundColor: '#ffffff', position: 'relative', margin: 0 }, children: [_jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: {
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
                                        }, children: "Contacto" })] })] }), _jsx(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: { mt: 0, height: '70vh', padding: 0, marginBottom: '12vh',
                            backgroundImage: 'url("/fondoempresa1.png")',
                            backgroundSize: { xs: '100% 100%', sm: 'cover', md: 'cover' },
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }, children: _jsxs(Box, { sx: {
                                padding: 0,
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' },
                                justifyContent: 'flex-start',
                                width: { xs: '100%', sm: '60%', md: '60%' },
                                position: 'relative',
                                marginLeft: { sm: '0.5rem', md: '1.5rem' },
                                //Preguntar Martin
                                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro con 60% de opacidad
                                borderRadius: '18px', // Agregar un borde redondeado opcionalmente
                            }, children: [_jsx(Typography, { variant: "h5", gutterBottom: true, sx: {
                                        mt: '0.5rem',
                                        mx: { xs: '2%', sm: '1.5%', md: '1.5%' },
                                        fontFamily: 'Josefin Sans',
                                        fontSize: { xs: '14px', sm: '20px', md: '26px' },
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        color: '#ffffff'
                                    }, children: "Grupo Abbruzzese - Tecnolog\u00EDa M\u00E9dica" }), _jsx(Typography, { variant: "body2", sx: {
                                        mx: { xs: '5%', sm: '2%', md: '2%' },
                                        width: '90%',
                                        fontFamily: 'Josefin Sans',
                                        fontSize: { xs: '8px', sm: '14px', md: '16px', lg: '18px' },
                                        mt: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem' },
                                        color: '#ffffff'
                                    }, children: "Somos una empresa Argentina con sede en Resistencia, Chaco(de cobertura regional); comprometida en ofrecer la m\u00E1s alta calidad en implantes para reconstrucci\u00F3n \u00F3sea y enfermedades de los huesos. \u00A0 Representamos marcas dedicadas al desarrollo e innovaci\u00F3n de productos m\u00E9dicos, buscando la excelencia en servicio y continuo desarrollo profesional m\u00E9dico." }), _jsx(Typography, { variant: "body2", sx: {
                                        width: '90%',
                                        mx: { xs: '5%', sm: '2%', md: '2%' },
                                        fontFamily: 'Josefin Sans',
                                        fontSize: { xs: '8px', sm: '14px', md: '16px', lg: '18px' },
                                        mt: { xs: '0.5rem', sm: '0.5rem', md: '1.5rem' },
                                        color: '#ffffff'
                                    }, children: "Llevamos 23 a\u00F1os en el mercado de la salud, otorgando las mejores alternativas y soluciones para los casos m\u00E1s complejos del trauma ortop\u00E9dico. \u00A0 En Grupo Abbruzzese sabemos lo importante que es poder satisfacer las necesidades de nuestros clientes, por esa raz\u00F3n nos ocupamos de ofrecer productos de \u00FAltima generaci\u00F3n y alta calidad, brindando un continuo servicio y manteniendo as\u00ED los m\u00E1s altos est\u00E1ndares en innovaci\u00F3n m\u00E9dica." })] }) }), _jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12, lg: 12 }, sx: {
                            position: 'absolute',
                            minWidth: '100vw',
                            bottom: 0,
                            height: '12vh',
                            backgroundColor: '#89898e',
                            padding: { xs: '0rem', sm: '0.5rem', md: '0.5rem' },
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
                                    }, children: ["\u00A9 ", new Date().getFullYear(), " Grupo Abbruzzese. Todos los derechos reservados."] }) })] })] })] }));
};
export default Company;
