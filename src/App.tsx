import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { RadioGroup, Radio } from './components/Radio/Radio';
import Checkbox from './components/Checkbox/Checkbox';
import Switch from './components/Switch/Switch';
import Select from './components/Select/Select';
import Dialog from './components/Dialog/Dialog';
import Card from './components/Card/Card';
import Badge from './components/Badge/Badge';
import { Tabs, Item } from './components/Tabs/Tabs';
import Textarea from './components/Textarea/Textarea';
import Inputfile from './components/Inputfile/Inputfile';
import Tooltip from './components/Tooltip/Tooltip';
import Details from './components/Details/Details';
import { ComboboxItem, Combobox } from './components/Combobox/Combobox';

import React from 'react';
import './App.css'

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

const richColorOptions = colors.map((item) => (
    <div className='demo-option' key={item}>
        <span className='demo-option-title'>{item}</span>
        <p className='show-desc'>color {item}</p>
    </div>
))

const richColorComboboxItems = colors.map((item) => ({
    itemToJsx: () => (
        <div className='demo-option'>
            <span className='demo-option-title'>{item}</span>
            <p className='show-desc'>color {item}</p>
        </div>
    ),
    itemToString: () => item,
}))

const roles = ['Designer', 'Frontend Engineer', 'Product Manager', 'QA Engineer']
const departments = ['Design', 'Engineering', 'Operations', 'Marketing']
const workModes = ['Onsite', 'Hybrid', 'Remote']

function getFilter(inputValue: string) {
    const lowerCasedInputValue = inputValue.toLowerCase()
    return function filter(item: ComboboxItem) {
        if (!inputValue || !item) return true;
        if (typeof (item) === 'string') {
            return item.toLowerCase().includes(lowerCasedInputValue)
        } else {
            return item.itemToString().toLowerCase().includes(lowerCasedInputValue)
        }
    }
}

type Theme = 'auto' | 'light' | 'dark'
const themeLabels: Record<Theme, string> = { auto: '跟随系统', light: '浅色', dark: '深色' }
const nextTheme: Record<Theme, Theme> = { auto: 'light', light: 'dark', dark: 'auto' }

