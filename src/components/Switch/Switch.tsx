import { useRef } from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useToggleState, ToggleStateOptions } from '@react-stately/toggle';
import BaseProps from '../BaseProps';
import './Switch.css';

interface SwitchProps extends BaseProps, ToggleStateOptions {
    round?: boolean
}

function Switch(props: SwitchProps) {
    const state = useToggleState(props);
    const ref = useRef(null);
    const { inputProps } = useCheckbox(props, state, ref);
    const { focusProps } = useFocusRing();
    return <>
        <div className={'switch-container ' + props.className??""}>
            <label className="switch-label" style={{
                    opacity: props.isDisabled ? 0.4 : 1,
                    ...props.style
                }}>
                <input type="checkbox"  {...inputProps} {...focusProps} ref={ref} style={{ display: 'none' }} />
                <span className={`slider ${props.round? 'round' :''}`}></span>
                <span style={{marginLeft: '45px'}}>{props.children}</span>
            </label>
        </div>
    </>
}

export default Switch;