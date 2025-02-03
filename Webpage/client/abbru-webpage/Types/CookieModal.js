import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Box, Typography, Button, Link, Stack } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
const CookieModal = ({ onAccept, onReject }) => {
    const [open, setOpen] = useState(true);
    // Función para cerrar el modal y aceptar las cookies
    const handleAccept = () => {
        onAccept(); // Llamamos la función de aceptación
        setOpen(false); // Cerramos el modal
    };
    // Función para cerrar el modal y rechazar las cookies
    const handleReject = () => {
        onReject(); // Llamamos la función de rechazo
        setOpen(false); // Cerramos el modal
    };
    return (_jsx(Modal, { open: open, onClose: () => { }, closeAfterTransition: true, children: _jsxs(Box, { sx: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: 250, sm: 300, md: 400 },
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 3,
            }, onClick: (e) => e.stopPropagation(), children: [_jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { mb: 1 }, children: [_jsx(CookieIcon, { color: "primary" }), _jsx(Typography, { id: "cookie-modal-title", variant: "h6", component: "h2", sx: { xs: '8px', sm: '12px', md: '16px' }, children: "Utilizamos Cookies" })] }), _jsx(Typography, { id: "cookie-modal-description", sx: { mt: 2, fontSize: { xs: '8px', sm: '12px', md: '16px' } }, children: "Usamos cookies para mejorar su experiencia de usuario en nuestra web y para controlar el acceso a distintas partes de nuestra web." }), _jsx(Typography, { sx: { mt: 2, fontSize: { xs: '8px', sm: '12px', md: '16px' } }, children: _jsx(Link, { href: "/frontend/policy", target: "_blank", underline: "hover", rel: "noopener noreferrer", children: "Ver pol\u00EDtica de cookies" }) }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { mt: 3, justifyContent: 'center' }, children: [_jsx(Button, { variant: "contained", color: "primary", onClick: handleAccept, sx: { fontSize: { xs: '8px', sm: '12px', md: '14px' } }, children: "Aceptar" }), _jsx(Button, { variant: "outlined", color: "secondary", onClick: handleReject, sx: { fontSize: { xs: '8px', sm: '12px', md: '14px' } }, children: "Rechazar" })] })] }) }));
};
export default CookieModal;
