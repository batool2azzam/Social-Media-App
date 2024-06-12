const TOKEN_KEY = 'auth_token';

export const setAuthToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
    const token = getAuthToken();
    return !!token;
};

export const getLocalStorageUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};
