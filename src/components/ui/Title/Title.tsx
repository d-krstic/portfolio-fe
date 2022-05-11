import React, { FC } from 'react';
import { Icon as IconInterface } from 'src/store/models/Icon';

import Icon from '../Icon/Icon';
import classes from './Title.module.scss';

export interface TitleProps {
  title: string;
  fColor: string;
  icons: IconInterface[];
}

const Title: FC<TitleProps> = ({ title, fColor, icons }) => {
  return (
    <div className={classes.Title}>
      <h1 style={{ color: fColor }}>{title}</h1>
      <div className={classes.Icons}>
        {icons?.map((icon, i) => (
          <Icon src={icon.src} name={icon.name} url={icon.url} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Title;
