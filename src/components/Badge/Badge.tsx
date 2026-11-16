import './Badge.css'
import {cn} from '../cn'
import { BadgeProps } from '../../types'

function Badge({ variant, className, style, children }: BadgeProps) {
    return (
        <span
            className={cn("badge-container", variant && variant !== 'primary' && `badge-${variant}`, className)}
            style={{ ...style }}
        >
            {children}
        </span>
    )
}

export default Badge
