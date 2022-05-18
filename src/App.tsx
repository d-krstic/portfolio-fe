import React, { FC, useEffect } from 'react';
import ReactGA from 'react-ga4';

import Router from './components/pages/Router/Router';
import Layout from './components/ui/Layout/Layout';
import LoadingProvider from './components/ui/LoadingProvider/LoadingProvider';
import ModalProvider from './components/ui/ModalProvider/ModalProvider';
import SnackbarProvider from './components/ui/SnackbarProvider/SnackbarProvider';
import useGaTracker from './utils/googleAnalytics';

const App: FC = () => {
  useGaTracker();

  ReactGA.initialize('G-J9W9CV59NT');

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [window.location.pathname, window.location.search]);

  return (
    <LoadingProvider>
      <ModalProvider>
        <SnackbarProvider>
          <Layout>
            <Router />
          </Layout>
        </SnackbarProvider>
      </ModalProvider>
    </LoadingProvider>
  );
};

export default App;
