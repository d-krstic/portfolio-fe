import Divider from '@mui/material/Divider';
import React, { FC } from 'react';
import ReactGA from 'react-ga4';
import Paragraph from 'src/components/ui/Paragraph/Paragraph';

import headerImg from '../../../assets/1.jpg';
import showcaseImg1 from '../../../assets/2.jpg';
import showcaseImg2 from '../../../assets/3.jpg';
import galleryImg1 from '../../../assets/4.jpg';
import galleryImg2 from '../../../assets/5.jpg';
import galleryImg3 from '../../../assets/6.jpg';
import galleryImg4 from '../../../assets/7.jpg';
import classes from './About.module.scss';

const About: FC = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  return (
    <>
      <h1 id="title">About me</h1>

      <Paragraph
        images={[headerImg]}
        text="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus. Pellentesque tincidunt sed diam ut porttitor. Praesent blandit vulputate nibh non condimentum. Vivamus semper imperdiet convallis. Phasellus in massa eu erat tincidunt viverra. Cras luctus efficitur leo ut vehicula. Sed ac ornare nunc, auctor dapibus ante. Maecenas dapibus et enim vel ultrices. Vestibulum quis mattis leo. Cras velit quam, sodales ac condimentum non, eleifend vel magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus. Pellentesque tincidunt sed diam ut porttitor. Praesent blandit vulputate nibh non condimentum. Vivamus semper imperdiet convallis. Phasellus in massa eu erat tincidunt viverra. Cras luctus efficitur leo ut vehicula. Sed ac ornare nunc, auctor dapibus ante. Maecenas dapibus et enim vel ultrices. Vestibulum quis mattis leo. Cras velit quam, sodales ac condimentum non, eleifend vel magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus. Pellentesque tincidunt sed diam ut porttitor. Praesent blandit vulputate nibh non condimentum. Vivamus semper imperdiet convallis. Phasellus in massa eu erat tincidunt viverra. Cras luctus efficitur leo ut vehicula. Sed ac ornare nunc, auctor dapibus ante. Maecenas dapibus et enim vel ultrices. Vestibulum quis mattis leo. Cras velit quam, sodales ac condimentum non, eleifend vel magna."
      />

      <Divider className={classes.Divider} />

      <Paragraph
        images={[showcaseImg1, showcaseImg2]}
        text="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac consequat odio, quis fermentum lectus."
      />

      <Divider className={classes.Divider} />

      <Paragraph
        images={[galleryImg1, galleryImg2, galleryImg3, galleryImg4]}
        text="Galerija"
      />
    </>
  );
};

export default About;
