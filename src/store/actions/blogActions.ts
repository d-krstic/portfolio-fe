import { createAction } from '@reduxjs/toolkit';

import { BlogPost } from '../models/BlogPost';

export const BLOG_SLICE = 'blog';

export const getBlogs = createAction(`${BLOG_SLICE}/getBlogs`);
export const setBlogs = createAction<BlogPost[]>(`${BLOG_SLICE}/setBlogs`);

export const getBlog = createAction<{ id: string }>(`${BLOG_SLICE}/getBlog`);
export const setBlog = createAction<BlogPost>(`${BLOG_SLICE}/setBlog`);

export const submitBlog = createAction<BlogPost>(`${BLOG_SLICE}/submitForm`);
