import React from 'react';
import { useId } from 'react-aria';
import './Tabs.css'
import { cn } from '../cn';
import BaseProps from '../BaseProps';

export type TabKey = string | number;
export type TabsVariant = 'card' | 'line';

/** 标签栏中的一个标签 */
export interface TabBarItem {
  key: TabKey;
  title: React.ReactNode;
  /** 计数小圆角(大于 0 才显示) */
  count?: number;
  /** 右侧小圆点, 用来提示"有内容/有异常" */
  dot?: boolean;
  /** 右侧小徽标, 例如 "json" */
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabBarProps extends BaseProps {
  items: TabBarItem[];
  selectedKey?: TabKey;
  onChange?: (key: TabKey) => void;
  /** card: 卡片式(默认, 与面板相连); line: 下划线式 */
  variant?: TabsVariant;
  /** 标签栏右侧的额外内容 */
  extra?: React.ReactNode;
  tabClassName?: string;
  'aria-label'?: string;
  /** 设置后生成 tab 的 id / aria-controls(`${idPrefix}-tab-${key}` / `${idPrefix}-panel-${key}`) */
  idPrefix?: string;
}

/** 只有标签栏(不含面板), 适合内容区由使用方自己布局的场景 */
function TabBar({ items, selectedKey, onChange, variant = 'card', extra, className, style, tabClassName, idPrefix, ...rest }: TabBarProps) {
  const listRef = React.useRef<HTMLDivElement>(null);
  const line = variant === 'line';
  const enabled = items.filter(item => !item.disabled);
  const focusKey = enabled.some(item => item.key === selectedKey) ? selectedKey : enabled[0]?.key;

  // 放不下时: 竖向滚轮转成横向滚动; 到头后不拦截, 让页面继续滚动
  React.useEffect(() => {
    const list = listRef.current;
    if (!list || !line) return undefined;
    const onWheel = (event: WheelEvent) => {
      if (list.scrollWidth <= list.clientWidth) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const max = list.scrollWidth - list.clientWidth;
      const next = Math.min(max, Math.max(0, list.scrollLeft + event.deltaY));
      if (next === list.scrollLeft) return;
      event.preventDefault();
      list.scrollLeft = next;
    };
    list.addEventListener('wheel', onWheel, { passive: false });
    return () => list.removeEventListener('wheel', onWheel);
  }, [line]);

  // 选中的标签被挡住时, 滚动到可见位置(只滚标签栏, 不动页面)
  React.useEffect(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const btn = list.querySelector<HTMLElement>(`[data-tab-key="${CSS.escape(String(selectedKey))}"]`);
    if (!btn) return;
    const listRect = list.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const left = btnRect.left - listRect.left + list.scrollLeft;
    const right = left + btnRect.width;
    if (left < list.scrollLeft) list.scrollLeft = left;
    else if (right > list.scrollLeft + list.clientWidth) list.scrollLeft = right - list.clientWidth;
  }, [selectedKey]);

  const select = (key: TabKey) => {
    onChange?.(key);
    const btn = listRef.current?.querySelector<HTMLButtonElement>(`[data-tab-key="${CSS.escape(String(key))}"]`);
    btn?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!enabled.length) return;
    const index = Math.max(0, enabled.findIndex(item => item.key === focusKey));
    let next = -1;
    if (event.key === 'ArrowRight') next = (index + 1) % enabled.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + enabled.length) % enabled.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = enabled.length - 1;
    if (next < 0) return;
    event.preventDefault();
    select(enabled[next].key);
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={rest['aria-label']}
      aria-orientation="horizontal"
      className={cn(line ? 'tabs-list tabs-list-line' : 'tabs-button-container', className)}
      style={style}
      onKeyDown={onKeyDown}
    >
      {items.map(item => {
        const selected = item.key === selectedKey;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            data-tab-key={String(item.key)}
            id={idPrefix ? `${idPrefix}-tab-${item.key}` : undefined}
            aria-controls={idPrefix ? `${idPrefix}-panel-${item.key}` : undefined}
            aria-selected={selected}
            tabIndex={item.key === focusKey ? 0 : -1}
            disabled={item.disabled}
            className={cn(
              line ? cn('tabs-line-tab', selected && 'is-selected') : (selected ? 'tabs-button-selected' : 'tabs-button'),
              tabClassName,
            )}
            onClick={() => onChange?.(item.key)}
          >
            <span className="tabs-title">{item.title}</span>
            {!!item.count && item.count > 0 && <span className="tabs-count">{item.count}</span>}
            {item.badge !== undefined && item.badge !== null && item.badge !== '' && item.badge !== false && (
              <span className="tabs-badge">{item.badge}</span>
            )}
            {item.dot && <span className="tabs-dot" aria-hidden="true" />}
          </button>
        );
      })}
      {extra !== undefined && extra !== null && <div className="tabs-extra">{extra}</div>}
    </div>
  );
}


interface ItemProps extends BaseProps {
  children?: React.ReactNode;
  title: React.ReactNode;
  count?: number;
  dot?: boolean;
  badge?: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps extends BaseProps {
  children: React.ReactNode;
  defaultIndex?: number;
  /** 受控: 当前选中的序号 */
  fixedIndex?: number;
  /** 切换时回调(受控、非受控都会调用) */
  handleChange?: (index: number) => void;
  'aria-label'?: string;
  /** card: 卡片式(默认); line: 下划线式 */
  variant?: TabsVariant;
  /** 标签栏右侧的额外内容 */
  extra?: React.ReactNode;
  /** 是否同时渲染所有面板(只显示选中的), 默认 true; 设为 false 则只渲染选中面板 */
  keepMounted?: boolean;
  tabBtnClassName?: string;
  tabPanelClassName?: string;
  tabListClassName?: string;
}

function Item({ children, className, style } : ItemProps) {
  return <div className={className} style={style}>{children}</div>
}

function Tabs({ children, defaultIndex = 0, fixedIndex, handleChange, variant = 'card', extra, keepMounted = true, ...props }: TabsProps) {
  const idPrefix = useId();
  const items = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement<ItemProps>[];
  const [innerIndex, setInnerIndex] = React.useState(defaultIndex === undefined ? -1 : defaultIndex);
  const currentIndex = fixedIndex ?? innerIndex;
  const line = variant === 'line';

  return (
    <div className={cn('tabs-container', line && 'tabs-line', props.className)} style={props.style}>
      <TabBar
        items={items.map((item, index) => ({
          key: index,
          title: item.props.title,
          count: item.props.count,
          dot: item.props.dot,
          badge: item.props.badge,
          disabled: item.props.disabled,
        }))}
        selectedKey={currentIndex}
        onChange={key => {
          const index = Number(key);
          if (fixedIndex === undefined) setInnerIndex(index);
          handleChange?.(index);
        }}
        variant={variant}
        extra={extra}
        idPrefix={idPrefix}
        className={props.tabListClassName}
        tabClassName={props.tabBtnClassName}
        aria-label={props['aria-label']}
      />
      {items.map((item, index) => {
        const selected = index === currentIndex;
        if (!keepMounted && !selected) return null;
        return (
          <div
            key={index}
            role="tabpanel"
            id={`${idPrefix}-panel-${index}`}
            aria-labelledby={`${idPrefix}-tab-${index}`}
            hidden={line ? !selected : undefined}
            className={cn(
              line ? 'tabs-line-panel' : (selected ? 'tabs-panel-selected' : 'tabs-panel'),
              props.tabPanelClassName,
            )}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export { Tabs, Item, TabBar };
