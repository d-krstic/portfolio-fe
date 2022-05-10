import React, { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '../../../routes';
import LoadingProvider from '../../ui/LoadingProvider/LoadingProvider';

const Login = React.lazy(() => import('../Login/Login'));
const PageNotFound = React.lazy(() => import('../PageNotFound/PageNotFound'));

const UnauthenticatedRouter: FC = () => {
  return (
    <Suspense fallback={<LoadingProvider loading={true} />}>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.PAGE_NOT_FOUND} element={<PageNotFound />} />
        <Route path={'*'} element={<Navigate to={routes.LOGIN} />} />
      </Routes>
    </Suspense>
  );
};

export default UnauthenticatedRouter;
