import classNames from 'classnames';
import React, { FC, useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';

import Gallery from '../Gallery/Gallery';
import classes from './Paragraph.module.scss';

export interface ParagraphProps {
  images: string[];
  text: string;
  id?: string;
  title?: string;
}

//takes array of images and styles block depending of image count
const Paragraph: FC<ParagraphProps> = ({ images, text, id, title }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const controller = new ScrollMagic.Controller();

  const cssClasses = classNames(
    { [classes.NoImage]: images.length === 0 },
    { [classes.OneImage]: images.length === 1 },
    { [classes.TwoImage]: images.length === 2 },
    { [classes.Scroll]: id }
  );

  //componentDidMount - adds scrollmagic scene to Paragraphs with id prop
  useEffect(() => {
    if (!id) return;
    new ScrollMagic.Scene({
      triggerElement: `#${id}`,
      duration: divRef.current.offsetHeight,
    })
      .on('enter', () => {
        divRef.current.classList.add(classes.Show);
      })
      .addTo(controller);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    //0 images (title and paragraph text)
    images.length === 0 ? (
      <div className={cssClasses} id={id} ref={divRef}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    ) : //1 image (image on the left and text next to it)
    images.length === 1 ? (
      <div className={cssClasses} id={id} ref={divRef}>
        <img src={images[0]} alt="should_be_a_picture" />
        <p>{text}</p>
      </div>
    ) : //2 images (text on left and both images on left side to side)
    images.length === 2 ? (
      <div className={cssClasses} id={id} ref={divRef}>
        <p>{text}</p>
        <img
          className={classes.FirstImg}
          src={images[0]}
          alt="should_be_a_picture"
        />
        <img
          className={classes.SecondImg}
          src={images[1]}
          alt="should_be_a_picture"
        />
      </div>
    ) : (
      //3 or more images (return galery)
      <div className={cssClasses} id={id} ref={divRef}>
        <Gallery images={images} title={text} />
      </div>
    )
  );
};

export default Paragraph;
