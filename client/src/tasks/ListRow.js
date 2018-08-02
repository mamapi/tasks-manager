import React from 'react'
import { Link } from 'react-router-dom';
import TaskStatusButton from './TaskStatusButton'


const Task = (props) => {
    return (
        <tr>
            <td><Link to={`/show/${props.id}`}>{props.id}</Link></td>
            <td>
                <TaskStatusButton {...props} />
            </td>
            <td><Link to={`/show/${props.id}`}>{props.name}</Link></td>
            <td>{props.description}</td>
        </tr>
    )
}

export default Task