import classNames from 'classnames';
import React, { FC } from 'react';

import classes from './ProgressIndicator.module.scss';

export interface CommonProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

type TruncateProps =
  | { type: 'indeterminate'; now?: never; size?: number }
  | { type: 'determinate'; size?: never; now: number };

type ProgressIndicatorProps = CommonProps & TruncateProps;

const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  type = 'indeterminate',
  now,
  size,
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={classNames(classes.Wrapper, className)}>
      {title && <div className={classes.Title}>{title}</div>}
      {subtitle && <div className={classes.Subtitle}>{subtitle}</div>}
      {type === 'indeterminate' ? (
        <div
          className={classes.Indeterminate}
          {...(size && {
            style: { width: size, height: size, borderRadius: size },
          })}
        />
      ) : (
        <div className={classes.Determinate}>
          <div style={{ width: `${now}%` }} />
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;
