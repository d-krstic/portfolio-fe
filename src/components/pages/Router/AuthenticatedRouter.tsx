import React, { FC, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '../../../routes';
import LoadingProvider from '../../ui/LoadingProvider/LoadingProvider';
import Blog from '../Blog/Blog';
import BlogDetailed from '../BlogDetailed/BlogDetailed';
import BlogForm from '../BlogForm/BlogForm';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Login from '../Login/Login';
import Work from '../Work/Work';
import WorkDetailed from '../WorkDetailed/WorkDetailed';

const Home = React.lazy(() => import('../Home/Home'));
const About = React.lazy(() => import('../About/About'));

const AuthenticatedRouter: FC = () => {
  return (
    <Suspense fallback={<LoadingProvider loading={true} />}>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.EDUCATION} element={<Education />} />
        <Route path={routes.WORK} element={<Work />} />
        <Route path={routes.BLOG} element={<Blog />} />
        <Route path={routes.CONTACT} element={<Contact />} />
        <Route path={`${routes.WORK}/:paramId`} element={<WorkDetailed />} />
        <Route path={`${routes.BLOG}/:paramId`} element={<BlogDetailed />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.BLOG_SUBMIT} element={<BlogForm />} />
        <Route path={'*'} element={<Navigate to={routes.HOME} />} />
      </Routes>
    </Suspense>
  );
};

export default AuthenticatedRouter;
