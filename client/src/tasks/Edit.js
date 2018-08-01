import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {}
        };
    }

    componentDidMount() {
        axios.get('/api/task/' + this.props.match.params.id)
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

        const { name, description } = this.state.task;

        axios.put('/api/tasks/' + this.props.match.params.id, { name,description })
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
                        <h4><Link to={`/show/${this.state.task.id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Task List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="isbn">ISBN:</label>
                                <input type="text" className="form-control" name="isbn" value={this.state.task.isbn} onChange={this.onChange} placeholder="ISBN" />
                            </div>
                            <div className="form-group">
                                <label for="title">Title:</label>
                                <input type="text" className="form-control" name="title" value={this.state.task.title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label for="author">Author:</label>
                                <input type="text" className="form-control" name="author" value={this.state.task.author} onChange={this.onChange} placeholder="Author" />
                            </div>
                            <div className="form-group">
                                <label for="description">Description:</label>
                                <input type="text" className="form-control" name="description" value={this.state.task.description} onChange={this.onChange} placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <label for="published_date">Published Date:</label>
                                <input type="number" className="form-control" name="published_year" value={this.state.task.published_year} onChange={this.onChange} placeholder="Published Year" />
                            </div>
                            <div className="form-group">
                                <label for="publisher">Publisher:</label>
                                <input type="text" className="form-control" name="publisher" value={this.state.task.publisher} onChange={this.onChange} placeholder="Publisher" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;