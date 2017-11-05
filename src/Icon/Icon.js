// @flow

import React from 'react';
import type { Node } from 'react';
import type { ComponentWithDefaultProps } from 'react-flow-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalizeFirstLetter } from '../utils/helpers';

export const styles = (theme: Object) => ({
  root: {
    userSelect: 'none',
  },
  colorAccent: {
    color: theme.palette.secondary.A200,
  },
  colorAction: {
    color: theme.palette.action.active,
  },
  colorContrast: {
    color: theme.palette.getContrastText(theme.palette.primary[500]),
  },
  colorDisabled: {
    color: theme.palette.action.disabled,
  },
  colorError: {
    color: theme.palette.error[500],
  },
  colorPrimary: {
    color: theme.palette.primary[500],
  },
});

export type Color = 'inherit' | 'accent' | 'action' | 'contrast' | 'disabled' | 'error' | 'primary';

type ProvidedProps = {
  classes: Object,
  theme?: Object,
};

type DefaultProps = {
  color: Color,
};

export type Props = {
  /**
   * Other base element props.
   */
  [otherProp: string]: any,
  /**
   * The name of the icon font ligature.
   */
  children?: Node,
  /**
   * @ignore
   */
  className?: string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: Color,
};

function Icon(props: ProvidedProps & Props) {
  const { children, classes, className: classNameProp, color, ...other } = props;

  const className = classNames(
    'material-icons',
    classes.root,
    {
      [classes[`color${capitalizeFirstLetter(color)}`]]: color !== 'inherit',
    },
    classNameProp,
  );

  return (
    <span className={className} aria-hidden="true" {...other}>
      {children}
    </span>
  );
}

Icon.defaultProps = {
  color: 'inherit',
};

Icon.muiName = 'Icon';

export default withStyles(styles, { name: 'MuiIcon' })(
  (Icon: ComponentWithDefaultProps<DefaultProps, Props & ProvidedProps>),
);
