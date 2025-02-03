import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PlaceIcon from '@mui/icons-material/Place';
import { Box, CssBaseline, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ImageNewsSlider from '../../Types/ImageNewsSlider';
const theme = createTheme();
const News = () => {
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsxs(Grid, { container: true, component: "main", sx: { height: '100vh', width: '100vw', backgroundColor: '#ffffff', position: 'relative', margin: 0 }, children: [_jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: {
                            margin: 0,
                            height: '18vh',
                            backgroundColor: '#00349a',
                            position: 'relative',
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
                                    right: { xs: 'auto', sm: 'auto', md: '1rem' },
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
                                        }, children: "Contacto" })] })] }), _jsx(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: { mt: 0, height: '70vh', padding: 0, marginBottom: '12vh', backgroundColor: '#ffeadd', width: '100%'
                        }, children: _jsx(ImageNewsSlider, {}) }), _jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12, lg: 12 }, sx: {
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
export default News;
