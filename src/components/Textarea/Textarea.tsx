import './Textarea.css'
import BaseProps from '../BaseProps'

interface TextareaProps extends BaseProps {
    children?: string
}

function Textarea(props: TextareaProps) {
    return <textarea className={"textarea-container " + (props.className??"")} 
        style={props.style}
        defaultValue={props.children}>
    </textarea>
}

export default Textarea