import { useState } from "react";

import ChildDisplayMessage from './ChildDisplayMessage'

export default function DisplayMessage(){
    const [message, setMessage] =useState("")

    function handleShowNessage(){
        setMessage("Hello , World!")
    }

    return(
        <>
        <ChildDisplayMessage message={message} onShowMessage={handleShowNessage} />
        </>
    )
}