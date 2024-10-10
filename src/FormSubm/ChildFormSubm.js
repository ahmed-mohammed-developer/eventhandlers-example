export default function ChildFormSubm({onSubmit}){

    return(
        <>
        <form onSubmit={onSubmit} style={{marginTop : "50px"}}>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}