import { ReactNode } from 'react';
import BaseProps from './components/BaseProps';
import { AriaButtonOptions, AriaRadioGroupProps, AriaRadioProps, AriaTextFieldProps,AriaCheckboxProps, TooltipTriggerProps, AriaTooltipProps } from 'react-aria';
import { ToggleStateOptions } from '@react-stately/toggle';
import {  TooltipTriggerState } from "@react-stately/tooltip";



export type Variant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

export interface ButtonProps extends BaseProps, AriaButtonOptions<'button'> {
    variant?: Variant
    size?: 'sm' | 'md'
    title?: string
}
export interface BadgeProps extends BaseProps {
    variant?: Variant
}
export interface CardProps extends BaseProps {
    /** 折叠区内容: 传入后底部出现展开/收起按钮; 不传则与普通 Card 一致 */
    collapsible?: React.ReactNode,
    /** 非受控: 默认是否展开, 默认 false */
    defaultExpanded?: boolean,
    /** 受控: 是否展开 */
    expanded?: boolean,
    onExpandedChange?: (expanded: boolean) => void,
    /** 子元素纵向留出 --shadow-space 间距, 避免控件的硬阴影压到下方内容(不改变子元素宽度) */
    stack?: boolean,
    /** 按钮文字(可选), 不传则只显示箭头 */
    expandLabel?: React.ReactNode,
    collapseLabel?: React.ReactNode,
}
export interface CheckboxProps extends BaseProps, ToggleStateOptions, AriaCheckboxProps {}
export interface ComboboxProps extends BaseProps {
    label?: React.ReactNode,
    items: ComboboxItem[],
    getFilter: (inputStr: string) => (obj: ComboboxItem)=>boolean,
    onChange?: (obj: ComboboxItem|null) => void
    placeholder?: string
    /** 尺寸: 默认 44px; sm 为 28px, 与 Input/Button size="sm" 等高 */
    size?: 'sm' | 'md'
}

export type ComboboxItem =  {
    itemToString(): string,
    itemToJsx(): React.ReactNode,
} | string

export interface DetailsProps extends BaseProps, AriaButtonOptions<'button'> {
    titleClassName?: string
    title: React.ReactNode
    /** 默认是否展开(非受控) */
    defaultSelected?: boolean
    /** 受控: 是否展开 */
    isSelected?: boolean
    onChange?: (isSelected: boolean) => void
    contentClassName?: string
    /** 内容区子元素纵向留出 --shadow-space 间距(同 Card stack) */
    stack?: boolean
}

export interface DialogProps extends BaseProps {
    label?: string|React.ReactNode;
    title?: string|React.ReactNode;
    trigger: string|React.ReactElement;
}

export interface InputProps extends BaseProps, AriaTextFieldProps {
    labelClassName?: string,
    inputClassName?: string,
    direction?: 'row' | 'column',
    /** 尺寸: 默认 44px; sm 为 28px, 与 Button size="sm" 等高 */
    size?: 'sm' | 'md',
    /** type="password" 时是否显示"显示/隐藏"小眼睛, 默认 true */
    passwordToggle?: boolean,
    /** 小眼睛按钮的无障碍文案(便于国际化), 默认 "Show password" / "Hide password" */
    showPasswordLabel?: string,
    hidePasswordLabel?: string,
}

export interface RadioGroupProps extends BaseProps, AriaRadioGroupProps {
    /** default: 圆点单选; segmented: 分段按钮(选项横排, 选中项高亮) */
    variant?: 'default' | 'segmented',
    /** 仅 segmented 生效: md 36px, sm 28px(与 Button/Input size="sm" 等高) */
    size?: 'sm' | 'md',
}

export interface RadioProps extends BaseProps, AriaRadioProps {
}


export interface SelectProps extends BaseProps {
    defaultIndex?: number,
    placeholder?: string,
    label?: string | ReactNode,
    /** 没有可见 label 时, 给下拉按钮提供无障碍名称 */
    'aria-label'?: string,
    items: string[] | ReactNode[],
    onSelectedItemChange?: (changes: unknown) => void
    /** 尺寸: 默认 44px; sm 为 28px, 与 Input/Button size="sm" 等高 */
    size?: 'sm' | 'md',
}

export interface SwitchProps extends BaseProps, ToggleStateOptions {
    round?: boolean
}

export interface TooltipProps extends BaseProps, AriaTooltipProps  {
    state?: TooltipTriggerState,
}

export interface TriggerProps extends BaseProps, TooltipTriggerProps {
    overlay: string| React.ReactElement,
}

export type AlertProps = BaseProps & {
    type: 'success' | 'warning' | 'error' | 'info';
    show: boolean;
    message: string;
};
