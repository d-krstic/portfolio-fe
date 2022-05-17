import classNames from 'classnames';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { useAppSelector } from '../../../store/app/hooks';
import useMountTransition from '../../../utils/useMountTransition';
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
            <motion.div
              className={classes.Shape}
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default LoadingProvider;
