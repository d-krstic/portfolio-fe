import { takeEvery, takeLatest } from 'redux-saga/effects';

import { login } from '../actions/authActions';
import { getBlog, getBlogs, submitBlog } from '../actions/blogActions';
import { submitForm } from '../actions/contactActions';
import { AuthLoginSaga } from './authSaga';
import { BlogFormSaga, BlogGetAllSaga, BlogGetSaga } from './blogSaga';
import { ContactFormSaga } from './contactSaga';

export function* watchAuth(): Generator {
  yield takeLatest(login.type, AuthLoginSaga);
}

export function* watchContact(): Generator {
  yield takeLatest(submitForm.type, ContactFormSaga);
}

export function* watchBlogs(): Generator {
  yield takeEvery(getBlogs.type, BlogGetAllSaga);
  yield takeLatest(getBlog.type, BlogGetSaga);
  yield takeLatest(submitBlog.type, BlogFormSaga);
}
