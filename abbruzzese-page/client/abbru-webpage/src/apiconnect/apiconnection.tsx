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
export const checkEmailExists = async (email: string) => {
  try {
    const response = await apiClient.get('/api/user/findByEmail', {
      params: { Email: email }, // Enviamos el email como parámetro
    });
    return response.data; // Supone que la respuesta tiene un objeto con un mensaje
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
  