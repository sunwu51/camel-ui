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
            <label className="switch-label" style={{ opacity: props.isDisabled ? 0.5 : 1 }}>
                <input type="checkbox" role="switch" {...inputProps} {...focusProps} ref={ref} />
                <span className={cn('slider', props.round && 'round')}></span>
                {props.children && <span>{props.children}</span>}
            </label>
        </div>
    </>
}

export default Switch;