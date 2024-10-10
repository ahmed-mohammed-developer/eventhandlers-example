export default function onChangeText({ onChangeText , text}) {
    return(
        <div  style={{marginTop : "50px"}}>
            <p>{text}</p>
            <button onClick={onChangeText}>Change Text</button>
    </div>
    )
    
}