import './Badge.css'
import BaseProps from '../BaseProps'

interface BadgeProps extends BaseProps {}

function Badge(props: BadgeProps) {
    return <>
        <span className={ "badge-container " + (props.className??"") } style={props.style}>
            {props.children}
        </span>
    </>
}


export default Badge