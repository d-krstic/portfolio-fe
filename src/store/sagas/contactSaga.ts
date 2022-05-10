import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { put } from 'redux-saga/effects';
import instance from 'src/axios';

import { submitForm } from '../actions/contactActions';
import { setGlobalLoading } from '../features/globalSlice';

export function* ContactFormSaga(
  action: ReturnType<typeof submitForm>
): Generator {
  yield put(setGlobalLoading(true));
  try {
    //post req na API
    (yield instance.post(
      'https://dkrstic-portfolio-be.herokuapp.com/contact',
      {
        ...action.payload,
      },
      {}
    )) as AxiosResponse<string>;

    //creates notifications
    toast.success('E-mail was sent');
  } catch (e) {
    const error = e as Error;
    toast.error(error.message);
  } finally {
    yield put(setGlobalLoading(false));
  }
}
