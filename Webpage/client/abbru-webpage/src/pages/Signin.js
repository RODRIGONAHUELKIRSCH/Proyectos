import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { login } from '../apiconnect/apiconnection';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Copyright(props) {
    return (_jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", ...props, children: ['Copyright © ', _jsx(Link, { color: "inherit", href: "https://www.linkedin.com/company/grupo-abbruzzese/", target: "_blank", children: "Grupo Abbruzzese" }), ' ', new Date().getFullYear(), '.'] }));
}
const theme = createTheme();
// Expresiones regulares
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/;
export default function SignIn() {
    // Estado para los valores de los campos
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [emptymessage, setEmptyMessage] = React.useState('');
    const [showPassword, setShowPassword] = useState(false);
    // Estado para los errores
    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
    });
    // Función para validar los campos
    const validateFields = () => {
        let emailError = '';
        let passwordError = '';
        if (!email.trim()) {
            emailError = 'El email es requerido.';
        }
        else if (!emailRegex.test(email)) {
            emailError = 'El formato del email es inválido.';
        }
        if (!password.trim()) {
            passwordError = 'La contraseña es requerida.';
        }
        else if (!passwordRegex.test(password)) {
            passwordError = 'La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, dígitos y caracteres especiales.';
        }
        setErrors({
            email: emailError,
            password: passwordError,
        });
        // Retorna true si no hay errores
        return emailError === '' && passwordError === '';
    };
    const secretKey = '734bed22-1b4f-4f91-87ef-8ea0069c832e';
    // Función para cifrar valores
    const encryptValue = (value) => {
        return CryptoJS.AES.encrypt(value, secretKey).toString();
    };
    // Función para descifrar valores
    const decryptValue = (encryptedValue) => {
        const bytes = CryptoJS.AES.decrypt(encryptedValue, secretKey);
        return bytes.toString(CryptoJS.enc.Utf8); // Devuelve el valor descifrado
    };
    useEffect(() => {
        // Verificar si hay cookies cifradas
        const storedEmail = Cookies.get('email');
        const storedPassword = Cookies.get('password');
        if (storedEmail) {
            setEmail(decryptValue(storedEmail)); // Desencriptar el email
        }
        if (storedPassword) {
            setPassword(decryptValue(storedPassword)); // Desencriptar la contraseña
            setRememberMe(true); // Si hay contraseña guardada, marcar el checkbox
        }
    }, []);
    //Ocultar mostrar contraseña
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    // Manejo del submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Boolean(errors.email) || Boolean(errors.password)) {
            setEmptyMessage(`Los campos no pueden estar vacios o no cumplen con los requisitos. `);
        }
        if (validateFields()) {
            try {
                const token = await login(email, password);
                Cookies.set('authToken', encryptValue(token), { expires: 1, sameSite: 'Strict' }); // Guardar el JWT en sessionStorage
                if (rememberMe) {
                    Cookies.set('email', encryptValue(email), { expires: 1, sameSite: 'Strict' });
                    Cookies.set('password', encryptValue(password), { expires: 1, sameSite: 'Strict' });
                }
                else {
                    // Eliminar las cookies si no se recuerda el login
                    Cookies.remove('email');
                    Cookies.remove('password');
                }
                setTimeout(() => {
                    navigate('/frontend/');
                }, 2500);
            }
            catch (error) {
                setMessage(`Error al iniciar sesion. Intentelo de nuevo. `);
                console.error('Error al iniciar sesión:', error);
            }
        }
    };
    // Manejo del evento onBlur para validar cuando se pierde el foco
    const handleBlur = () => {
        validateFields();
    };
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(Grid, { container: true, component: "main", sx: { height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: [_jsx(CssBaseline, {}), _jsx(Grid, { size: { xs: 12, sm: 8, md: 5 }, component: Paper, elevation: 6, square: true, children: _jsxs(Box, { sx: {
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '15px',
                        }, children: [_jsx(Avatar, { sx: { m: 8, bgcolor: 'secondary.main' }, children: _jsx(LockOutlinedIcon, {}) }), _jsx(Typography, { component: "h1", variant: "h5", sx: { fontSize: { xs: '16px', sm: '20px', md: '24px' } }, children: "Inicia Sesi\u00F3n" }), message && _jsx(Typography, { sx: { marginBottom: '0.5rem', fontSize: { xs: '8px', sm: '12px', md: '16px' } }, color: "green", align: "center", children: message }), _jsxs(Box, { component: "form", noValidate: true, onSubmit: handleSubmit, sx: { mt: 1, fontSize: { xs: '8px', sm: '12px', md: '16px' } }, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "email", label: "Email", name: "email", autoComplete: "email", autoFocus: true, value: email, onChange: (e) => setEmail(e.target.value), onBlur: handleBlur, error: Boolean(errors.email), helperText: errors.email, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                fontSize: '1rem', // Tamaño base del label
                                                '@media (max-width:600px)': {
                                                    fontSize: '0.8rem', // Tamaño del label en pantallas pequeñas
                                                },
                                            },
                                            '& .MuiInputBase-input': {
                                                fontSize: {
                                                    xs: '12px', // Tamaño del texto en pantallas extra pequeñas
                                                    sm: '12px', // Tamaño del texto en pantallas pequeñas
                                                    md: '16px', // Tamaño del texto en pantallas medianas
                                                },
                                            },
                                        } }), _jsx(TextField, { margin: "normal", required: true, fullWidth: true, name: "password", label: "Contrase\u00F1a", type: showPassword ? 'text' : 'password', id: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), onBlur: handleBlur, error: Boolean(errors.password), helperText: errors.password, slotProps: {
                                            input: {
                                                endAdornment: (_jsx(InputAdornment, { position: "end", children: showPassword ? (_jsx(VisibilityOffIcon, { onClick: handleClickShowPassword, sx: { cursor: 'pointer' } })) : (_jsx(VisibilityIcon, { onClick: handleClickShowPassword, sx: { cursor: 'pointer' } })) })),
                                            },
                                        }, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                fontSize: '1rem', // Tamaño base del label
                                                '@media (max-width:600px)': {
                                                    fontSize: '0.8rem', // Tamaño del label en pantallas pequeñas
                                                },
                                            },
                                            '& .MuiInputBase-input': {
                                                fontSize: {
                                                    xs: '12px', // Tamaño del texto en pantallas extra pequeñas
                                                    sm: '12px', // Tamaño del texto en pantallas pequeñas
                                                    md: '16px', // Tamaño del texto en pantallas medianas
                                                },
                                            },
                                        } }), _jsx(FormControlLabel, { sx: { '& .MuiFormControlLabel-label': {
                                                fontSize: {
                                                    xs: '12px',
                                                    sm: '14px',
                                                    md: '16px',
                                                },
                                            }, }, control: _jsx(Checkbox, { sx: { fontSize: { xs: '6px', sm: '12px', md: '16px' }, }, checked: rememberMe, onChange: () => setRememberMe(!rememberMe), id: "remember", value: "remember", color: "primary" }), label: "Recu\u00E9rdame" }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 2, mb: 3, fontSize: { xs: '12px', sm: '12px', md: '16px' } }, id: "submitbtn", children: "Iniciar Sesi\u00F3n" }), emptymessage && _jsx(Typography, { sx: { marginBottom: '0.5rem', fontSize: { xs: '8px', sm: '12px', md: '16px' } }, color: "red", align: "center", children: emptymessage }), _jsxs(Grid, { container: true, children: [_jsx(Grid, { size: { xs: 12 }, sx: { mt: '0.5rem' }, children: _jsx(Link, { href: "/frontend/recover", variant: "body2", sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' } }, children: "\u00BFOlvid\u00F3 su contrase\u00F1a?" }) }), _jsx(Grid, { sx: { mt: '0.5rem' }, children: _jsx(Link, { href: "/frontend/register", variant: "body2", sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' } }, children: "¿No tienes una cuenta? Regístrate" }) })] }), _jsx(Copyright, { sx: { mt: 3.5, fontSize: { xs: '8px', sm: '12px', md: '16px' } } })] })] }) })] }) }));
}
