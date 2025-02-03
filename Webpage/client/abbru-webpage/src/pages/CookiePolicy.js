import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Copyright(props) {
    return (_jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", ...props, children: ['Copyright © ', _jsx(Link, { color: "inherit", href: "https://www.linkedin.com/company/grupo-abbruzzese/", target: "_blank", children: "Grupo Abbruzzese" }), ' ', new Date().getFullYear(), '.'] }));
}
const theme = createTheme();
export default function CookiePolicy() {
    // Estado para los valores de los campos
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(Grid, { container: true, component: "main", sx: { height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url("/ortopedia4.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', }, children: [_jsx(CssBaseline, {}), _jsx(Grid, { size: { xs: 12, sm: 8, md: 5 }, component: Paper, elevation: 6, square: true, children: _jsxs(Box, { sx: {
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '15px',
                        }, children: [_jsx(Typography, { color: 'red', component: "h1", variant: "h5", sx: { fontSize: { xs: '12px', sm: '16px', md: '24px' } }, children: "\u00A1Politica de Cookies!" }), _jsxs(Box, { sx: { mt: 1 }, children: [_jsx(Typography, { color: 'grey', component: "h1", variant: 'subtitle2', sx: { mt: 1, fontSize: { xs: '8px', sm: '12px', md: '24px' } }, children: "\u00BFQu\u00E8 son las cookies?" }), _jsx(Typography, { component: "p", sx: { fontSize: { xs: '8px', sm: '12px', md: '14px' } }, children: "Una cookie es un archivo que incluye una peque\u00F1a cantidad de datos que se descargan e instalan en un dispositivo mientras se navega por un sitio web. En vistas posteriores del sitio web, las cookies se devuelven al sitio web original o a otros sitios web que reconocen dicha cookie. Las cookies son \u00FAtiles porque permiten almacenar y recuperar informaci\u00F3n sobre el n\u00FAmero de visitantes, los h\u00E1bitos de navegaci\u00F3n de los usuarios y dispositivos y, seg\u00FAn la informaci\u00F3n que contienen y la forma en que los usuarios utilizan el dispositivo, tambi\u00E9n pueden ser \u00FAtiles para reconocer a los usuarios." }), _jsx(Typography, { component: "p", sx: { fontSize: { xs: '8px', sm: '12px', md: '14px' } }, children: "Las cookies son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestaci\u00F3n de servicios interactivos, facilit\u00E1ndole la navegaci\u00F3n y usabilidad de nuestra web." }), _jsx(Typography, { color: 'grey', component: "h1", variant: 'subtitle2', sx: { mt: 1, fontSize: { xs: '8px', sm: '12px', md: '24px' } }, children: "\u00BFPara qu\u00E8 las utilizamos?" }), _jsx(Typography, { component: "p", sx: { fontSize: { xs: '8px', sm: '12px', md: '14px' } }, children: "Utilizamos cookies para brindarle una mejor experiencia de usuario y para controlar el acceso a diferentes paginas dentro de la web.  " }), _jsx(Typography, { sx: { mt: 1, fontSize: { xs: '8px', sm: '12px', md: '14px' } }, component: "p", children: "Por ejemplo si acepta las cookies se le dara acceso a las paginas de eventos y productos para acceder a estas paginas es necesario loguearse(ademas de aceptar las cookies) tambien accede a que guardemos sus datos de inicio de sesion (estos solo seran guardados si marca la casilla \"Recuerdame\"), ahora si rechaza las cookies se bloqueara el acceso a estas paginas de la web." })] }), _jsx(Typography, { sx: { mt: 2, fontSize: { xs: '12px', sm: '16px', md: '24px' } }, color: "#00349a", component: "h1", variant: "h5", children: "Atentamente-Grupo Abbruzzese" }), _jsx(Copyright, { sx: { mt: 3.5, fontSize: { xs: '8px', sm: '12px', md: '14px' } } })] }) })] }) }));
}
