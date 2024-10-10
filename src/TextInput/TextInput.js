import { useState } from "react";
import ChildTextInput from './ChildTextInput';

export default function TextInput() {
    const [text, setText] = useState('');

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <ChildTextInput value={text} onChange={handleChange} />
        </>
    );
}
