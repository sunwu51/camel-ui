import './Badge.css'
import {cn} from '../cn'
import { BadgeProps } from '../../types'

function Badge(props: BadgeProps) {
    return <>
        <span className={ cn("badge-container", props.className) } style={{...props.style}}>
            {props.children}
        </span>
    </>
}


export default Badge