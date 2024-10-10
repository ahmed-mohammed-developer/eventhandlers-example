export default function ChildChangeColor({ color , onChangeColor }){

    return(
        <>
        <div style={{background: color, width: "100px", height: "100px", marginTop: "50px"}}>
            <button onClick={onChangeColor}>Change Color</button>
        </div>
        </>
    )
}