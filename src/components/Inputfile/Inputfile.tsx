/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import './Inputfile.css'
import BaseProps from '../BaseProps'

interface InputfileProps extends BaseProps {
    children: React.ReactElement,
    name?: string,
    onChange?: (event: any) => void
}

function Inputfile(props: InputfileProps) {
    const ref = React.useRef(null);
    const [file, setFile] = React.useState(null);
    const onChange = function() {
        const f = (ref.current! as any).files[0];
        if (f) {
          setFile(f);
        }
        props.onChange && props.onChange(f);
    }
    return <span className="inputfile-container">
        {props.children ? React.cloneElement(props.children, {onClick: ()=> (ref.current! as any).click()}) : <button type="button" onClick={()=>(ref.current! as any).click()}>upload</button>}
        {file &&
            <span className="inputfile-name">{(file as any).name}</span>
        }
        <input type="file" name={props.name} hidden ref={ref}  onChange={()=>{onChange(); (ref.current! as any).value = ''} } />
    </span>
}

export default Inputfile