import classNames from 'classnames';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { useAppSelector } from '../../../store/app/hooks';
import useMountTransition from '../../../utils/useMountTransition';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import classes from './LoadingProvider.module.scss';

interface LoadingProviderProps {
  transitionDuration?: number;
  loading?: boolean;
}

const LoadingProvider: FC<LoadingProviderProps> = ({
  transitionDuration = 300,
  loading: forceLoading,
  children,
}) => {
  const loading = useAppSelector((state) => state.global.globalLoading);

  const shouldRender = useMountTransition(
    forceLoading || loading,
    transitionDuration
  );

  return (
    <>
      {children}
      {(shouldRender || loading) &&
        createPortal(
          <div
            style={{ transitionDuration: `${transitionDuration}ms` }}
            className={classNames({
              [classes.Backdrop]: true,
              [classes.BackdropAnimateIn]: loading && shouldRender,
            })}
          >
            <ProgressIndicator type="indeterminate" />
          </div>,
          document.body
        )}
    </>
  );
};

export default LoadingProvider;
