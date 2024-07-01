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
        <>
            <div className='flex flex-row'>
                <div>
                    <div style={{ width: '300px', padding: '5px' }}>

                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件1: Button</legend>
                        <Button>Default</Button>
                        <Button isDisabled={true}>Disable</Button>
                        <Button className='bg-[var(--w-red)] hover:bg-[var(--w-red-dark)]'>Red</Button>
                    </div>
                    <div style={{ width: '300px', padding: '5px' }}>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件2: Card</legend>
                        <Card>
                            <legend style={{ fontWeight: 900, padding: '5px' }}>组件3: Dialog</legend>
                            <Dialog title={"This is title"} trigger={<Button>openDialog</Button>}>
                                <div style={{ color: 'var(--w-yellow-dark)' }}>
                                    <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Click outside to close</h1>
                                </div>
                            </Dialog>
                        </Card>
                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件4: Inputfile</legend>
                        <div style={{ padding: '10px' }}>
                            <div>
                                <Inputfile>
                                    <Button>Upload</Button>
                                </Inputfile>
                            </div>
                        </div>
                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件5: Textarea</legend>
                        <div className='p-[5px]'>
                            <Textarea className=' w-[288px]'>123</Textarea>
                        </div>
                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件6: Tabs</legend>
                        <div className='p-[5px]'>
                            <Tabs aria-label="">
                                <Item title="tab1" key="tab1">Panel 1</Item>
                                <Item title="tab2" key="tab2">Panel 2</Item>
                                <Item title="tab3" key="tab3">Panel 3</Item>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className='h-[100vh] mx-[10px] border-2'></div>
                <div>
                    <div style={{ width: '300px' }}>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件7: Input</legend>
                        <Input label="name:" placeholder="input your name"></Input>
                        <Input isDisabled={true} placeholder="disable"></Input>
                    </div>
                    <div style={{ width: '300px' }}>
                        <Select label={"组件8: Select"} items={colors}></Select>
                        <Select items={colors.map(it => <><h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>{it}</h1><p className='show-desc'>color {it}</p></>)}></Select>
                    </div>
                    <div style={{ width: '300px' }}>
                        <Combobox label={"组件9: Combobox"} items={colors} getFilter={getFilter}></Combobox>
                        <Combobox items={colors.map(it => ({ itemToJsx: () => { return <><h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>{it}</h1><p className='show-desc'>color {it}</p></> }, itemToString: () => it }))} getFilter={getFilter}></Combobox>
                    </div>

                </div>
                <div className='h-[100vh] mx-[10px] border-2'></div>
                <div>
                    <legend style={{ fontWeight: 900, padding: '5px' }}>组件10: Details</legend>
                    <Card style={{ width: '400px' }}>
                        <Details title={"This is a title open to see details"}
                            children={<h1 style={{ fontSize: '3rem' }}>Hello World~</h1>}
                        ></Details>
                    </Card>
                    <div>
                        <RadioGroup label="组件11: Radio" defaultValue={"dog"}>
                            <Radio value='cat' id='c1'>Cat</Radio>
                            <Radio value='dog'>Dog</Radio>
                            <Radio isDisabled={true} value='disabled'>disabled</Radio>
                        </RadioGroup>
                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件12: Checkbox</legend>
                        <Checkbox>use react</Checkbox>
                        <Checkbox defaultSelected={true}>use vue</Checkbox>
                        <Checkbox isDisabled={true}>disable</Checkbox>
                        <Checkbox isDisabled={true} defaultSelected={true}>disable</Checkbox>

                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件13: Switch</legend>
                        <Switch defaultSelected={true}>normal</Switch>
                        <Switch round={true}>round</Switch>
                        <Switch round={true} isDisabled={true}>disabled</Switch>
                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件14: Badge</legend>
                        <div style={{ padding: '10px' }}>
                            <Badge>default</Badge> &nbsp;
                            <Badge className='bg-[var(--w-red-dark)]'>red-dark</Badge> &nbsp;
                            <Badge className='bg-[var(--w-yellow-dark)]'>yellow-dark</Badge> &nbsp;
                            <Badge className='bg-[var(--w-green-dark)]'>green-dark</Badge> &nbsp;
                        </div>
                    </div>
                    <div>
                        <legend style={{ fontWeight: 900, padding: '5px' }}>组件15: Tooltip</legend>
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
        </>
    );
}
export default App