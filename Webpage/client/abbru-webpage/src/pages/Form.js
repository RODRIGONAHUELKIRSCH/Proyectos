import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '@mui/material/Grid2';
import { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, FormGroup, Link, InputAdornment } from '@mui/material';
import { createUser } from '../apiconnect/apiconnection';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// Expresiones regulares para validar los campos
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,22}$/,
    password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,24}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,14}$/,
    matricula: /^\d{4,8}$/,
};
const Register = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // Estado para los errores de validación
    const [errors, setErrors] = useState({
        nombre: '',
        telefono: '',
        email: '',
        matricula: '',
        password: '',
        confirmPassword: '',
    });
    //Ocultar mostrar contraseña
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    //Ocultar mostrar contraseña
    const handleClickConfirmShowPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    // Funciones de validación
    const validateNombre = (value) => {
        if (!expresiones.nombre.test(value)) {
            setErrors((prev) => ({ ...prev, nombre: 'El nombre debe tener entre 3 y 22 caracteres.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, nombre: '' }));
        }
    };
    const validateTelefono = (value) => {
        if (!expresiones.telefono.test(value)) {
            setErrors((prev) => ({ ...prev, telefono: 'El teléfono debe tener entre 10 y 14 dígitos.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, telefono: '' }));
        }
    };
    const validateEmail = (value) => {
        if (!expresiones.email.test(value)) {
            setErrors((prev) => ({ ...prev, email: 'El correo electrónico no es válido.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, email: '' }));
        }
    };
    const validateMatricula = (value) => {
        if (!expresiones.matricula.test(value)) {
            setErrors((prev) => ({ ...prev, matricula: 'La matrícula debe tener entre 4 y 8 dígitos.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, matricula: '' }));
        }
    };
    const validatePassword = (value) => {
        if (!expresiones.password.test(value)) {
            setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener entre 8 y 24 caracteres, incluir mayúsculas, minúsculas, números y símbolos.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, password: '' }));
        }
    };
    const validateConfirmPassword = (value) => {
        if (value !== password) {
            setErrors((prev) => ({ ...prev, confirmPassword: 'Las contraseñas no coinciden.' }));
        }
        else {
            setErrors((prev) => ({ ...prev, confirmPassword: '' }));
        }
    };
    // Función para validar si todo el formulario es válido
    const validateForm = () => {
        const isValid = errors.nombre === '' &&
            errors.telefono === '' &&
            errors.email === '' &&
            errors.password === '' &&
            errors.confirmPassword === '' &&
            nombre.trim() !== '' &&
            telefono.trim() !== '' &&
            email.trim() !== '' &&
            matricula.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== '';
        setIsFormValid(isValid); // Asegurar que solo se asigne un booleano
    };
    // Llamar a validateForm cada vez que cambie algún valor o estado de errores
    useEffect(() => {
        validateForm();
    }, [nombre, telefono, email, matricula, password, confirmPassword, errors]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
        const user = { telefono, password, email, nombre, matricula };
        try {
            const createdUser = await createUser(user);
            setResponseMessage(`Usuario ${createdUser.nombre} creado con éxito!`);
            setTimeout(() => {
                navigate('/frontend/signin');
            }, 5000);
        }
        catch (error) {
            console.error('Error al crear usuario:', error);
            setResponseMessage('Hubo un problema al registrar al usuario.');
        }
    };
    const handleKeyDownTelefono = (event) => {
        const key = event.key;
        if (!/^\d$/.test(key) && key !== 'Backspace') {
            event.preventDefault(); // Evitar entrada de caracteres no numéricos
        }
    };
    const handleKeyDownMatricula = (event) => {
        const key = event.key;
        if (!/^\d$/.test(key) && key !== 'Backspace') {
            event.preventDefault(); // Evitar entrada de caracteres no numéricos
        }
    };
    const handleKeyDownNombre = (event) => {
        const key = event.key;
        if (/\d/.test(key)) {
            event.preventDefault(); // Evitar entrada de números
        }
    };
    return (_jsx(Box, { sx: {
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            marginTop: '.1 rem',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url("/ortopedia.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }, children: _jsx(Container, { maxWidth: "sm", children: _jsxs(Box, { sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '15px',
                    borderRadius: '10px',
                    boxShadow: 3,
                }, children: [_jsx(Typography, { variant: "h4", align: "center", sx: { fontSize: { xs: '20px', sm: '24px', md: '28px' } }, children: "Cree una cuenta" }), _jsx(FormControl, { component: "fieldset", fullWidth: true, children: _jsx(FormGroup, { children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { label: "Nombre de usuario", fullWidth: true, required: true, value: nombre, onChange: (e) => {
                                                setNombre(e.target.value);
                                                validateNombre(e.target.value);
                                            }, onBlur: (e) => validateNombre(e.target.value), onKeyDown: handleKeyDownNombre, error: Boolean(errors.nombre), helperText: errors.nombre, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                    fontSize: '1rem',
                                                    '@media (max-width:600px)': {
                                                        fontSize: '0.8rem',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '12px',
                                                        md: '16px',
                                                    },
                                                },
                                            } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { label: "Tel\u00E9fono", fullWidth: true, required: true, type: "tel", value: telefono, onChange: (e) => {
                                                setTelefono(e.target.value);
                                                validateTelefono(e.target.value);
                                            }, onBlur: (e) => validateTelefono(e.target.value), onKeyDown: handleKeyDownTelefono, error: Boolean(errors.telefono), helperText: errors.telefono, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                    fontSize: '1rem',
                                                    '@media (max-width:600px)': {
                                                        fontSize: '0.8rem',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '12px',
                                                        md: '16px',
                                                    },
                                                },
                                            } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { label: "Correo electr\u00F3nico", fullWidth: true, required: true, type: "email", value: email, onChange: (e) => {
                                                setEmail(e.target.value);
                                                validateEmail(e.target.value);
                                            }, onBlur: (e) => validateEmail(e.target.value), error: Boolean(errors.email), helperText: errors.email, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                    fontSize: '1rem',
                                                    '@media (max-width:600px)': {
                                                        fontSize: '0.8rem',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '12px',
                                                        md: '16px',
                                                    },
                                                },
                                            } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { label: "Matr\u00EDcula", fullWidth: true, required: true, value: matricula, onChange: (e) => {
                                                setMatricula(e.target.value);
                                                validateMatricula(e.target.value);
                                            }, onBlur: (e) => validateMatricula(e.target.value), onKeyDown: handleKeyDownMatricula, error: Boolean(errors.matricula), helperText: errors.matricula, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                    fontSize: '1rem',
                                                    '@media (max-width:600px)': {
                                                        fontSize: '0.8rem',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '12px',
                                                        md: '16px',
                                                    },
                                                },
                                            } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { label: "Contrase\u00F1a", fullWidth: true, required: true, type: showPassword ? 'text' : 'password', value: password, onChange: (e) => {
                                                setPassword(e.target.value);
                                                validatePassword(e.target.value);
                                            }, onBlur: (e) => validatePassword(e.target.value), error: Boolean(errors.password), helperText: errors.password, slotProps: {
                                                input: {
                                                    endAdornment: (_jsx(InputAdornment, { position: "end", children: showPassword ? (_jsx(VisibilityOffIcon, { onClick: handleClickShowPassword, sx: { cursor: 'pointer' } })) : (_jsx(VisibilityIcon, { onClick: handleClickShowPassword, sx: { cursor: 'pointer' } })) })),
                                                },
                                            }, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                    fontSize: '1rem',
                                                    '@media (max-width:600px)': {
                                                        fontSize: '0.8rem',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '12px',
                                                        md: '16px',
                                                    },
                                                },
                                            } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(TextField, { label: "Confirmar Contrase\u00F1a", fullWidth: true, required: true, type: showConfirmPassword ? 'text' : 'password', value: confirmPassword, onChange: (e) => {
                                                setConfirmPassword(e.target.value);
                                                validateConfirmPassword(e.target.value);
                                            }, onBlur: (e) => validateConfirmPassword(e.target.value), error: Boolean(errors.confirmPassword), helperText: errors.confirmPassword, slotProps: {
                                                input: {
                                                    endAdornment: (_jsx(InputAdornment, { position: "end", children: showConfirmPassword ? (_jsx(VisibilityOffIcon, { onClick: handleClickConfirmShowPassword, sx: { cursor: 'pointer' } })) : (_jsx(VisibilityIcon, { onClick: handleClickConfirmShowPassword, sx: { cursor: 'pointer' } })) })),
                                                },
                                            }, sx: { fontSize: { xs: '8px', sm: '12px', md: '16px' }, '& .MuiInputLabel-root': {
                                                    fontSize: '1rem',
                                                    '@media (max-width:600px)': {
                                                        fontSize: '0.8rem',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '12px',
                                                        md: '16px',
                                                    },
                                                },
                                            } }) }), _jsx(Grid, { size: { xs: 12 }, children: _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", onClick: handleSubmit, disabled: !isFormValid, sx: { fontSize: { xs: '12px', sm: '14px', md: '16px' } }, children: "Registrarse" }) })] }) }) }), responseMessage && (_jsx(Typography, { variant: "body2", color: passwordError ? 'error' : 'primary', sx: { fontSize: { xs: '10px', sm: '12px', md: '14px' } }, children: responseMessage })), _jsx(Box, { mt: 2, children: _jsx(Link, { href: "/frontend/signin", variant: "body2", sx: { fontSize: { xs: '10px', sm: '12px', md: '14px' } }, children: "¿Ya tienes una cuenta? Inicia sesión" }) })] }) }) }));
};
export default Register;
