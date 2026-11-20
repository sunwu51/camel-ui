import React from 'react';
import { useTextField } from '@react-aria/textfield';
import { useId } from 'react-aria';
import { cn } from '../cn';
import { InputProps } from '../../types';
import './Input.css';

function EyeIcon({ off }: { off: boolean }) {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {off ? (
                <path d="M3 3L21 21M10.6 10.7A3 3 0 0 0 13.3 13.4M9.9 5.1A10.9 10.9 0 0 1 12 4.9C17 4.9 21 12 21 12A20.6 20.6 0 0 1 17.4 16.6M14.1 14.3A3 3 0 0 1 9.7 9.9M6.5 7.5A20.3 20.3 0 0 0 3 12S7 19.1 12 19.1C13.3 19.1 14.5 18.8 15.6 18.3" />
            ) : (
                <>
                    <path d="M2.5 12S6.5 5 12 5s9.5 7 9.5 7-4 7-9.5 7S2.5 12 2.5 12Z" />
                    <circle cx="12" cy="12" r="3" />
                </>
            )}
        </svg>
    )
}

function Input(props: InputProps) {
    const { label } = props;
    const ref = React.useRef(null);
    const inputId = useId();
    const [revealed, setRevealed] = React.useState(false);
    const {
        labelProps,
        inputProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors
    } = useTextField(props, ref);
    const dir = props.direction??'column';
    // type="password" 时自动带"显示/隐藏"小眼睛, 可用 passwordToggle={false} 关闭
    const hasToggle = props.type === 'password' && props.passwordToggle !== false;
    const inputEl = (
        <input
            {...inputProps}
            type={hasToggle && revealed ? 'text' : inputProps.type}
            ref={ref}
            className={cn('flex-1', props.inputClassName)}
            id={inputId}
        />
    );
    return (
        <div className={cn("input-container", dir === 'row' && 'input-row', props.size === 'sm' && 'input-sm', props.className)} style={{ flexDirection: dir, ...props.style }}>
            { label &&
                <label  {...labelProps} className={props.labelClassName} htmlFor={inputId}>
                    {label}
                </label>
            }
            {hasToggle ? (
                <div className="input-field">
                    {inputEl}
                    <button
                        type="button"
                        className="input-toggle"
                        disabled={props.isDisabled}
                        onClick={() => setRevealed(v => !v)}
                        aria-label={revealed ? (props.hidePasswordLabel ?? 'Hide password') : (props.showPasswordLabel ?? 'Show password')}
                        title={revealed ? (props.hidePasswordLabel ?? 'Hide password') : (props.showPasswordLabel ?? 'Show password')}
                    >
                        <EyeIcon off={revealed} />
                    </button>
                </div>
            ) : inputEl}
            {props.description && (
                <div {...descriptionProps} className="input-description">
                    {props.description}
                </div>
            )}
            {(isInvalid || props.errorMessage) && (
                <div {...errorMessageProps} className="input-error">
                    {validationErrors.join(' ')} {props.errorMessage instanceof Function ? "" : props.errorMessage}
                </div>
            )}
        </div>
    );
}

export default Input;
