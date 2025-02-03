import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography, ListItemButton, List, Paper, Button } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import apiconnection from '../apiconnect/apiconnection';
const theme = createTheme();
function Magazines() {
    const [magazines, setMagazines] = useState([]);
    const [page, setPage] = useState(0);
    const [yearRange, setYearRange] = useState({ startYear: "2024", endYear: "2025" });
    const itemsPerPage = 6;
    const fetchMagazines = async (startYear, endYear) => {
        try {
            const data = await apiconnection.fetchMagazinesByYearRange(startYear, endYear);
            setMagazines(data);
            setPage(0); // Resetear la página al cambiar de rango
        }
        catch (error) {
            console.error('Error fetching magazines:', error);
        }
    };
    useEffect(() => {
        fetchMagazines(yearRange.startYear, yearRange.endYear); // Llama a la función para obtener revistas del rango de años predeterminado
    }, []);
    const handleYearRangeClick = (startYear, endYear) => {
        setYearRange({ startYear, endYear });
        fetchMagazines(startYear, endYear);
    };
    const paginatedMagazines = magazines.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
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
    const totalPages = Math.ceil(magazines.length / itemsPerPage);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsxs(Grid, { container: true, component: "main", sx: { height: '100', width: '100vw', backgroundColor: '#ffffff', position: 'relative', margin: 0 }, children: [_jsxs(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: {
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
                                        }, children: "Contacto" })] })] }), _jsx(Grid, { container: true, component: "div", size: { xs: 12, sm: 12, md: 12 }, sx: { mt: 0, height: '70vh', padding: 0, backgroundColor: '#ffeadd', width: '100%',
                            display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                        }, children: _jsxs(Box, { sx: { display: 'flex', height: '100%', width: '100%' }, children: [_jsxs(Paper, { sx: {
                                        width: { xs: '30%', sm: '30%', md: '30%' },
                                        height: 'auto',
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: 1,
                                        position: { xs: 'relative', sm: 'relative' },
                                        top: { xs: 'auto' },
                                    }, children: [_jsx(Typography, { component: 'h1', sx: { margin: '0', padding: '1rem', height: '8vh', fontSize: { xs: '8px', sm: '12px', md: '20px' }, whiteSpace: 'nowrap', backgroundColor: '#00349a', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', }, children: " Revistas por a\u00F1o:" }), _jsxs(List, { sx: { padding: { xs: '0.2rem', sm: "0.5rem", md: '1rem' } }, children: [_jsx(ListItemButton, { onClick: () => handleYearRangeClick("2024", "2025"), sx: { border: 'solid 1px white', borderRadius: '10px', marginBottom: '15px', backgroundColor: '#00349a', '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' }, justifyContent: 'center', alignItems: 'center' }, children: _jsx(Typography, { sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, whiteSpace: 'nowrap' }, children: "2024-2025" }) }), _jsx(ListItemButton, { onClick: () => handleYearRangeClick(2026, 2027), sx: { border: 'solid 1px white', borderRadius: '10px', marginBottom: '15px', backgroundColor: '#00349a', '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' }, justifyContent: 'center', alignItems: 'center' }, children: _jsx(Typography, { sx: { fontSize: { xs: '8px', sm: '12px', md: '16px', whiteSpace: 'nowrap' } }, children: "2026-2027" }) }), _jsx(ListItemButton, { onClick: () => handleYearRangeClick(2028, 2029), sx: { border: 'solid 1px white', borderRadius: '10px', marginBottom: '15px', backgroundColor: '#00349a', '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' }, justifyContent: 'center', alignItems: 'center' }, children: _jsx(Typography, { sx: { fontSize: { xs: '8px', sm: '12px', md: '16px', whiteSpace: 'nowrap' } }, children: "2028-2029" }) }), _jsx(ListItemButton, { onClick: () => handleYearRangeClick(2030, 2031), sx: { border: 'solid 1px white', borderRadius: '10px', marginBottom: '15px', backgroundColor: '#00349a', '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' }, justifyContent: 'center', alignItems: 'center' }, children: _jsx(Typography, { sx: { fontSize: { xs: '8px', sm: '12px', md: '16px', whiteSpace: 'nowrap' } }, children: "2030-2031" }) })] })] }), _jsx(Box, { sx: { height: '100%', margin: { xs: 'auto', sm: '0px 5px' }, width: '100%' }, children: _jsxs(Paper, { sx: { height: '100%', display: 'flex', flexDirection: 'column', width: '100%' }, children: [magazines.length > 0 ? (_jsx(Grid, { container: true, spacing: 2, children: paginatedMagazines.map((magazine, index) => (_jsx(Grid, { size: { xs: 12 }, children: _jsxs(Box, { sx: {
                                                            display: 'flex',
                                                            flexDirection: { xs: 'row', sm: 'row' },
                                                            alignItems: 'center',
                                                            height: { xs: '6vh', sm: '6vh', md: '8vh' },
                                                            width: '100%',
                                                            padding: '0.5rem',
                                                            borderBottom: '1px solid #ccc',
                                                        }, children: [_jsx(Box, { sx: {
                                                                    width: { xs: '10%', sm: '20%' },
                                                                    height: { xs: '30px', sm: '45px', md: '60px' },
                                                                    backgroundImage: `url(${getImageUrl(magazine.imageString)})`,
                                                                    backgroundSize: 'contain',
                                                                    backgroundPosition: 'center',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    marginBottom: { xs: '0.5rem', sm: 0 },
                                                                } }), _jsxs(Box, { sx: { width: { xs: '25%', sm: '25%' }, marginRight: '4rem' }, children: [_jsx(Typography, { variant: "h6", sx: { textAlign: { xs: 'center' }, fontSize: { xs: '6px', sm: '12px', md: '16px', whiteSpace: 'nowrap' } }, children: magazine.nombre }), _jsx(Typography, { variant: "h6", sx: { textAlign: { xs: 'center' }, fontSize: { xs: '6px', sm: '10px', md: '12px' } }, children: magazine.año })] }), _jsx(Box, { sx: { flex: 1, width: { xs: '10%', sm: '15%' }, textAlign: { xs: 'center', sm: 'right' }, marginTop: { sm: 0 }, padding: '0.5rem' }, children: _jsx(Button, { component: "a", href: magazine.enlace, target: "_blank", rel: "noopener noreferrer", variant: "contained", color: "primary", size: 'small', sx: { height: { xs: '15px', sm: '30px' }, whitespace: 'nowrap', fontSize: { xs: '6px', sm: '12px' } }, children: "Ver revista" }) })] }) }, index))) })) : (_jsx(Typography, { sx: {
                                                    marginTop: '20px',
                                                    fontSize: { xs: '10px', sm: '14px', md: '22px' },
                                                    textAlign: 'center',
                                                    color: 'red',
                                                    fontFamily: 'Josefin Sans',
                                                    fontStyle: 'italic'
                                                }, children: "\u00A1No se han encontrado revistas con estos par\u00E1metros!" })), totalPages > 1 && (_jsxs(Box, { sx: { display: 'flex', justifyContent: 'center', marginTop: { xs: '0.1rem', sm: '.5rem' } }, children: [_jsx(Button, { onClick: () => setPage(page - 1), disabled: page === 0, sx: { fontSize: { xs: '8px', sm: '12px' } }, children: "Anterior" }), _jsxs(Typography, { variant: "caption", sx: { margin: '0 1rem', alignSelf: 'center', fontSize: { xs: '6px', sm: '12px' } }, children: ["P\u00E1gina ", page + 1, " de ", totalPages] }), _jsx(Button, { onClick: () => setPage(page + 1), disabled: page === totalPages - 1, sx: { fontSize: { xs: '8px', sm: '12px' } }, children: "Siguiente" })] }))] }) })] }) }), _jsxs(Box, { sx: {
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
                                    }, children: ["\u00A9 ", new Date().getFullYear(), " Grupo Abbruzzese. Todos los derechos reservados."] }) })] })] })] }));
}
export default Magazines;
