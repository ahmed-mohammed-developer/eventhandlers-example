import { useState } from "react";

import ChildChangeText from './ChildChangeText'

export default function ChangeText(){
    const [text, setText] = useState("Initial Text")

    const handleChangeText = () => {
        setText('Updated Text')
    }

    return(
        <>
        <ChildChangeText text={text} onChangeText={handleChangeText} />
        </>
    )
}