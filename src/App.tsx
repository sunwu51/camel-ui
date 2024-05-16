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

function App() {
    return (
        <Tabs aria-label="">
            <Item title="Btn/Dialog/Card/Input/Select/Combobox" key="tab1">
                <div>
                    <Button>Default</Button>
                    <Button isDisabled={true}>Disable</Button>
                    <Button className='bg-[var(--w-red)] hover:bg-[var(--w-red-dark)]'>Red</Button>
                </div>
                <div style={{width: '300px', padding: '5px'}}>
                    <legend style={{fontWeight: 900, padding: '5px'}}>Card</legend>
                    <Card>
                        <legend style={{fontWeight: 900, padding: '5px'}}>Dialog</legend>
                        <Dialog title={"This is title"} trigger={<Button>openDialog</Button>}>
                            <div style={{ color: 'var(--w-yellow-dark)'}}>
                                <h1 style={{fontSize: '28px', fontWeight: 'bold'}}>Click outside to close</h1>
                            </div>
                        </Dialog>
                    </Card>
                </div>
                <div style={{width: '300px'}}>
                    <Input label="name:" placeholder="input your name"></Input>
                    <Input label="disable:" isDisabled={true} placeholder="disable"></Input>
                </div>
                <div style={{width: '300px'}}>
                    <legend style={{fontWeight: 900, padding: '5px'}}>Choose your color</legend>
                    <Select items={colors}></Select>
                    <Select items={colors.map(it=><><h1 style={{fontSize:'20px', fontWeight: 'bold'}}>{it}</h1><p className='show-desc'>color {it}</p></>)}></Select>
                </div>
            </Item>
            <Item title="Radio/Checkbox/Switch" key="tab2">
                <div>
                    <RadioGroup label="Favorite animal" defaultValue={"dog"}>
                        <Radio value='cat' id='c1'>Cat</Radio>
                        <Radio value='dog'>Dog</Radio>
                        <Radio isDisabled={true} value='disabled'>disabled</Radio>
                    </RadioGroup>
                </div>
                <div>
                    <legend style={{fontWeight: 900, padding: '5px'}}>Framework</legend>
                    <Checkbox>use react</Checkbox>
                    <Checkbox defaultSelected={true}>use vue</Checkbox>
                    <Checkbox isDisabled={true}>disable</Checkbox>
                    <Checkbox isDisabled={true} defaultSelected={true}>disable</Checkbox>
                    
                </div>
                <div>
                    <legend style={{fontWeight: 900, padding: '5px'}}>Switch</legend>
                    <Switch defaultSelected={true}>normal</Switch>
                    <Switch round={true}>round</Switch>
                    <Switch round={true} isDisabled={true}>disabled</Switch>
                </div>
            </Item>
            <Item title="Badge" key="tab3">
                <div>
                    <legend style={{fontWeight: 900, padding: '5px'}}>Badge</legend>
                    <div style={{padding: '10px'}}>
                    <Badge>default</Badge> &nbsp;
                    <Badge className='bg-[var(--w-red-dark)]'>red-dark</Badge> &nbsp;
                    <Badge className='bg-[var(--w-yellow-dark)]'>yellow-dark</Badge> &nbsp;
                    <Badge className='bg-[var(--w-green-dark)]'>green-dark</Badge> &nbsp;
                    </div>
                </div>
            </Item>
        </Tabs>
    );
}
export default App