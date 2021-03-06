import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'semantic-ui-react'

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
        const { name='', description } = this.state.task
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <h2>Edit Task</h2>
                    <Form.Input
                        label='Name' name='name' control='input' placeholder='Write Task Name'
                        value={name} onChange={this.onChange}
                    />
                    <Form.Field
                        label='Description' name='description' control='textarea' rows='3' placeholder='Write description'
                        value={description} onChange={this.onChange}
                    />
                    <Button.Group>
                        <Button as={Link} to={`/show/${this.state.task.id}`}>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                </Form>
            </div>
        );
    }
}

export default Edit;