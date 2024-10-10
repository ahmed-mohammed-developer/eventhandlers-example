import { useState } from "react";

import ChildSize from './ChildSize'

export default function Size(){
    const[size, setSize] = useState(100)


    const handleChangeSize = () => {
        setSize(size === 100 ? 200 : 100)
    }

    return(
        <>
        <ChildSize size={size} onChangeSize={handleChangeSize} />
        </>
    )
}