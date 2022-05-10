import React, { FC } from 'react';

import loginImg from '../../../assets/login.png';
import LoginForm from './LoginForm/LoginForm';
import classes from './LoginForm/LoginForm.module.scss';

const Login: FC = () => {
  return (
    <div className={classes.Container}>
      <LoginForm />
      <img src={loginImg} alt="login_image" />
    </div>
  );
};

export default Login;
