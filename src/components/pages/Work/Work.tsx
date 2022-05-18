import React, { FC } from 'react';
import ReactGA from 'react-ga4';
import WorkItem from 'src/components/ui/WorkItem/WorkItem';

import data from '../../../assets/workItems.json';
import classes from './Work.module.scss';

const Work: FC = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  return (
    <>
      <h1>Work</h1>
      <div className={classes.Content}>
        {data?.map((item, i) => (
          <WorkItem item={item} key={i} />
        ))}
      </div>
    </>
  );
};

export default Work;
