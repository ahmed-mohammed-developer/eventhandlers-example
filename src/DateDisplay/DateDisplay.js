import { useState } from "react";

import ChildDateDisplay from './ChildDateDisplay'

export default function DateDisplay(){
    const [date, setDate] = useState('')

    const handleShowDate = () => {
        setDate(new Date().toLocaleDateString())
    }

    return(
        <>
        <ChildDateDisplay date={date} onShowDate={handleShowDate} />
        </>
    )
}