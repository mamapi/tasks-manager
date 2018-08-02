import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap'
import TaskStatusButton from './TaskStatusButton'

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {}
        };
    }

    componentDidMount() {
        axios.get('/api/tasks/' + this.props.match.params.id)
            .then(res => {
                this.setState({ task: res.data });
                console.log(this.state.task);
            });
    }

    delete(id) {
        console.log(id);
        axios.delete('/api/tasks/' + id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        console.log("Show state:")
        console.log(this.state)
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {this.state.task.title}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.task.name}</dd>
                            <dt>Description:</dt>
                            <dd>{this.state.task.description}</dd>
                            <dt>Status</dt>
                            <dd>{this.state.task.status}</dd>
                        </dl>
                        <ButtonToolbar>
                            <Button bsStyle="success" href={`/edit/${this.state.task.id}`}>Edit</Button>
                            &nbsp;
                            <Button bsStyle="danger" onClick={this.delete.bind(this, this.state.task.id)}>Delete</Button>
                            &nbsp;
                            <Button bsStyle="link" href="/">Close</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;