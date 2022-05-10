import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { put } from 'redux-saga/effects';
import instance from 'src/axios';

import {
  getBlog,
  getBlogs,
  setBlog,
  setBlogs,
  submitBlog,
} from '../actions/blogActions';
import { setGlobalLoading } from '../features/globalSlice';
import { BlogPost } from '../models/BlogPost';

export function* BlogGetAllSaga(
  action: ReturnType<typeof getBlogs>
): Generator {
  yield put(setGlobalLoading(true));
  try {
    //post req na API
    const response = (yield instance.get(
      'https://dkrstic-portfolio-be.herokuapp.com/blogs'
    )) as AxiosResponse<BlogPost[]>;

    yield put(setBlogs(response.data));
  } catch (e) {
    const error = e as Error;
    toast.error(error.message);
  } finally {
    yield put(setGlobalLoading(false));
  }
}

export function* BlogGetSaga(action: ReturnType<typeof getBlog>): Generator {
  yield put(setGlobalLoading(true));
  try {
    //post req na API
    const response = (yield instance.get(
      `https://dkrstic-portfolio-be.herokuapp.com/blogs/${action.payload.id}`
    )) as AxiosResponse<BlogPost>;

    yield put(setBlog(response.data));
  } catch (e) {
    const error = e as Error;
    toast.error(error.message);
  } finally {
    yield put(setGlobalLoading(false));
  }
}

export function* BlogFormSaga(
  action: ReturnType<typeof submitBlog>
): Generator {
  yield put(setGlobalLoading(true));
  try {
    //post req na API
    (yield instance.post(
      'https://dkrstic-portfolio-be.herokuapp.com/blogs',
      {
        ...action.payload,
      },
      {}
    )) as AxiosResponse<string>;

    //creates notifications
    toast.success('Post was added');
  } catch (e) {
    const error = e as Error;
    toast.error(error.message);
  } finally {
    yield put(setGlobalLoading(false));
  }
}
