import React from 'react';
import { AriaTextFieldProps, useTextField } from '@react-aria/textfield';
import BaseProps from '../BaseProps';
import './Input.css';

interface InputProps extends BaseProps, AriaTextFieldProps {
    labelClassName?: string,
    inputClassName?: string,
    direction?: 'row' | 'column',
}


function Input(props: InputProps) {
    const { label } = props;
    const ref = React.useRef(null);
    const {
        labelProps,
        inputProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors
    } = useTextField(props, ref);
    const align = props.direction === 'column' ? 'end' : 'center';

    return (
        <div className={"input-container " + (props.className??"")} style={{ flexDirection: props.direction, ...props.style }}>
            <label {...labelProps} className={props.labelClassName}
                style={props.direction === 'column' ?
                    { alignContent: align, textAlign: 'start' } :
                    { alignContent: align, textAlign: 'end' }
                }
            >
                {label}
            </label>
            <input {...inputProps} ref={ref} className={props.inputClassName} />
            {props.description && (
                <div {...descriptionProps} style={{ fontSize: '0.75rem' }}>
                    {props.description}
                </div>
            )}
            {isInvalid && (
                <div {...errorMessageProps} style={{ color: 'red', fontSize: '0.75rem', alignContent: align }}>
                    {validationErrors.join(' ')}
                </div>
            )}
        </div>
    );
}

export default Input;