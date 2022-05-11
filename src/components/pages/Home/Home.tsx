import React, { FC } from 'react';
import Info from 'src/components/ui/Info/Info';
import Title from 'src/components/ui/Title/Title';
import { Icon } from 'src/store/models/Icon';

import cppIcon from '../../../assets/cpp.png';
import csIcon from '../../../assets/cs.png';
import htmlIcon from '../../../assets/html.png';
import javaIcon from '../../../assets/java.png';
import jsIcon from '../../../assets/js.png';
import phpIcon from '../../../assets/php.png';
import pyIcon from '../../../assets/py.png';
import tsIcon from '../../../assets/ts.png';
import classes from './Home.module.scss';

const Home: FC = () => {
  const icons: Icon[] = [
    { src: cppIcon, name: 'C++' },
    { src: csIcon, name: 'C#' },
    { src: htmlIcon, name: 'HTML' },
    { src: javaIcon, name: 'Java' },
    { src: jsIcon, name: 'JS' },
    { src: phpIcon, name: 'PHP' },
    { src: pyIcon, name: 'Python' },
    { src: tsIcon, name: ':(' },
  ];

  return (
    <div className={classes.Container} id="cont">
      <div className={classes.Title}>
        <Title title="Denis Krstic" fColor="white" icons={icons} />
      </div>
      <div className={classes.Info}>
        <Info />
      </div>
    </div>
  );
};

export default Home;
