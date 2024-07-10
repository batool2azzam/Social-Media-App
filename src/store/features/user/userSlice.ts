// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/types';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            if (action.payload) {
                localStorage.setItem('user', JSON.stringify({ user: action.payload }));
            } else {
                localStorage.removeItem('user');
            }
        },
        updateUserPostsCount: (state, action: PayloadAction<number>) => {
            if (state.user) {
                state.user.posts_count = action.payload;
                localStorage.setItem('user', JSON.stringify({ user: state.user }));
            }
        },
        updateUserCommentsCount: (state, action: PayloadAction<number>) => {
            if (state.user) {
                state.user.comments_count = action.payload;
                localStorage.setItem('user', JSON.stringify({ user: state.user }));
            }
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { setUser, updateUserPostsCount, updateUserCommentsCount, clearUser } = userSlice.actions;

export default userSlice.reducer;
