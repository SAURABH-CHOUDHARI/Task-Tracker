import PropTypes from "prop-types"
import Task from "./Task"
const Tasks = ({ tasks, onDelete }) => {

    return (
        <>
        <div className="px-10 py-5">
        {tasks.map((task, idx) =>(
            
            <Task key={idx} task={task.text} day={task.day} remainder={task.remainder} onDelete={onDelete}
            ></Task>
        ))}
        </div>
        </>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array ,
    onDelete : PropTypes.func,
}


export default Tasks