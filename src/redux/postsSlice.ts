import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostData } from "../types/types";
import { RootState } from "./reducers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPostAPI } from "../api/api";

interface PostsState {
  posts: PostData[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (postData: FormData, thunkAPI) => {
    try {
      const response = await addPostAPI(postData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<PostData[]>) {
      state.posts = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "Failed to add post.";
      });
  },
});


export const { setPosts, setLoading, setError } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectLoading = (state: RootState) => state.posts.loading;
export const selectError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
