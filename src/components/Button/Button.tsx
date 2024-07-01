import React from 'react'
import { useButton } from '@react-aria/button';
import { cn } from '../cn';
import {type ButtonProps} from '../../types'
import './Button.css'

function Button({className = '', style, ...props } : ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <button
      ref={ref}
      className={cn('button',className)}
      style={{ ...style }}
      {...buttonProps}
    >
      {props.children}
    </button >
  );
}

export default Button
