import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'

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
                this.props.history.push("/tasks")
            });
    }

    render() {
        const { name, description } = this.state;
        return (
                <Form onSubmit={this.onSubmit}>
                    <h2>Add Task</h2>
                    <Form.Input
                        label='Name' name='name' control='input' placeholder='Write Task Name'
                        value={name} onChange={this.onChange}
                    />
                    <Form.Field
                        label='Description' name='description' control='textarea' rows='3' placeholder='Write description'
                        value={description} onChange={this.onChange}
                    />
                    <Button.Group>
                        <Button href={'/tasks'}>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                </Form>
        );
    }
}

export default Create;