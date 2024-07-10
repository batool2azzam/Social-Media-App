import axios from "axios";

const API_URL = "https://tarmeezacademy.com/api/v1";

export const fetchPosts = async (limit: number) => {
    try {
        const response = await axios.get(`${API_URL}/posts`, {
            params: { limit },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const register = async (userData: FormData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData, {
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
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error: any) {
        console.error("Error logging in:", error);
        throw error.response.data;
    }
};
