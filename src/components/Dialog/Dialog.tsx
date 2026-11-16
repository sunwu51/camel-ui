import React, { useRef } from 'react';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useButton } from '@react-aria/button';
import './Dialog.css';
import { cn } from '../cn';
import { DialogProps } from '../../types';

const Dialog = (props: DialogProps) => {
    const ref = useRef(null);
    const btnRef = useRef(null);
    const { dialogProps, titleProps } = useDialog({}, ref);
    const { buttonProps } = useButton({onPress: ()=>setOpen(true) }, btnRef);
    const [open, setOpen] = React.useState(false);

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            setOpen(false);
        }
    };

    const handleDialogClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };
    return (
        <div className={cn('dialog-container', props.className)}>
            <span ref={btnRef} {...buttonProps} style={{cursor: 'pointer'}}>
                {   typeof(props.trigger) === 'string' ? props.trigger : 
                    React.cloneElement(props.trigger, {onClick: ()=>setOpen(true), onPress: ()=>setOpen(true)})}
            </span>
            { open && <div
                className="dialog-backdrop"
                onClick={handleBackdropClick}
                onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}
            >
                <FocusScope contain restoreFocus autoFocus>
                    <div
                        {...dialogProps}
                        aria-modal="true"
                        ref={ref}
                        className="dialog-dialog"
                        onClick={handleDialogClick}
                    >
                        <div className="dialog-header">
                            { props.title && <h2 {...titleProps} className="dialog-title">{props.title}</h2>}
                            <button type='button' aria-label='Close' title='Close' className='dialog-close-button' onClick={()=>setOpen(false)}>✕</button>
                        </div>
                        <div className="dialog-content">
                            {props.children}
                        </div>
                    </div>
                </FocusScope>
            </div>
            }
        </div>

    );
};

export default Dialog;
