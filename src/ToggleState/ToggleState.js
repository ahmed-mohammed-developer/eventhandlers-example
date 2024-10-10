import { useState } from "react";
import ChildToggleState from './ChildToggleState'

export default function ToggleState(){
    const [isOn, setIsOn] = useState(false)

    function handleToggle(){
        setIsOn(!isOn)
    }
    return(
        <>
        <ChildToggleState isOn={isOn} onToggle={handleToggle} />
        </>
    )
}

