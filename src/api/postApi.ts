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

export const addPost = async (title: string, body: string, image: File) => {
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("image", image);

        const response = await api.post("/posts", formData);
        return response.data;
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};
