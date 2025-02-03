import axios from 'axios';
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
export const getAllUsers = async () => {
    try {
        const response = await apiClient.get('/api/user/');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users', error);
        throw error;
    }
};
// Función para verificar si el email existe (GET)
export const checkEmailExists = async (Email) => {
    try {
        const url = `/api/user/findByEmail?Email=${Email}`;
        const response = await apiClient.get(url);
        return response.data;
    }
    catch (error) {
        console.error('Error al verificar el email', error);
        throw error;
    }
};
// Función para guardar un usuario (POST)
export const createUser = async (user) => {
    try {
        const response = await apiClient.post('/api/user/', JSON.stringify(user), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Error al crear usuario', error);
        throw error;
    }
};
export const getAllProduct = async () => {
    try {
        const response = await apiClient.post('/api/product/');
        return response.data;
    }
    catch (error) {
        console.error('Error al crear producto', error);
        throw error;
    }
};
// Función para hacer la petición POST al backend
export const resetPassword = async (token, newPassword) => {
    try {
        // Hacer una petición POST enviando el token en los params y la nueva contraseña en el cuerpo de la solicitud
        const response = await apiClient.post('/api/user/auth/reset-password', newPassword, // cuerpo de la solicitud
        {
            params: { token: token }, // enviar el token como parámetro
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        throw error;
    }
};
export const login = async (email, password) => {
    try {
        const response = await apiClient.post('/api/user/auth/login', { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Aquí el backend debería devolver el token JWT
        const token = response.data.jwt;
        return token;
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};
export const fetchActiveImages = async () => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/api/eventImage/active`);
        console.log(response.data);
        return response.data; // Esto debería devolver las imágenes con URLs
    }
    catch (error) {
        console.error('Error fetching active images:', error);
        throw error; // Lanza el error para manejarlo más arriba en la cadena
    }
};
export const fetchInactiveImages = async () => {
    try {
        const response = await apiClient.get('/api/eventImage/inactive');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching inactive images:', error);
        throw error;
    }
};
export const fetchImagesByState = async (state) => {
    try {
        const response = await axios.get(`/api/eventImage/state/${state}`);
        // Verifica si response.data es un arreglo
        if (Array.isArray(response.data)) {
            const apiUrl = import.meta.env.VITE_API_URL;
            return response.data.map((img) => ({
                ...img,
                eventImage: `${apiUrl}/api/eventImage/images/${img.eventImage}`,
            }));
        }
        else {
            console.error('La respuesta no contiene un arreglo de imágenes:', response.data);
            return []; // Retorna un arreglo vacío en caso de error
        }
    }
    catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
};
export const fetchMagazinesByYearRange = async (startYear, endYear) => {
    try {
        const response = await apiClient.get(`/api/magazine/rango`, {
            params: { startYear, endYear },
        });
        return response.data;
    }
    catch (error) {
        console.error('Error al obtener revistas por rango de años:', error);
        throw error;
    }
};
export default {
    fetchMagazinesByYearRange,
};
export const subscribeToNewsletter = async (email) => {
    try {
        // Enviar solicitud POST al endpoint configurado
        const response = await apiClient.post('/api/newsletter/subscribe', { email }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Verificar respuesta y manejar errores si es necesario
        return response;
    }
    catch (error) {
        console.error('Error en la solicitud:', error);
    }
};
export const obtenerUltimaRevistaEnlace = async () => {
    try {
        const response = await apiClient.get('/api/magazine/ultima-revista/enlace'); // Asumiendo que este es tu endpoint
        return response.data || null;
    }
    catch (error) {
        console.error("Error al obtener el link de la última revista:", error);
        return null;
    }
};
// Función para obtener la última revista desde el backend
export const obtenerUltimaRevista = async () => {
    try {
        // Realiza la solicitud GET al endpoint
        const response = await apiClient.get('/api/magazine/ultima-revista');
        // Verifica si la respuesta tiene datos
        if (response.data) {
            return response.data; // Devuelve los datos de la revista
        }
        else {
            return null; // Si no hay datos, devuelve null
        }
    }
    catch (error) {
        console.error("Error al obtener la última revista:", error);
        return null; // Devuelve null en caso de error
    }
};
export const obtenerProductoPorCategoria = async (categoria) => {
    try {
        const response = await apiClient.get("/api/product/search/categoria", {
            params: { categoria: encodeURIComponent(categoria) }, // Codifica la categoría
        });
        return response.data; // Retorna los datos recibidos del backend
    }
    catch (error) {
        console.error("Error al obtener productos por categoría:", error);
        throw new Error("No se pudo obtener los productos. Verifica la categoría e intenta nuevamente.");
    }
};
