import { useRef } from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useToggleState } from '@react-stately/toggle';
import './Switch.css';
import { cn } from '../cn';
import { SwitchProps } from '../../types';



function Switch(props: SwitchProps) {
    const state = useToggleState(props);
    const ref = useRef(null);
    const { inputProps } = useCheckbox(props, state, ref);
    const { focusProps } = useFocusRing();
    return <>
        <div className={cn('switch-container', props.className)} style={{...props.style}}>
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