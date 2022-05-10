import React, { FC, useEffect, useRef } from 'react';

import classes from './ScrollWrapper.module.scss';

export interface ScrollWrapperProps {
  height: string;
}

const ScrollWrapper: FC<ScrollWrapperProps> = ({ children, height }) => {
  const divRef = useRef<HTMLDivElement>(null);

  //generates random id long 10 characters
  const randomId = () => {
    const alphabet = 'asdfghjklyxcvbnm';
    let randId = '';
    for (let i = 0; i < 10; i++) {
      randId += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return randId;
  };

  //componentDidUpdate - updates container height when prop is received
  useEffect(() => {
    if (divRef?.current?.style) {
      divRef.current.style.height = height;
    }
  }, [height]);

  //clones child (<Paragraph />) and adds id as a prop to it
  const paragraphWithId = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { id: `${randomId()}` });
    }
  });

  return (
    <div className={classes.Container} ref={divRef}>
      {paragraphWithId}
    </div>
  );
};

export default ScrollWrapper;
