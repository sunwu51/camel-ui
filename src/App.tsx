import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { RadioGroup, Radio } from './components/Radio/Radio';
import Checkbox from './components/Checkbox/Checkbox';

function App() {
    return <>
        <Button className='bg-red-300 hover:bg-red-900'>Click</Button>
        <Input label="name:" placeholder="input your name"></Input>
        <RadioGroup label="Favorite animal" defaultValue={"dog"}>
            <Radio value='cat' id='c1'>Cat</Radio>
            <Radio value='dog'>Dog</Radio>
        </RadioGroup>
        <Checkbox>use react</Checkbox>
    </>
}
export default App