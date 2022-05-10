import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './MenuCell.module.scss';

export interface MenuCellProps {
  name: string;
  url: string;
}

const MenuCell: FC<MenuCellProps> = ({ name, url }) => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className={classes.Cell} onClick={() => handleClick(url)}>
      <span>{name}</span>
    </div>
  );
};

export default MenuCell;
