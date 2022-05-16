import classNames from 'classnames';
import React, { FC, useEffect, useRef } from 'react';

import classes from './Icon.module.scss';

export interface IconProps {
  src: string;
  name: string;
  url?: string;
}

const Icon: FC<IconProps> = ({ src, name, url }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const cssClasses = classNames(classes.Image, { [classes.Clickable]: url });

  const handleMouseOff = () => {
    if (tooltipRef?.current?.style && imgRef.current) {
      tooltipRef.current.classList.remove(classes.Show);
      tooltipRef.current.classList.add(classes.Hide);
    }
  };

  const handleMouseOn = () => {
    if (tooltipRef?.current?.style && imgRef.current) {
      tooltipRef.current.style.left = `${
        imgRef.current.getBoundingClientRect().x
      }px`;
      tooltipRef.current.style.top = `${
        imgRef.current.getBoundingClientRect().y + 60
      }px`;
      tooltipRef.current.classList.remove(classes.Hide);
      tooltipRef.current.classList.add(classes.Show);
    }
  };

  const handleClick = () => {
    //opens url if url got passed in props
    url && window.open(url);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const onScroll = () => {
    handleMouseOff();
  };

  return (
    <div className={classes.Container}>
      <img
        src={src}
        ref={imgRef}
        alt="icon"
        className={cssClasses}
        onMouseLeave={handleMouseOff}
        onMouseEnter={handleMouseOn}
        onClick={handleClick}
      />

      <div className={classes.Tooltip} ref={tooltipRef}>
        {name}
      </div>
    </div>
  );
};

export default Icon;
