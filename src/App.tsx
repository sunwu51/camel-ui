import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
    return <>
        <Button className='bg-red-300 hover:bg-red-900'>Click</Button>
        <Input label="name:" placeholder="input your name" validate={(v)=>v.length>2 && v.length< 10 ? null : "len (2,10)"}></Input>
        <Input label="name:" placeholder="input your name" direction='column' validate={(v)=>v.length>2 && v.length< 10 ? null : "len (2,10)"}></Input>
    </>
}
export default App