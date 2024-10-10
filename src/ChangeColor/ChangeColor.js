import { useState } from "react";
import ChildChangeColor from './ChildChangeColor'

export default function ChangeColor(){

    const [color, setColor] = useState('red')

    function handleChangeColor(){
        setColor(color === "red" ? "blue" : "red")
    }
    return(
        <>
        <ChildChangeColor color={color} onChangeColor={handleChangeColor} />
        </>
    )
}