import React, { Component } from 'react'
import axios from 'axios'
import Task from './Task'

class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }
    }

    componentWillMount() {
        axios.get('/api/tasks')
            .then((response) => {
                this.setState({ tasks: response.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h1 className="task_heading">All tasks</h1>
                {this.state.tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))}
            </div>
        );
    }
}

export default TaskList