import axios from 'axios';
import {User} from "../../Types/types"
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const getAllUsers = async () => {
    try {
      const response = await apiClient.get('/api/user/');
      return response.data;
    } catch (error) {
      console.error('Error fetching users', error);
      throw error;
    }
  }

  // Función para verificar si el email existe (GET)
export const checkEmailExists = async (Email: string) => {
  try {

    const url = `/api/user/findByEmail?Email=${Email}`;
    
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al verificar el email', error);
    throw error;
  }
};

  // Función para guardar un usuario (POST)
  export const createUser = async (user:User) => {
    try {
      const response = await apiClient.post('/api/user/', JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear usuario', error);
      throw error;
    }
  };
  
  export const getAllProduct = async () => {
    try {
      const response = await apiClient.post('/api/product/');
      return response.data;
    } catch (error) {
      console.error('Error al crear producto', error);
      throw error;
    }
  };


// Función para hacer la petición POST al backend
export const resetPassword = async (token: string, newPassword: string) => {
  try {
    // Hacer una petición POST enviando el token en los params y la nueva contraseña en el cuerpo de la solicitud
    const response = await apiClient.post('/api/user/auth/reset-password', 
    newPassword, // cuerpo de la solicitud
    {
      params: { token: token }, // enviar el token como parámetro
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error al restablecer la contraseña:', error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/api/user/auth/login', { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // Aquí el backend debería devolver el token JWT
    const token = response.data.jwt;
    
    // Guardar el token en localStorage o en el estado de la aplicación
    localStorage.setItem('token', token);
    
    return token;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};