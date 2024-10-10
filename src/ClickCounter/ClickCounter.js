import { useState } from "react";

import ChildClickCounter from './ChildClickCounter'

export default function ClickCounter(){
    const [count, setCount]= useState(0)

    const handleIncrement = () => {
        setCount(count + 2)
    }

    return(
        <>
        <ChildClickCounter count={count} onIncrement={handleIncrement} />
        </>
    )
}