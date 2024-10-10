import ChildFormSubm from './ChildFormSubm'

export default function FormSubm(){
    function handleSubmit(e){
        e.preventDefault()
        alert("From Submitted")
    }

        return(
            <ChildFormSubm onSubmit={handleSubmit} />
        )
    }
