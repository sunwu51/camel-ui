import {useRef} from 'react';
import { useToggleButton } from '@react-aria/button';
import {useToggleState} from '@react-stately/toggle';
import './Details.css'
import { cn } from '../cn';
import { DetailsProps } from '../../types';
import Chevron from '../Chevron';


function Details(props: DetailsProps) {
  const ref = useRef(null);
  const state = useToggleState(props);
  const { isSelected } = state;
  const { buttonProps } = useToggleButton(props, state, ref);
  return (
    <div className={cn('details-container', props.stack && 'details-stack', props.className)} style={{...props.style}}>
        <button {...buttonProps} aria-pressed={undefined} aria-expanded={isSelected} className={'details-title'}>
                <div className={cn(props.titleClassName)}>
                    {props.title}
                </div>
                <Chevron />
        </button>
          <div className={cn('details-content', props.contentClassName)} hidden={!isSelected}>
              {props.children}
          </div>
    </div>
  );
}

export default Details
