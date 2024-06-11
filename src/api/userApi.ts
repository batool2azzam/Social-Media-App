import api from "./apiConfig";
import { removeAuthToken } from '../utils/auth';

export const register = async (userData: FormData) => {
    try {
        const response = await api.post(`/register`, userData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error registering user:", error);
        throw error.response.data;
    }
};

export const login = async (username: string, password: string) => {
    try {
        const response = await api.post(`/login`, { username, password });

        localStorage.setItem('user', JSON.stringify(response.data));

        return response.data;
    } catch (error: any) {
        console.error("Error logging in:", error);
        throw error.response.data;
    }
};

export const logout = () => {
    removeAuthToken();
};

