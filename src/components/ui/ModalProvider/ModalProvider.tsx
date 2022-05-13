import classNames from 'classnames';
import disableScroll from 'disable-scroll';
import React, { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { removeModal } from 'src/store/features/globalSlice';
import { ModalType } from 'src/store/models/Modal';
import { useLoadingSelector } from 'src/utils/useLoadingSelector';
import useMountTransition from 'src/utils/useMountTransition';

import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import ImageModal from '../ImageModal/ImageModal';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';
import classes from './ModalProvider.module.scss';

interface ModalProviderProps {
  children: ReactNode;
  className?: string;
  transitionDuration?: number;
}

const ModalProvider: FC<ModalProviderProps> = ({
  children,
  transitionDuration = 300,
  className,
}) => {
  const dispatch = useAppDispatch();

  const modal = useAppSelector((state) => state.global.modal);
  const open = !!modal;

  const shouldRender = useMountTransition(open, transitionDuration);

  const loading = useLoadingSelector({
    actionType: modal?.loadingAction,
  });

  const showModalType = () => {
    switch (modal?.type) {
      case ModalType.SUCCESS:
        return <>Success Modal</>;
      case ModalType.IMAGE:
        return <ImageModal modal={modal} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (open) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [open]);

  return (
    <>
      {children}
      {(shouldRender || open) &&
        createPortal(
          <div
            style={{ transitionDuration: `${transitionDuration}ms` }}
            className={classNames({
              [classes.Backdrop]: true,
              [classes.BackdropAnimateIn]: open && shouldRender,
              className,
            })}
            onClick={
              loading || modal?.disableBackdropClose
                ? undefined
                : () => dispatch(removeModal())
            }
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={classNames(classes.ModalContent, {
                [classes.Loading]: loading,
              })}
            >
              {!loading ? (
                showModalType()
              ) : (
                <ProgressIndicator type="indeterminate" />
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ModalProvider;
