import React, { FC } from 'react';

import Router from './components/pages/Router/Router';
import Layout from './components/ui/Layout/Layout';
import LoadingProvider from './components/ui/LoadingProvider/LoadingProvider';
import ModalProvider from './components/ui/ModalProvider/ModalProvider';
import SnackbarProvider from './components/ui/SnackbarProvider/SnackbarProvider';
import useGaTracker from './utils/googleAnalytics';

const App: FC = () => {
  useGaTracker();

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
