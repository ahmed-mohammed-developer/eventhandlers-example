export default function ChildDateDisplay({ onShowDate , date}){
    return(
        <>
        <p>{date}</p>
        <button onClick={onShowDate}>Show Date</button>
        </>
    )
}