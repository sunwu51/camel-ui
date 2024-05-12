import React from 'react'
import { AriaButtonOptions, useButton } from '@react-aria/button';
import { twMerge } from 'tw-merge';
import BaseProps from '../BaseProps';
import './Button.css'

interface ButtonProps extends BaseProps, AriaButtonOptions<'button'> {
}

function Button({className = '', style, ...props } : ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <button
      ref={ref}
      className={twMerge('button ' + className)}
      style={{ ...style }}
      {...buttonProps}
    >
      {props.children}
    </button >
  );
}

export default Button
