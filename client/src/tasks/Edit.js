import React, { Component } from 'react'
import axios from 'axios'
import { Button, ButtonToolbar, FormGroup, ControlLabel } from 'react-bootstrap'

class Edit extends Component {

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

    onChange = (e) => {
        const state = this.state.task
        state[e.target.name] = e.target.value;
        this.setState({ task: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, status } = this.state.task;
        axios.put('/api/tasks/' + this.props.match.params.id, { name, description, status })
            .then((result) => {
                this.props.history.push("/show/" + this.props.match.params.id)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Edit task
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>

                            <FormGroup>
                                <ControlLabel>Name</ControlLabel>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.task.name}
                                    onChange={this.onChange}
                                    placeholder="Enter task name" />

                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Description</ControlLabel>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={this.state.task.description}
                                    onChange={this.onChange}
                                    placeholder="Enter description"
                                    cols="80" rows="3"
                                />
                            </FormGroup>

                            <ButtonToolbar>
                                <Button bsStyle="primary" type="submit">Submit</Button>
                                <Button bsStyle="link" href={`/show/${this.state.task.id}`}>Cancel</Button>
                            </ButtonToolbar>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;