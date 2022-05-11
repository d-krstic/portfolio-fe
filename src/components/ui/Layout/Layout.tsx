import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { routes } from 'src/routes';
import { Theme } from 'src/store/models/Theme';

import Menu from '../Menu/Menu';
import classes from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === Theme.DARK ? true : false
  );
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.body.classList.add('Dark');
      localStorage.setItem('theme', Theme.DARK);
    } else {
      document.body.classList.remove('Dark');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }, [dark]);

  const handleClick = () => {
    setDark(!dark);
  };

  return (
    <div data-theme={dark ? 'dark' : 'light'}>
      <div className={classes.Menu}>
        <Menu onClick={handleClick} />
      </div>
      <div className={classes.Children}>
        {location.pathname === routes.HOME ? (
          <>{children}</>
        ) : (
          <div className={classes.Content}>{children}</div>
        )}
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Layout;
