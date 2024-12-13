import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"
const Task = ({ task, day , remainder , onDelete }) => {
    return (
        <div className="pb-2 px-2 border-dotted border-b-2 mt-5 border-zinc-600">
            <h3 className="flex justify-between text-xl font-semibold text-zinc-800">
                {task} 
                <FaTimes className="text-2xl text-red-600 cursor-pointer" onClick={onDelete}/>
            </h3>
            <h4 className="text-sm text-zinc-600">{day}</h4>
            <h5>{remainder}</h5>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.string ,
    day: PropTypes.string ,
    remainder: PropTypes.boolean ,
    onDelete: PropTypes.func,
}
export default Task