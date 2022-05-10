import axios from 'axios';

import { logout } from './store/actions/authActions';
import { store } from './store/app/store';

const API_VERSION = process.env.REACT_APP_API_VERSION || 'v1/';

// Check out config if you need to add new cases - https://github.com/axios/axios

const instance = axios.create({
  baseURL: process.env.REACT_APP_BE_BASE_URL + API_VERSION,
});

//intercepts all requests and add apiKey to header
instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('apiKey');
  return config;
});

// Error handling interceptor - replace with according action (right now logged in console)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (400 === error.response.status) {
      console.log(error);
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

// Authentication failed interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      store.dispatch(logout());
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
