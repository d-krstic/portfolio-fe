import Divider from '@mui/material/Divider';
import React, { FC } from 'react';
import Paragraph from 'src/components/ui/Paragraph/Paragraph';

import feriImg1 from '../../../assets/8.png';
import feriImg2 from '../../../assets/9.png';
import pcsImg from '../../../assets/10.png';
import galleryImg1 from '../../../assets/11.png';
import galleryImg2 from '../../../assets/12.png';
import galleryImg3 from '../../../assets/13.png';
import galleryImg4 from '../../../assets/14.png';
import galleryImg5 from '../../../assets/15.png';
import classes from './Education.module.scss';

const Education: FC = () => {
  return (
    <>
      <h1>Education</h1>
      <Paragraph
        images={[feriImg1, feriImg2]}
        text="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus."
      />

      <Divider className={classes.Divider} />

      <Paragraph
        images={[pcsImg]}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus. Pellentesque tincidunt sed diam ut porttitor. Praesent blandit vulputate nibh non condimentum. Vivamus semper imperdiet convallis. Phasellus in massa eu erat tincidunt viverra. Cras luctus efficitur leo ut vehicula. Sed ac ornare nunc, auctor dapibus ante. Maecenas dapibus et enim vel ultrices. Vestibulum quis mattis leo. Cras velit quam, sodales ac condimentum non, eleifend vel magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus. Pellentesque tincidunt sed diam ut porttitor."
      />

      <Divider className={classes.Divider} />

      <Paragraph
        images={[
          galleryImg1,
          galleryImg2,
          galleryImg3,
          galleryImg4,
          galleryImg5,
        ]}
        text="Works"
      />
    </>
  );
};

export default Education;
