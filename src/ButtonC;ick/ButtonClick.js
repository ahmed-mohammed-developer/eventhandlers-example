import ChildButton from "./ChildButton"


export default function ButtonClick(){
    function handleClick() {
        alert ("Button Clicked!")
    }

    return(

        <>
        <ChildButton onClick={handleClick} />
        </>
    )
}