import React, { FC, useRef } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Modal } from 'src/store/models/Modal';

import classes from './ImageModal.module.scss';

export interface ImageModalProps {
  modal?: Modal;
}

const ImageModal: FC<ImageModalProps> = ({ modal }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div className={classes.Container}>
      <img ref={imgRef} src={modal.data as string} alt="should_be_a_picture" />
      <button onClick={modal?.primaryAction}>
        <AiOutlineCloseSquare className={classes.Icon} />
      </button>
    </div>
  );
};

export default ImageModal;
