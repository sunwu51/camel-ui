import React from 'react'
import { useButton } from '@react-aria/button';
import { cn } from '../cn';
import {type ButtonProps} from '../../types'
import './Button.css'

function Button({className = '', style, variant, size, ...props } : ButtonProps) {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <button
      ref={ref}
      className={cn('button', variant && variant !== 'primary' && `button-${variant}`, size === 'sm' && 'button-sm', className)}
      style={{ ...style }}
      title={props.title}
      {...buttonProps}
    >
      {props.children}
    </button >
  );
}

export default Button
