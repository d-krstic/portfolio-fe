import React, { FC } from 'react';

import pfpPic from '../../../assets/pfp.png';
import Contacts from '../Contacts/Contacts';
import classes from './Info.module.scss';

const Info: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.ImageDiv}>
        <img src={pfpPic} alt="profile pic" />
      </div>
      <div className={classes.Info}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
          consequat odio, quis fermentum lectus. Pellentesque tincidunt sed diam
          ut porttitor. Praesent blandit vulputate nibh non condimentum. Vivamus
          semper imperdiet convallis. Phasellus in massa eu erat tincidunt
          viverra. Cras luctus efficitur leo ut vehicula. Sed ac ornare nunc,
          auctor dapibus ante.
        </p>
      </div>
      <div className={classes.MoreInfo}>
        <p>Achievements:</p>
        <ul>
          <li>something</li>
          <li>something else</li>
          <li>another thing</li>
        </ul>
      </div>
      <div className={classes.Contacts}>
        <Contacts />
      </div>
    </div>
  );
};

export default Info;
