import React from 'react'
import { Link } from 'react-router-dom';


const Task = (props) => {
    return (
        <tr>
            <td><Link to={`/show/${props.id}`}>{props.id}</Link></td>
            <td>{props.name}</td>
            <td>{props.description}</td>
        </tr>
    )
}

// const Task = (props) => {
//     return (
//         <div className="task">
//             <h2 className="task_name">{props.name}</h2>
//             <div className="task_description">{props.description}</div>
//             <button className="edit">Edit</button>
//             <button className="delete" onClick={props.onDeleteClicked.bind(this, props.id)}>Delete</button>
//         </div>
//     )
// }

export default Task