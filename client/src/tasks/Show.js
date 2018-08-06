import React, { Component } from 'react';
import axios from 'axios';
import { Button, ButtonToolbar, Row } from 'react-bootstrap'
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
                this.props.history.push("/")
            });
    }

    render() {
        console.log("Show state:")
        console.log(this.state)
        return (
            <div className="container">
                <Row>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                Task
                        </h3>
                        </div>
                        <div className="panel-body">
                            <dl>
                                <dt>Name:</dt>
                                <dd>{this.state.task.name}</dd>
                                <dt>Description:</dt>
                                <dd>{this.state.task.description}</dd>
                                <dt>Status</dt>
                                <dd>{this.state.task.statusLocal}</dd>
                            </dl>
                        </div>
                    </div>
                </Row>

                <History history={this.state.history} />

                <Row>
                    <ButtonToolbar>
                        <Button bsStyle="success" href={`/edit/${this.state.task.id}`}>Edit</Button>
                        &nbsp;
                            <Button bsStyle="danger" onClick={this.delete.bind(this, this.state.task.id)}>Delete</Button>
                        &nbsp;
                            <Button bsStyle="link" href="/">Close</Button>
                    </ButtonToolbar>
                </Row>

            </div>
        );
    }
}

export default Show;