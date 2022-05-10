import { createSlice } from '@reduxjs/toolkit';

import { setBlog, setBlogs } from '../actions/blogActions';
import { BlogPost } from '../models/BlogPost';

export interface BlogState {
  blogs: BlogPost[];
  currentBlog: BlogPost;
}

const initialState: BlogState = {
  blogs: [],
  currentBlog: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setBlogs, (state, action) => {
        state.blogs = action.payload;
      })
      .addCase(setBlog, (state, action) => {
        state.currentBlog = action.payload;
      });
  },
});

export default blogSlice.reducer;
