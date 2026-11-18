import { useSelect } from 'downshift'
import './Select.css'
import { cn } from '../cn'
import { SelectProps } from '../../types'
import Chevron from '../Chevron'

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
            {props.label && (
                <label className='select-label' {...getLabelProps()}>
                    {props.label}
                </label>
            )}
            <button
                {...getToggleButtonProps(props['aria-label'] && !props.label
                    ? { 'aria-label': props['aria-label'], 'aria-labelledby': undefined }
                    : undefined)}
            >
                <span className='select-trigger-value'>{selectedItem ?? props.placeholder ?? 'select an element'}</span>
                <Chevron />
            </button>
            <div className='listbox' hidden={!isOpen}>
                <ul {...getMenuProps()}>
                    {isOpen && props.items.map((item, index) => (
                        <li
                            key={index}
                            data-highlighted={highlightedIndex === index || undefined}
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
        </div>
    )
}

export default Select;
