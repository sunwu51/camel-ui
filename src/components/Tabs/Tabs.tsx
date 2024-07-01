import React from 'react';
import './Tabs.css'
import { cn } from '../cn';
import BaseProps from '../BaseProps';


interface ItemProps extends BaseProps {
  children?:  React.ReactNode;
  title: string;
}

interface TabsProps extends BaseProps{
  children: React.ReactElement<ItemProps>|React.ReactElement<ItemProps>[];
  defaultIndex?: number;
  fixedIndex?: number; 
  handleChange?: (index: number)=>void;
  'aria-label'?: string;
  tabBtnClassName?: string;
  tabPanelClassName?: string;
}

function Item({ children, className, style } : ItemProps) {
  return <div className={className} style={style}>{children}</div>
}



function Tabs({ children, defaultIndex=0, fixedIndex, handleChange, ...props }: TabsProps) {
  if (!Array.isArray(children)) {
      children = [children]
  }
  const [currentIndex, setCurrentIndex] = React.useState(defaultIndex===undefined ? -1 : defaultIndex)
  return (
    <div className={cn('tabs-container',props.className)}>
        <div className={'tabs-button-container'} >
            {(children as React.ReactElement<ItemProps>[]).map((item, index) => (
                <button
                    className={cn(index == currentIndex ? 'tabs-button-selected' : 'tabs-button', props.tabBtnClassName)}
                    key={index} onClick={() => { 
                        if (fixedIndex === undefined) {
                            setCurrentIndex(index)
                        } else {
                            handleChange && handleChange(index)
                        }
                    }}>
                    {item.props.title}
                </button>
            ))}
        </div>
        {children.map((item, index) => (<div className={cn((index == currentIndex ? "tabs-panel-selected":'tabs-panel'), props.tabPanelClassName)} key={index}>{item}</div>))}
    </div >
  );
}

export { Tabs, Item };
