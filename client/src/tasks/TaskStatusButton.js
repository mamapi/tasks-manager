import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'

class TaskStatusButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: props.status,
            statusLocal: props.statusLocal,
            locale: props.localeVal.locale
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                status: nextProps.status,
                statusLocal: nextProps.statusLocal,
                locale: nextProps.localeVal.locale,
            })
        }
    }

    updateStatus(e, id, status) {
        e.preventDefault();

        axios.put(`/api/tasks/${id}/status`, { status }, { headers: { language: this.state.locale } })
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
                    size="small"
                    color='green'
                    onClick={(e) => this.updateStatus(e, this.props.id, 'New')}>
                    {this.state.statusLocal}
                </Button>
        } else {
            button =
                <Button
                    basic
                    size="small"
                    onClick={(e) => this.updateStatus(e, this.props.id, 'Completed')}>
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