import React, { FC, useRef } from 'react';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router';
import { routes } from 'src/routes';
import { WorkItem as wItem } from 'src/store/models/WorkItem';

import classes from './WorkItem.module.scss';

export interface WorkItemProps {
  item: wItem;
}

const WorkItem: FC<WorkItemProps> = ({ item }) => {
  const descRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    ReactGA.event({
      category: 'CV events',
      action: 'showed interest in work',
      label: `interest in work: ${item.id}`,
    });

    navigate(`${routes.WORK}/${item.id}`);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Item} onClick={handleClick}>
        <div className={classes.OpacityFilter} ref={opacityRef}>
          <img src={item.src} alt="work_item" className={classes.Image} />
          <div className={classes.Description} ref={descRef}>
            <span>{item.name}</span>
            <br />
            <span className={classes.DetailedDesc}>{item.shortDesc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
