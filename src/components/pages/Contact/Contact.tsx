import React, { FC, useRef } from 'react';
import Contacts from 'src/components/ui/Contacts/Contacts';
import Form from 'src/components/ui/Form/Form';
import Paragraph from 'src/components/ui/Paragraph/Paragraph';

import classes from './Contact.module.scss';

const Contact: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleCallback = () => {
    divRef.current.classList.add(classes.AnimationBounce);
  };

  const handleEnd = () => {
    //removes animation class when animation is over
    divRef.current.classList.remove(classes.AnimationBounce);
  };

  return (
    <div className={classes.Grid}>
      <div className={classes.Left}>
        <Paragraph
          images={[]}
          title="Contact me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className={classes.Socials}>
          <Contacts />
        </div>
      </div>
      <div className={classes.Right} ref={divRef} onAnimationEnd={handleEnd}>
        <div className={classes.Form}>
          <Form onClick={handleCallback} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
