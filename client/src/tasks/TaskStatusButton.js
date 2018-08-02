import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

class TaskStatusButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            status: props.status
        }

        this.markCompleted = this.updateStatus.bind(this);
    }

    updateStatus(e, id, status) {
        e.preventDefault();

        axios.put(`/api/tasks/${id}/status`, { status })
            .then((result) => {
                this.setState({ status: result.data.status })
            }).catch((error) => console.error(error))
    }

    render() {
        let button
        console.log('TaskStatusButton state:')
        console.log(this.state)

        if (this.state.status === "Completed") {
            button =
                <Button
                    bsStyle="success"
                    onClick={(e) => this.updateStatus(e, this.props.id, 'New')}
                    bsSize="small">
                    {this.state.status}
                </Button>
        } else {
            button =
                <Button
                    onClick={(e) => this.updateStatus(e, this.props.id, 'Completed')}
                    bsSize="small">
                    {this.state.status}
                </Button>
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}

export default TaskStatusButton