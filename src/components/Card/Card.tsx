import BaseProps from "../BaseProps";
import './Card.css'

interface CardProps extends BaseProps {}

function Card(props: CardProps) {
    return <div className={"card-container " + (props.className? props.className : '')} style={props.style}>
        {props.children}
    </div>
}

export default Card;