import React, { useRef } from 'react';
import { useTabList, useTab, useTabPanel,  AriaTabPanelProps } from '@react-aria/tabs';
import { useTabListState, TabListState } from '@react-stately/tabs';
import { Node } from '@react-types/shared';
import { Item } from '@react-stately/collections';
import './Tabs.css'

type TabsProps = {
  children: React.ReactNode;
  'aria-label'?: string;
};

type TabProps = {
  item: Node<object>;
  state: TabListState<object>;
};

type TabPanelProps = AriaTabPanelProps & {
  state: TabListState<object>;
  children: React.ReactNode;
}

function Tabs(props: TabsProps) {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const state = useTabListState(props as any);
  const { tabListProps } = useTabList(props, state, ref);

  // tabs component consists of tabs and active tabpanel
  return (
    <div className='tabs-container'>
      <div className='tabs-button-container' {...tabListProps} ref={ref}>
        {Array.from(state.collection).map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel state={state}>
        {state.selectedItem && state.selectedItem.rendered}
      </TabPanel>
    </div>
  );
}

function Tab({ item, state }: TabProps) {
  const ref = useRef(null);
  const { tabProps } = useTab({ key: item.key }, state, ref);
  const isSelected = state.selectedKey === item.key;

  return (
    <button
      className= { isSelected ? 'tabs-button-selected' : 'tabs-button' }
      {...tabProps}
      ref={ref}
     
    >
      {item.rendered}
    </button>
  );
}

function TabPanel({ state, ...otherProps }: TabPanelProps) {
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel(otherProps, state, ref);

  return (
    <div {...tabPanelProps} ref={ref} {...otherProps} className='tabs-panel'>
      {state.selectedItem?.props.children}
    </div>
  );
}

export { Tabs, Item };
