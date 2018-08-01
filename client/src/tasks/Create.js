import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

        axios.post('/api/tasks', { name, description })
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
                        <h3 className="panel-title">
                            ADD TASK
            </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Task List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Enter task name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Enter description" cols="80" rows="3" value={description} />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;