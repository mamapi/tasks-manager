import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

class TaskStatusButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: props.status,
            statusLocal: props.statusLocal,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps){
            this.setState({ 
                status: nextProps.status,
                statusLocal: nextProps.statusLocal,
             })
        }
      }

    updateStatus(e, id, status) {
        e.preventDefault();

        axios.put(`/api/tasks/${id}/status`, { status })
            .then((result) => {
                this.setState({ 
                    status: result.data.status,
                    statusLocal: result.data.statusLocal,
                 })
            }).catch((error) => console.error(error))
    }

    render() {
        let button
        if (this.state.status === "Completed") {
            button =
                <Button
                    bsStyle="success"
                    onClick={(e) => this.updateStatus(e, this.props.id, 'New')}
                    bsSize="small">
                    {this.state.statusLocal}
                </Button>
        } else {
            button =
                <Button
                    onClick={(e) => this.updateStatus(e, this.props.id, 'Completed')}
                    bsSize="small">
                    {this.state.statusLocal}
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