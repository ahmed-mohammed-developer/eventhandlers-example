export default function ChildDisplayMessage({ message , onShowMessage}) {

    return(
        <div  style={{marginTop : "50px"}}>
        <p>{message}</p>
        <button onClick={onShowMessage}>Show Message</button>
        </div>
    )
}