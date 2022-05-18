import classNames from 'classnames';
import React, { FC } from 'react';
import ReactGA from 'react-ga4';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';

import classes from './Contacts.module.scss';

const Contacts: FC = () => {
  const getClasses = (logo: string) => {
    return classNames(
      classes.Icon,
      { [classes.Twitter]: logo === 'twitter' },
      { [classes.Facebook]: logo === 'facebook' },
      { [classes.Instagram]: logo === 'instagram' }
    );
  };

  const handleClick = (url: string) => {
    ReactGA.event({
      category: 'CV events',
      action: 'opened socials link',
      label: url,
    });

    window.open(url);
  };

  return (
    <div className={classes.Container}>
      <AiFillTwitterSquare
        className={getClasses('twitter')}
        onClick={() => handleClick('https://twitter.com/')}
      />
      <AiFillFacebook
        className={getClasses('facebook')}
        onClick={() => handleClick('https://sl-si.facebook.com/')}
      />
      <AiFillInstagram
        className={getClasses('instagram')}
        onClick={() => handleClick('https://www.instagram.com/')}
      />
    </div>
  );
};

export default Contacts;
