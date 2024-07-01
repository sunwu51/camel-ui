import React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import './Checkbox.css'
import { CheckboxProps } from '../../types';


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