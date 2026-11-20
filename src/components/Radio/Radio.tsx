import { useRadio, useRadioGroup } from '@react-aria/radio';
import React from 'react';
import { useRadioGroupState, RadioGroupState } from '@react-stately/radio';
import './Radio.css'
import { cn } from '../cn';
import { RadioGroupProps, RadioProps } from '../../types';

type RadioVariant = NonNullable<RadioGroupProps['variant']>;
const RadioContext = React.createContext<RadioGroupState | null>(null);
const RadioVariantContext = React.createContext<RadioVariant>('default');

function RadioGroup(props: RadioGroupProps) {
    const { children, label, description, errorMessage, variant = 'default', size = 'md' } = props;
    const segmented = variant === 'segmented';
    const state = useRadioGroupState(props);
    const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
        useRadioGroup({ orientation: segmented ? 'horizontal' : undefined, ...props }, state);

    const items = (
        <RadioContext.Provider value={state}>
            <RadioVariantContext.Provider value={variant}>
                {children}
            </RadioVariantContext.Provider>
        </RadioContext.Provider>
    );

    return (
        <div {...radioGroupProps} className={cn('radio-group-container', segmented && 'radio-group-segmented', props.className)} style={{...props.style}}>
            {label && <span {...labelProps} className="radio-group-label">{label}</span>}
            {segmented
                ? <div className={cn('radio-segmented', size === 'sm' && 'radio-segmented-sm')}>{items}</div>
                : items}
            {description && (
                <div {...descriptionProps} className="radio-description">{description}</div>
            )}
            {errorMessage &&
                (
                    <div {...errorMessageProps} className="radio-error">
                        {errorMessage as React.ReactNode}
                    </div>
                )}
        </div>
    );
}

function Radio(props: RadioProps) {
    const { children } = props;
    const state = React.useContext(RadioContext)!;
    const variant = React.useContext(RadioVariantContext);
    const ref = React.useRef(null);
    const { inputProps, isSelected, isDisabled } = useRadio(props, state, ref);

    if (variant === 'segmented') {
        return (
            <label
                className={cn('radio-segment', isSelected && 'is-selected', isDisabled && 'is-disabled', props.className)}
                style={props.style}
            >
                <input {...inputProps} ref={ref} type='radio'/>
                {children}
            </label>
        );
    }

    return (
        <label className={cn('radio-container', props.className)} style={{
            opacity: props.isDisabled ? 0.5 : 1,
            ...props.style
        }}>
            <input {...inputProps} ref={ref} type='radio'/>
            <span className="checkmark"></span>
            {children}
        </label>
    );
}

export { RadioGroup, Radio };
