import React from 'react'
import { useCombobox } from 'downshift'
import './Combobox.css'
import { cn } from '../cn'
import { ComboboxProps, ComboboxItem} from '../../types'
import Chevron from '../Chevron'


function Combobox(props: ComboboxProps) {
    const { label, items, getFilter } = props;
    const [ data, setData] = React.useState(items)
    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
    } = useCombobox({
        onInputValueChange({ inputValue }) {
            setData(items.filter(getFilter(inputValue)))
        },
        items: data,
        itemToString(item){
            return item ? (typeof(item) === 'string' ? item : item.itemToString()) : ''
        },
    })
    const [ selected, setSelected] = React.useState(selectedItem)

    if (selected != selectedItem) {
        setSelected(selectedItem);
        props.onChange && props.onChange(selectedItem)
    }

    return (
        <div className={cn("combobox-container", props.size === 'sm' && 'combobox-sm', props.className)} style={{...props.style}}>
            <div>
                {label && <label className="w-fit" {...getLabelProps()}>
                    {label}
                </label>}
                <div className="combobox-input">
                    <input
                        placeholder={props.placeholder ?? "select an element"}
                        {...getInputProps()}
                    />
                    <button type='button' {...getToggleButtonProps()} >
                        <Chevron size={props.size === 'sm' ? 16 : 20} />
                    </button>
                </div>
            </div>
            <div className='listbox' hidden={!isOpen}>
                <ul {...getMenuProps()}>
                    {isOpen && data.map((item, index) => (
                        <li
                            key={`${typeof item === 'string' ? item : item.itemToString()}${index}`}
                            data-highlighted={highlightedIndex === index || undefined}
                            {...getItemProps({ item, index })}
                        >
                            <span>{typeof(item) === 'string' ? item : item.itemToJsx()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export {Combobox}
export type {ComboboxItem}
