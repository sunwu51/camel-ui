import { useSelect } from 'downshift'
import './Select.css'
import { cn } from '../cn'
import { SelectProps } from '../../types'

function Select(props: SelectProps) {
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
    } = useSelect({
        items: props.items,
        defaultSelectedItem: props.defaultIndex !== undefined ? props.items[props.defaultIndex] : undefined,
        onSelectedItemChange: props.onSelectedItemChange
    })

    return (
        <div className={cn('select-container', props.className)} style={{...props.style}}>
            <label className='select-label' {...getLabelProps()}>
                {props.label}
            </label>
            <button
                {...getToggleButtonProps()}
            >
                <span>{selectedItem ?? props.placeholder ?? 'select an element'}</span>
                <svg width={'25px'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 512 512" className="arrow">
                    <circle stroke={'black'} cx={256} cy={256} r={250}></circle>
                    <path strokeWidth={2} fill='var(--w-blue)' d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z"></path>
                </svg>
            </button>
            <div  {...getMenuProps()}>
                {isOpen &&
                    <div className='listbox'>
                        <ul>
                            {
                                props.items.map((item, index) => (
                                    <li
                                        style={{
                                            padding: '5px',
                                            backgroundColor: highlightedIndex === index ? 'var(--w-blue)' : "inherit",
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
                }           </div>
        </div>
    )
}

export default Select;