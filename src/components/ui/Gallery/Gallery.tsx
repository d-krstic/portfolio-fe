import React, { FC } from 'react';
import { useAppDispatch } from 'src/store/app/hooks';
import { addModal, removeModal } from 'src/store/features/globalSlice';
import { ModalType } from 'src/store/models/Modal';

import classes from './Gallery.module.scss';

export interface GalleryProps {
  images: string[];
  title: string;
}

const Gallery: FC<GalleryProps> = ({ images, title }) => {
  const dispatch = useAppDispatch();

  //opens image when clicked
  const handleClick = (param: string) => {
    dispatch(
      addModal({
        title: 'nekaj',
        type: ModalType.IMAGE,
        primaryAction: () => {
          dispatch(removeModal());
        },
        data: param,
      })
    );
  };

  return (
    <div className={classes.Container}>
      <p>{title}</p>
      {images?.map((image, i) => (
        <img
          src={image}
          key={i}
          alt="should_be_a_picture"
          onClick={() => handleClick(image)}
        />
      ))}
    </div>
  );
};

export default Gallery;
