import './Card.css'
import { cn } from '../cn';
import { CardProps } from '../../types';


function Card(props: CardProps) {
    return <div className={cn("card-container ", props.className)} style={{...props.style}}>
        {props.children}
    </div>
}

export default Card;