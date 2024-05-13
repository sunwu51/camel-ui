import React from 'react';
import { useCheckbox, AriaCheckboxProps } from '@react-aria/checkbox';
import { useToggleState,ToggleStateOptions } from '@react-stately/toggle';
import BaseProps from '../BaseProps';
import './Checkbox.css'

interface CheckboxProps extends BaseProps, ToggleStateOptions, AriaCheckboxProps {
}

function Checkbox(props: CheckboxProps) {
    const state = useToggleState(props);
    const ref = React.useRef(null);
    const { inputProps } = useCheckbox(props, state, ref);

    return (
        <div className="checkbox-container">
            <label
                style={{
                    opacity: props.isDisabled ? 0.4 : 1,
                    ...props.style
                }}
            >
                <input {...inputProps} type='checkbox' ref={ref} />
                <span className="checkmark"></span>
                {props.children}
            </label>
        </div>
    );
}

export default Checkbox;