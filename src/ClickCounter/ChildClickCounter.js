export default function ChildClickCounter({ count , onIncrement }) {
return(
    <>
    <p  style={{marginTop : "50px"}}>Count: {count}</p>
    <button onClick={onIncrement}>Increment</button>
    </>
)
}