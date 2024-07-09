import {useRef} from 'react';
import { useToggleButton } from '@react-aria/button';
import {useToggleState} from '@react-stately/toggle';
import './Details.css'
import { cn } from '../cn';
import { DetailsProps } from '../../types';


function Details(props: DetailsProps) {
  const ref = useRef(null);
  const state = useToggleState(props);
  const { isSelected } = state;
  const { buttonProps } = useToggleButton(props, state, ref);
  return (
    <div className={cn('details-container', props.className)} style={{...props.style}}>
        <button {...buttonProps} className={'details-title'}>
                <div className={cn(props.titleClassName)}>
                    {props.title}
                </div>
                <svg width={'25px'} style={{  transform: isSelected ? 'rotate(0deg)' : 'rotate(-90deg)', transition: '0.4s' }} viewBox="0 0 512 512" className="arrow">
                        <circle stroke={'black'} cx={256} cy={256} r={240}></circle>
                        <path strokeWidth={2} fill='var(--w-blue)' d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z"></path>
                </svg>
        </button>
          <div className={cn('details-content', state.isSelected? '' :'hidden')}>
              {props.children}
          </div>
    </div>
  );
}

export default Details