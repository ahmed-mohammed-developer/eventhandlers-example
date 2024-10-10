export default function ChildToggleState({ isOn, onToggle}){

    return(
        <>
        <button onClick={onToggle} style={{marginTop : "50px"}}>
            {isOn ? "ON" : "OFF"}
        </button>
        </>
    )
}