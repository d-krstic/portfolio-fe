import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { login } from 'src/store/actions/authActions';

import { useAppDispatch } from '../../../../store/app/hooks';
import classes from './LoginForm.module.scss';

interface LoginFormData {
  email: string;
  password: string;
}
const defaultValues: LoginFormData = {
  email: '',
  password: '',
};

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm<LoginFormData>({
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit: SubmitHandler<LoginFormData> = (formData) => {
    dispatch(login(formData));
  };

  return (
      <form className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={classes.Input}
          placeholder='E-mail'
          type={'email'}
          id={'email'}
          {...register('email', { required: true })}
        />
        <br/>
        <input
          className={classes.Input}
          placeholder='Password'
          type={'password'}
          id={'password'}
          {...register('password', { required: true })}
        />
        <br/>
        <button className={classes.Button} type={'submit'}>{t('login:submit_button')}</button>
      </form>
  );
};

export default LoginForm;
