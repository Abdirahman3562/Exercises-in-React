import {useState} from "react"
const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true)

    const toggle = () =>{
        setIsOn(!isOn)
    }
    return (
    <>
    <p>the Button is {isOn ? 'on' : 'off'}</p>   
       <button onClick = {toggle}>
    {isOn ? 'Turn of' : 'Turn On'}
    </button>
    
        </>
        
);
}

export default ToggleButton;