function App() {
    const [theme, setTheme] = React.useState<Theme>('auto')
    React.useEffect(() => {
        const root = document.documentElement
        if (theme === 'auto') root.removeAttribute('data-theme')
        else root.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className='app-shell'>
            <header className='app-header'>
                <h1 className='app-title'>camel-ui</h1>
                <Button variant='neutral' onPress={() => setTheme(nextTheme[theme])}>主题: {themeLabels[theme]}</Button>
            </header>
            <div className='app-columns'>
                <div className='app-column'>
                    <div className='demo-block'>
                        <h3 className='demo-legend'>组件1: Button</h3>
                        <div className='demo-row'>
                            <Button>Default</Button>
                            <Button variant='success'>Success</Button>
                            <Button variant='warning'>Warning</Button>
                            <Button variant='danger'>Danger</Button>
                            <Button variant='neutral'>Neutral</Button>
                            <Button isDisabled={true}>Disable</Button>
                        </div>
                    </div>
                    <div className='demo-block'>
                        <h3 className='demo-legend'>组件2: Card</h3>
                        <Card>
                            <h3 className='demo-legend'>组件3: Dialog</h3>
                            <Dialog title={"This is title"} trigger={<Button>openDialog</Button>}>
                                <p>Click outside, press Esc or the ✕ button to close.</p>
                            </Dialog>
                        </Card>
                        <Card
                            collapsible={<p>折叠区的内容: 默认收起, 点底部按钮展开。</p>}
                            expandLabel='展开更多'
                            collapseLabel='收起'
                        >
                            <strong>可展开的 Card</strong>
                            <p>主体内容始终显示。</p>
                        </Card>
                    </div>
                    <div>
                        <h3 className='demo-legend'>组件4: Inputfile</h3>
                        <Inputfile onChange={console.log}>
                            <Button>Upload</Button>
                        </Inputfile>
                    </div>
                    <div>
                        <h3 className='demo-legend'>组件5: Textarea</h3>
                        <div>
                            <Textarea className='w-[300px]' placeholder='write something'>123</Textarea>
                        </div>
                    </div>
                    <div>
                        <h3 className='demo-legend'>组件6: Tabs</h3>
                        <div>
                            <Tabs aria-label="">
                                <Item title="tab1" key="tab1">Panel 1</Item>
                                <Item title="tab2" key="tab2">Panel 2</Item>
                                <Item title="tab3" key="tab3">Panel 3</Item>
                            </Tabs>
                        </div>
                        <div style={{ marginTop: 'var(--s-4)', width: 360, maxWidth: '100%' }}>
                            <Tabs variant='line' aria-label='line tabs' extra={<Badge variant='success'>200 OK</Badge>}>
                                <Item title='Params' count={2}>Params panel</Item>
                                <Item title='Body' badge='json'>Body panel</Item>
                                <Item title='Script' dot>Script panel</Item>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className='app-divider'></div>
                <div className='app-column'>
                    <div className='demo-block'>
                        <h3 className='demo-legend'>组件7: Input</h3>
                        <Input label="name:" placeholder="input your name"></Input>
                        <Input label="email:" placeholder="name@example.com" errorMessage="invalid email" isInvalid></Input>
                        <Input isDisabled={true} placeholder="disable"></Input>
                    </div>
                    <div className='demo-block'>
                        <h3 className='demo-legend'>Input + Button</h3>
                        <div className='demo-input-btn' data-case='no-label'>
                            <Input aria-label='keyword' placeholder='no label' />
                            <Button>Search</Button>
                        </div>
                        <div className='demo-input-btn demo-input-btn-end' data-case='with-label'>
                            <Input label='with label:' placeholder='input then button' />
                            <Button>Add</Button>
                        </div>
                        <div className='demo-input-btn' data-case='sm'>
                            <Input size='sm' aria-label='name' placeholder='small input + small button' />
                            <Button size='sm'>OK</Button>
                        </div>
                        <div className='demo-input-btn demo-input-btn-end' data-case='sm-label'>
                            <Input size='sm' label='small with label:' type='password' placeholder='password' />
                            <Button size='sm'>Save</Button>
                        </div>
                    </div>
                    <div className='demo-block'>
                        <Select label={"组件8: Select"} items={colors}></Select>
                        <Select items={richColorOptions}></Select>
                        <div className='demo-input-btn demo-input-btn-end' data-case='sm-select'>
                            <Select size='sm' label='sm Select' items={colors} />
                            <Input size='sm' label='sm Input' placeholder='input' />
                        </div>
                        <div className='demo-input-btn demo-input-btn-end' data-case='sm-combobox'>
                            <Combobox size='sm' label='sm Combobox' items={colors} getFilter={getFilter} />
                            <Button size='sm'>OK</Button>
                        </div>
                    </div>
                    <div className='demo-block'>
                        <Combobox label={"组件9: Combobox"} items={colors} getFilter={getFilter}></Combobox>
                        <Combobox items={richColorComboboxItems} getFilter={getFilter}></Combobox>
                    </div>
                </div>
                <div className='app-divider'></div>
                <div className='app-column'>
                    <h3 className='demo-legend'>组件10: Details</h3>
                    <Card style={{ width: '400px' }}>
                        <Details title={"This is a title open to see details"}
                            children={<h1 style={{ fontSize: '3rem' }}>Hello World~</h1>}
                        ></Details>
                        <Details title='stack: 默认折叠, 内容自动留出阴影间距' stack>
                            <Input size='sm' aria-label='a' placeholder='input a' />
                            <Select size='sm' aria-label='b' items={colors} />
                            <p>下方文字不会被阴影压住</p>
                        </Details>
                    </Card>
                    <div>
                        <RadioGroup label='组件11: Radio' defaultValue={"dog"}>
                            <Radio value='cat' id='c1'>Cat</Radio>
                            <Radio value='dog'>Dog</Radio>
                            <Radio isDisabled={true} value='disabled'>disabled</Radio>
                        </RadioGroup>
                        <RadioGroup label='Segmented' variant='segmented' defaultValue='json' style={{ marginTop: 'var(--s-3)' }}>
                            <Radio value='none'>none</Radio>
                            <Radio value='json'>json</Radio>
                            <Radio value='text'>text</Radio>
                            <Radio value='form' isDisabled>form</Radio>
                        </RadioGroup>
                        <RadioGroup aria-label='segmented small' variant='segmented' size='sm' defaultValue='m' style={{ marginTop: 'var(--s-3)' }}>
                            <Radio value='s'>S</Radio>
                            <Radio value='m'>M</Radio>
                            <Radio value='l'>L</Radio>
                        </RadioGroup>
                    </div>
                    <div>
                        <h3 className='demo-legend'>组件12: Checkbox</h3>
                        <div className='demo-row'>
                            <Checkbox>use react</Checkbox>
                            <Checkbox defaultSelected={true}>use vue</Checkbox>
                            <Checkbox isDisabled={true}>disable</Checkbox>
                            <Checkbox isDisabled={true} defaultSelected={true}>disable</Checkbox>
                        </div>

                    </div>
                    <div>
                        <h3 className='demo-legend'>组件13: Switch</h3>
                        <div className='demo-row'>
                            <Switch defaultSelected={true}>normal</Switch>
                            <Switch round={true}>round</Switch>
                            <Switch round={true} isDisabled={true}>disabled</Switch>
                        </div>
                    </div>
                    <div>
                        <h3 className='demo-legend'>组件14: Badge</h3>
                        <div className='demo-row'>
                            <Badge>default</Badge>
                            <Badge variant='success'>success</Badge>
                            <Badge variant='warning'>warning</Badge>
                            <Badge variant='danger'>danger</Badge>
                            <Badge variant='neutral'>neutral</Badge>
                        </div>
                    </div>
                    <div>
                        <h3 className='demo-legend'>组件15: Tooltip</h3>
                        <div className='demo-row' style={{ paddingTop: '2.5rem' }}>
                            <Tooltip overlay={<span>Tooltip text</span>}>
                                Hover or focus me
                            </Tooltip>
                            <Tooltip isOpen={true} overlay={<span>Always open</span>}>
                                Pinned tooltip
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>

            <section className='form-demo-section'>
                <h3 className='demo-legend'>组件16: Form Demo</h3>
                <div className='form-demo-card'>
                    <h2 className='form-demo-title'>成员信息表单</h2>
                    <p className='form-demo-subtitle'>
                        这个示例把普通输入框、下拉、密码、单选、复选和开关放在一个真实表单场景里，便于直接检查 label、控件高度和对齐。
                    </p>
                    <div className='form-demo-grid'>
                        <Input label='姓名' placeholder='请输入姓名' />
                        <Input label='邮箱' placeholder='name@example.com' />
                        <Input label='密码' type='password' placeholder='请输入密码' />
                        <Select label='部门' items={departments} placeholder='请选择部门' />
                        <Combobox label='岗位' items={roles} getFilter={getFilter} placeholder='搜索岗位' />
                        <Select label='办公模式' items={workModes} placeholder='请选择办公模式' />
                        <div className='form-demo-field form-demo-full'>
                            <label className='form-demo-label'>备注</label>
                            <Textarea rows={5}>负责组件库维护、业务表单搭建和设计规范落地。</Textarea>
                        </div>
                        <div className='form-demo-field form-demo-full'>
                            <span className='form-demo-label'>通知方式</span>
                            <RadioGroup defaultValue='email'>
                                <div className='form-demo-group'>
                                    <Radio value='email'>Email</Radio>
                                    <Radio value='slack'>Slack</Radio>
                                    <Radio value='sms'>SMS</Radio>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className='form-demo-field form-demo-full'>
                            <span className='form-demo-label'>权限开通</span>
                            <div className='form-demo-group'>
                                <Checkbox defaultSelected={true}>控制台访问</Checkbox>
                                <Checkbox>报表导出</Checkbox>
                                <Checkbox>审批权限</Checkbox>
                            </div>
                        </div>
                        <div className='form-demo-field form-demo-full'>
                            <span className='form-demo-label'>系统设置</span>
                            <div className='form-demo-group'>
                                <Switch defaultSelected={true}>启用双重验证</Switch>
                                <Switch round={true}>接收日报提醒</Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default App
