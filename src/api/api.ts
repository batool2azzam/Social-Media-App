import api from "./apiConfig";

export const fetchPosts = async (currentPage: number) => {
    try {
        const response = await api.get(`/posts?page=${currentPage}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const addPostAPI = async (postData: FormData) => {
    try {
        const response = await api.post(`/posts`, postData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error adding post:", error);
        throw error.response.data;
    }
};


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
export const getCurrentUser = () => {
    try {
        const storageUser = localStorage.getItem("user");
        if (storageUser !== null) {
            return JSON.parse(storageUser);
        }
        return null;
    } catch (error) {
        console.error("Error fetching current user:", error);
        throw error;
    }
};


export const login = async (username: string, password: string) => {
    try {
        const response = await api.post(`/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error: any) {
        console.error("Error logging in:", error);
        throw error.response.data;
    }
};
