import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap'

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
                        </dl>
                        <ButtonToolbar>
                            <Button bsStyle="success" href={`/edit/${this.state.task.id}`}>Edit</Button>
                            <Button bsStyle="danger" onClick={this.delete.bind(this, this.state.task.id)}>Delete</Button>
                            <Button bsStyle="link" href="/">Cancel</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;