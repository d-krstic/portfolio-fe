import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { push } from 'redux-first-history';
import { put } from 'redux-saga/effects';

import instance from '../../axios';
import { routes } from '../../routes';
import { login, loginSuccess } from '../actions/authActions';
import { store } from '../app/store';
import { setGlobalLoading } from '../features/globalSlice';

export function* AuthLoginSaga(action: ReturnType<typeof login>): Generator {
  yield put(setGlobalLoading(true));
  try {
    const response = (yield instance.post(
      'https://dkrstic-portfolio-be.herokuapp.com/login',
      {
        ...action.payload,
      },
      {}
    )) as AxiosResponse<string>;

    //saves apiKey to local storage and state
    localStorage.setItem('apiKey', response.data);
    store.dispatch(loginSuccess({ token: response.data }));

    yield put(push(routes.HOME));
  } catch (e) {
    const error = e as Error;
    toast.error(error.message);
  } finally {
    yield put(setGlobalLoading(false));
  }
}
