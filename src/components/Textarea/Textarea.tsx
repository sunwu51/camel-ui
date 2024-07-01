import './Textarea.css'
import BaseProps from '../BaseProps'
import { cn } from '../cn'

interface TextareaProps extends BaseProps {
    children?: string
}

function Textarea(props: TextareaProps) {
    return <textarea className={cn("textarea-container" , props.className)} 
        style={props.style}
        defaultValue={props.children}>
    </textarea>
}

export default Textarea