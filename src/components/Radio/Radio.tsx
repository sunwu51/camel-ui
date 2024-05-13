import { useRadio, useRadioGroup, AriaRadioGroupProps, AriaRadioProps } from '@react-aria/radio';
import React from 'react';
import { useRadioGroupState, RadioGroupState } from '@react-stately/radio';
import BaseProps from '../BaseProps';
import './Radio.css'

interface RadioGroupProps extends BaseProps, AriaRadioGroupProps {
}

interface RadioProps extends BaseProps, AriaRadioProps {
}

const RadioContext = React.createContext<RadioGroupState | null>(null);

function RadioGroup(props: RadioGroupProps) {
    const { children, label, description, errorMessage } = props;
    const state = useRadioGroupState(props);
    const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
        useRadioGroup(props, state);

    return (
        <div {...radioGroupProps} className={'radio-group-container ' + props.className} style={props.style}>
            <span {...labelProps}>{label}</span>
            <RadioContext.Provider value={state}>
                {children}
            </RadioContext.Provider>
            {description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>
            )}
            {errorMessage &&
                (
                    <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
                        {errorMessage as React.ReactNode}
                    </div>
                )}
        </div>
    );
}

function Radio(props: RadioProps) {
    const { children } = props;
    const state = React.useContext(RadioContext)!;
    const ref = React.useRef(null);
    const { inputProps } = useRadio(props, state, ref);
    return (
        <label className={'radio-container ' + props.className} style={props.style}>
            <input {...inputProps} ref={ref} type='radio'/>
            <span className="checkmark"></span>
            {children}
        </label>
    );
}

export { RadioGroup, Radio };