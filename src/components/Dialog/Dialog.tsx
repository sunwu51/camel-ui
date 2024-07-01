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
            { open && <div className="dialog-backdrop" onClick={handleBackdropClick}>
                <FocusScope contain restoreFocus autoFocus>
                    <div
                        {...dialogProps}
                        ref={ref}
                        className="dialog-dialog"
                        onClick={handleDialogClick}
                    >
                        { props.title && <span {...titleProps} className="dialog-title">{props.title}</span>}
                        <div className="dialog-content">
                            {props.children}
                        </div>
                    </div>
                    <button className='dialog-close-button' onClick={()=>setOpen(false)}>X</button>
                </FocusScope>
            </div>
            }
        </div>

    );
};

export default Dialog;
