import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { routes } from 'src/routes';

import Menu from '../Menu/Menu';
import classes from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.body.classList.add('Dark');
    } else {
      document.body.classList.remove('Dark');
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
