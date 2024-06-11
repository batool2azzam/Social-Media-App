import axios from "axios";

const API_URL = "https://tarmeezacademy.com/api/v1";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            console.error("Unauthorized access - possibly invalid token");
            localStorage.removeItem("auth_token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;
