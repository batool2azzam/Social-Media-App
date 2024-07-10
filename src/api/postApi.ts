import api from "./apiConfig";

export const fetchPosts = async (currentPage: number = 1) => {
    try {
        const response = await api.get(`/posts?page=${currentPage}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const fetchPostWithComments = async (postId: number) => {
    try {
        const response = await api.get(`/posts/${postId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching post with comments:", error);
        throw error;
    }
};

export const addComment = async (postId: number, commentBody: string) => {
    try {
        const response = await api.post(`/posts/${postId}/comments`, { body: commentBody });
        return response.data.data;
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error;
    }
};

export const fetchUserPosts = async (userId: number) => {
    try {
        const response = await api.get(`/users/${userId}/posts`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user posts:", error);
        throw error;
    }
};

export const addPost = async (title: string, body: string, image: File) => {
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("image", image);

        const response = await api.post("/posts", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};

export const deletePost = async (postId: number, token: string) => {
    try {
        const response = await api.delete(`/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};


export const editPost = async (postId: number, body: string, token: string) => {
    try {
        const response = await api.put(
            `/posts/${postId}`,
            { body },
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data.data;
    } catch (error) {
        console.error("Error editing post:", error);
        throw error;
    }
};