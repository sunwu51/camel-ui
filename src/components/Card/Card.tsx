import React from 'react'
import { useId } from 'react-aria'
import './Card.css'
import { cn } from '../cn';
import { CardProps } from '../../types';
import Chevron from '../Chevron';


function Card(props: CardProps) {
    const {
        className, style, children,
        collapsible, defaultExpanded = false, expanded, onExpandedChange,
        expandLabel, collapseLabel, stack = false,
    } = props;
    const regionId = useId();
    const [innerOpen, setInnerOpen] = React.useState(defaultExpanded);
    const isControlled = expanded !== undefined;
    const open = isControlled ? expanded : innerOpen;
    const hasCollapsible = collapsible !== undefined && collapsible !== null && collapsible !== false;

    const toggle = () => {
        const next = !open;
        if (!isControlled) setInnerOpen(next);
        onExpandedChange?.(next);
    };

    const label = open ? collapseLabel : expandLabel;

    return <div className={cn("card-container", hasCollapsible && 'card-expandable', stack && 'card-stack', className)} style={{...style}}>
        {children}
        {hasCollapsible && (
            <>
                <div id={regionId} className="card-collapsible" hidden={!open}>
                    {collapsible}
                </div>
                <button
                    type="button"
                    className="card-expand-toggle"
                    aria-expanded={open}
                    aria-controls={regionId}
                    aria-label={label ? undefined : (open ? 'Collapse' : 'Expand')}
                    onClick={toggle}
                >
                    {label && <span>{label}</span>}
                    <Chevron size={16} />
                </button>
            </>
        )}
    </div>
}

export default Card;
