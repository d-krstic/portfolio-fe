import './i18n/config';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { history, store } from './store/app/store';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
