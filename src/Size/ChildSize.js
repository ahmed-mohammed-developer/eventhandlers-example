export default function ChildSize({ onChangeSize , size}) {
    return(
        <>
        <div style={{width: size, height: size, backgroundColor: 'gray', marginBlock: "100px"}}></div>
        <button onClick={onChangeSize}>Change Size</button>
        </>
    )
}