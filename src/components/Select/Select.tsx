import { ReactNode } from 'react'
import { useSelect } from 'downshift'
import './Select.css'
import BaseProps from '../BaseProps'

const colors = [
    'Black',
    'Red',
    'Green',
    'Blue',
    'Orange',
    'Purple',
    'Pink',
    'Orchid',
    'Aqua',
    'Lime',
    'Gray',
    'Brown',
    'Teal',
    'Skyblue',
]
interface SelectProps extends BaseProps {
    label: string|ReactNode
}
function Select(props: SelectProps) {
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useSelect({ items: colors })

    return (
        <div className='select-container'>
            <label className='select-label' {...getLabelProps()}>
                {props.label}
            </label>
            <button
                {...getToggleButtonProps()}
            >
                <span>{selectedItem ?? 'Elements'}</span>
                <svg style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} viewBox="0 0 512 512" className="arrow"> 
                    <circle fill='var(--w-yellow)' strokeWidth={50} stroke={'black'} cx={256} cy={256} r={220}></circle>
                    <path strokeWidth={2} fill='var(--w-blue)' d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z"></path> 
                </svg>
            </button>
            {isOpen &&
            <div className='listbox'>
                <ul {...getMenuProps()} >
                        {
                        colors.map((item, index) => (
                            <li
                                style={{
                                    padding: '4px',
                                    backgroundColor: highlightedIndex === index ? '#bde4ff' : "inherit",
                                }}
                                key={`${item}${index}`}
                                {...getItemProps({
                                    item,
                                    index,
                                })}
                            >
                                {item}
                            </li>
                        ))}
                </ul>
            </div>
}           
        </div>
    )
}

export default Select;