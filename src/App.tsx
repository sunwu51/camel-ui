import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { RadioGroup, Radio } from './components/Radio/Radio';
import Checkbox from './components/Checkbox/Checkbox';
import Switch from './components/Switch/Switch';

function App() {
    return <>
        <div>
            <Button>Default</Button>
            <Button isDisabled={true}>Disable</Button>
            <Button className='bg-[var(--w-red)] hover:bg-[var(--w-red-dark)]'>Red</Button>
        </div>
        <div>
            <Input label="name:" placeholder="input your name"></Input>
            <Input label="disable:" isDisabled={true} placeholder="disable"></Input>
        </div>
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
    </>
}
export default App