import './Textarea.css'
import BaseProps from '../BaseProps'
import { cn } from '../cn'

interface TextareaProps extends BaseProps {
    children?: string
    rows?: number
    placeholder?: string
    disabled?: boolean
    name?: string
}

function Textarea({ className, style, children, ...rest }: TextareaProps) {
    return (
        <div className={cn("textarea-container", className)} style={style}>
            <textarea defaultValue={children} {...rest} />
        </div>
    )
}

export default Textarea
