import React from 'react'
import { useCombobox } from 'downshift'
import './Combobox.css'
import { cn } from '../cn'
import { ComboboxProps, ComboboxItem} from '../../types'


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
        <div className={cn("combobox-container", props.className)} style={{...props.style}}>
            <div>
                {label && <label className="w-fit" {...getLabelProps()}>
                    {label}
                </label>}
                <div className="combobox-input">
                    <input
                        placeholder={props.placeholder ?? "select an element"}
                        {...getInputProps()}
                    />
                    <a {...getToggleButtonProps()} >
                        <svg  width={'25'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 512 512" className="arrow">
                            <circle stroke={'black'} cx={256} cy={256} r={250}></circle>
                            <path strokeWidth={2} fill='var(--w-blue)' d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div  {...getMenuProps()}>
                {isOpen &&
                    <div className='listbox'>
                        <ul>
                {
                    data.map((item, index) => (
                        <li
                            style={{
                                padding: '5px',
                                backgroundColor: highlightedIndex === index ? 'var(--w-blue)' : "inherit",
                            }}
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                           <span>{typeof(item) === 'string' ? item : item.itemToJsx()}</span>
                        </li>
                    ))}
            </ul>
            </div>
            }
        </div></div>
    )
}

export {Combobox}
export type {ComboboxItem}
