import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Snackbar as ISnackbar } from 'src/store/models/Snackbar';
import useMountTransition from 'src/utils/useMountTransition';

import classes from './Snackbar.module.scss';

const snackbarDelay = 5000;

export interface SnackbarProps {
  snackbar: ISnackbar;
  animationFrom?: 'left' | 'right' | 'none';
  className?: string;
  transitionDuration: number;
}

const Snackbar: FC<SnackbarProps> = ({
  snackbar,
  animationFrom = 'none',
  className,
  transitionDuration,
}) => {
  const timer = useRef(null);

  const [open, setOpen] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(snackbarDelay);
  const [pause, setPause] = useState(0);
  const shouldRender = useMountTransition(open, transitionDuration);

  useEffect(() => {
    setPause(Date.now());
    timer.current = window.setTimeout(() => {
      setOpen(false);
    }, timeRemaining);
    return () => {
      window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line
  }, []);

  const getTransition = () => {
    if (open && shouldRender) {
      return { transform: 'translateX(0px)' };
    }
    if (animationFrom === 'left') {
      return { transform: 'translateX(-100%)' };
    } else if (animationFrom === 'right') {
      return { transform: 'translateX(100%)' };
    }
  };

  /* Pause timeout on hover */
  const onMouseEnter = () => {
    window.clearTimeout(timer.current);
    setTimeRemaining((time) => time - (Date.now() - pause));
  };

  const onMouseLeave = () => {
    setPause(Date.now());
    timer.current = window.setTimeout(() => {
      setOpen(false);
    }, timeRemaining);
  };

  return (
    <>
      {(shouldRender || open) && (
        <div
          style={{
            ...getTransition(),
            transitionDuration: `${transitionDuration}ms`,
          }}
          className={classNames(
            classes.Container,
            className,
            classes[snackbar.type],
            {
              [classes.ContainerAnimateIn]: open && shouldRender,
            }
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Snackbar content */}
          {snackbar?.title}
        </div>
      )}
    </>
  );
};

export default Snackbar;
