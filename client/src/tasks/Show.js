import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import History from './History'

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {},
            history: []
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const history = await axios.get(`/api/tasks/${id}/history`)
        const task = await axios.get(`/api/tasks/${id}`)
        this.setState({ task: task.data, history: history.data });
    }

    delete(id) {
        console.log(id);
        axios.delete('/api/tasks/' + id)
            .then((result) => {
                this.props.history.push("/tasks")
            });
    }

    render() {
        return (
            <div>
                <h1>Task</h1>
                <dl>
                    <dt>Name:</dt>
                    <dd>{this.state.task.name}</dd>
                    <dt>Description:</dt>
                    <dd>{this.state.task.description}</dd>
                    <dt>Status</dt>
                    <dd>{this.state.task.statusLocal}</dd>
                </dl>

                <History history={this.state.history} />

                <Button.Group>
                    <Button color="green" href={`/edit/${this.state.task.id}`}>Edit</Button>
                    <Button.Or />
                    <Button color="red" onClick={this.delete.bind(this, this.state.task.id)}>Delete</Button>
                    <Button.Or />
                    <Button href="/tasks">Close</Button>
                </Button.Group>

            </div>
        );
    }
}

export default Show;