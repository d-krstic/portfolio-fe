import Button from '@mui/material/Button';
import React, { FC } from 'react';
import ReactGA from 'react-ga4';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router';
import { routes } from 'src/routes';
import { WorkItem } from 'src/store/models/WorkItem';

import rawData from '../../../assets/workItems.json';
import classes from './WorkDetailed.module.scss';

const WorkDetailed: FC = () => {
  const navigate = useNavigate();
  const data = rawData as WorkItem[];
  const { paramId } = useParams(); //gets id from url
  const id: number = +paramId; //string to number

  const handleClick = () => {
    navigate(routes.WORK);
  };

  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  return (
    <>
      <div className={classes.Content}>
        <div className={classes.Button}>
          <Button
            variant="outlined"
            onClick={handleClick}
            className={classes.Module}
          >
            <AiOutlineLeft className={classes.Icon} />
            Back
          </Button>
        </div>
        <div>
          <div className={classes.Image}>
            <img src={`../${data[id].src}`} alt="picture_of_work_item" />
          </div>
          <div className={classes.Text}>
            <h1>{data.at(id).name}</h1>
            <p>{data.at(id).longDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetailed;
