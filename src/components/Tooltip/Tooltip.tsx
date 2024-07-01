import React from 'react';
import { useTooltip, useTooltipTrigger } from "@react-aria/tooltip";
import { mergeProps } from "@react-aria/utils";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import './Tooltip.css'
import { TooltipProps, TriggerProps } from '../../types';



function Tooltip(props: TooltipProps) {
    const { state } = props;
    const { tooltipProps } = useTooltip(props, state);

    return (
        <div
            {...mergeProps(props, tooltipProps)}
            className='tooltiptext'
        >   
            <div>
                {props.children}
            </div>
        </div>
    );
}

function TooltipTrigger(props: TriggerProps) {
    const state = useTooltipTriggerState({delay: 100, ...props});
    const ref = React.useRef(null);
    const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);
    return (
        <div className='tooltip-container'>
            <button
                {...triggerProps}
                ref={ref}
            >
                {props.children}
            </button>
            {state.isOpen && (
                <Tooltip
                    {...mergeProps(tooltipProps)}
                    state={state}
                >
                    {props.overlay}
                </Tooltip>
            )}
        </div>
    );
}

export default TooltipTrigger;