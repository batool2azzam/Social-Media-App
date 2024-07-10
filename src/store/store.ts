import { configureStore } from '@reduxjs/toolkit';
import userReducer, { setUser } from './features/user/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Middleware to rehydrate state from localStorage
const rehydrateState = () => {
    const user = localStorage.getItem('user');
    if (user) {
        store.dispatch(setUser(JSON.parse(user).user));
    }
};

rehydrateState();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };