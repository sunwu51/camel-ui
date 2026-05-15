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
    <div className='demo-option'>
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

function App() {
    return (
        <div className='app-shell'>
            <div className='app-columns'>
                <div className='app-column'>
                    <div className='demo-block'>
                        <legend className='demo-legend'>组件1: Button</legend>
                        <Button>Default</Button>
                        <Button isDisabled={true}>Disable</Button>
                        <Button className='bg-[var(--w-red)] hover:bg-[var(--w-red-dark)]'>Red</Button>
                    </div>
                    <div className='demo-block'>
                        <legend className='demo-legend'>组件2: Card</legend>
                        <Card>
                            <legend className='demo-legend'>组件3: Dialog</legend>
                            <Dialog title={"This is title"} trigger={<Button>openDialog</Button>}>
                                <div style={{ color: 'var(--w-yellow-dark)' }}>
                                    <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Click outside to close</h1>
                                </div>
                            </Dialog>
                        </Card>
                    </div>
                    <div>
                        <legend className='demo-legend'>组件4: Inputfile</legend>
                        <div style={{ padding: '10px' }}>
                            <div>
                                <Inputfile onChange={console.log}>
                                    <Button>Upload</Button>
                                </Inputfile>
                            </div>
                        </div>
                    </div>
                    <div>
                        <legend className='demo-legend'>组件5: Textarea</legend>
                        <div className='demo-pad'>
                            <Textarea className='w-[288px]'>123</Textarea>
                        </div>
                    </div>
                    <div>
                        <legend className='demo-legend'>组件6: Tabs</legend>
                        <div className='demo-pad'>
                            <Tabs aria-label="">
                                <Item title="tab1" key="tab1">Panel 1</Item>
                                <Item title="tab2" key="tab2">Panel 2</Item>
                                <Item title="tab3" key="tab3">Panel 3</Item>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className='app-divider'></div>
                <div className='app-column'>
                    <div className='demo-block'>
                        <legend className='demo-legend'>组件7: Input</legend>
                        <Input label="name:" placeholder="input your name"></Input>
                        <Input isDisabled={true} placeholder="disable"></Input>
                    </div>
                    <div className='demo-block'>
                        <Select label={"组件8: Select"} items={colors}></Select>
                        <Select items={richColorOptions}></Select>
                    </div>
                    <div className='demo-block'>
                        <Combobox label={"组件9: Combobox"} items={colors} getFilter={getFilter}></Combobox>
                        <Combobox items={richColorComboboxItems} getFilter={getFilter}></Combobox>
                    </div>
                </div>
                <div className='app-divider'></div>
                <div className='app-column'>
                    <legend className='demo-legend'>组件10: Details</legend>
                    <Card style={{ width: '400px' }}>
                        <Details title={"This is a title open to see details"}
                            children={<h1 style={{ fontSize: '3rem' }}>Hello World~</h1>}
                        ></Details>
                    </Card>
                    <div className='demo-pad'>
                        <RadioGroup label='组件11: Radio' defaultValue={"dog"}>
                            <Radio value='cat' id='c1'>Cat</Radio>
                            <Radio value='dog'>Dog</Radio>
                            <Radio isDisabled={true} value='disabled'>disabled</Radio>
                        </RadioGroup>
                    </div>
                    <div>
                        <legend className='demo-legend'>组件12: Checkbox</legend>
                        <div className='demo-pad flex gap-2'>
                            <Checkbox>use react</Checkbox>
                            <Checkbox defaultSelected={true}>use vue</Checkbox>
                            <Checkbox isDisabled={true}>disable</Checkbox>
                            <Checkbox isDisabled={true} defaultSelected={true}>disable</Checkbox>
                        </div>

                    </div>
                    <div>
                        <legend className='demo-legend'>组件13: Switch</legend>
                        <div className='demo-pad flex gap-2'>
                            <Switch defaultSelected={true}>normal</Switch>
                            <Switch round={true}>round</Switch>
                            <Switch round={true} isDisabled={true}>disabled</Switch>
                        </div>
                    </div>
                    <div>
                        <legend className='demo-legend'>组件14: Badge</legend>
                        <div style={{ padding: '10px' }}>
                            <Badge>default</Badge> &nbsp;
                            <Badge className='bg-[var(--w-red-dark)]'>red-dark</Badge> &nbsp;
                            <Badge className='bg-[var(--w-yellow-dark)]'>yellow-dark</Badge> &nbsp;
                            <Badge className='bg-[var(--w-green-dark)]'>green-dark</Badge> &nbsp;
                        </div>
                    </div>
                    <div>
                        <legend className='demo-legend'>组件15: Tooltip</legend>
                        <div style={{ padding: '10px' }}>
                            <Tooltip overlay={<span>Tooltip text</span>}>
                                Hover or focus me
                            </Tooltip>

                            <span> | </span>
                            <Tooltip isOpen={true} overlay={<span>Tooltip text</span>}>
                                Hover or focus me
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>

            <section className='form-demo-section'>
                <legend className='demo-legend'>组件16: Form Demo</legend>
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
                            <Textarea className='form-demo-textarea'>负责组件库维护、业务表单搭建和设计规范落地。</Textarea>
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
