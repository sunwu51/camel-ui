import React from 'react';
import { useTextField } from '@react-aria/textfield';
import { useId } from 'react-aria';
import { cn } from '../cn';
import { InputProps } from '../../types';
import './Input.css';

function Input(props: InputProps) {
    const { label } = props;
    const ref = React.useRef(null);
    const inputId = useId();
    const {
        labelProps,
        inputProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors
    } = useTextField(props, ref);
    const dir = props.direction??'column';
    const align = dir === 'column' ? 'end' : 'center';
    return (
        <div className={cn("input-container", props.className)} style={{ flexDirection: dir, ...props.style }}>
            { label &&
                <label  {...labelProps} className={props.labelClassName}
                    style={dir === 'column' ?
                        { alignContent: align, textAlign: 'start' } :
                        { alignContent: align, textAlign: 'end' }
                    }
                    htmlFor={inputId}
                >
                    {label}
                </label>
            }
            <input {...inputProps} ref={ref} className={cn('flex-1', props.inputClassName)} id={inputId}/>
            {props.description && (
                <div {...descriptionProps} style={{ fontSize: '0.75rem' }}>
                    {props.description}
                </div>
            )}
            {(isInvalid || props.errorMessage) && (
                <div {...errorMessageProps} style={{ color: 'red', fontSize: '0.75rem', alignContent: align }}>
                    {validationErrors.join(' ')} {props.errorMessage instanceof Function ? "" : props.errorMessage}
                </div>
            )}
        </div>
    );
}

export default Input;