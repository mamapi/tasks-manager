import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap'


class Create extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description } = this.state;
        const status = 'New'

        axios.post('/api/tasks', { name, description, status })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { name, description } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add task</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <ControlLabel>Name</ControlLabel>
                                <input type="text"
                                    className="form-control"
                                    name="name" value={name}
                                    onChange={this.onChange}
                                    placeholder="Enter task name" />
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Description</ControlLabel>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={description}
                                    onChange={this.onChange}
                                    placeholder="Enter description"
                                    cols="80" rows="3"
                                />
                            </FormGroup>

                            <ButtonToolbar>
                                <Button bsStyle="success" type="submit">Submit</Button>
                                <Button bsStyle="link" href="/">Cancel</Button>
                            </ButtonToolbar>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;