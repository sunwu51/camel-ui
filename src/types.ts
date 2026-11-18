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
export interface CardProps extends BaseProps {}
export interface CheckboxProps extends BaseProps, ToggleStateOptions, AriaCheckboxProps {}
export interface ComboboxProps extends BaseProps {
    label?: React.ReactNode,
    items: ComboboxItem[],
    getFilter: (inputStr: string) => (obj: ComboboxItem)=>boolean,
    onChange?: (obj: ComboboxItem|null) => void
    placeholder?: string
}

export type ComboboxItem =  {
    itemToString(): string,
    itemToJsx(): React.ReactNode,
} | string

export interface DetailsProps extends BaseProps, AriaButtonOptions<'button'> {
    titleClassName?: string
    title: React.ReactNode
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
    /** type="password" 时是否显示"显示/隐藏"小眼睛, 默认 true */
    passwordToggle?: boolean,
    /** 小眼睛按钮的无障碍文案(便于国际化), 默认 "Show password" / "Hide password" */
    showPasswordLabel?: string,
    hidePasswordLabel?: string,
}

export interface RadioGroupProps extends BaseProps, AriaRadioGroupProps {
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
