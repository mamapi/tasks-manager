import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <h2 className="task_name">{this.props.name}</h2>
                <p className="task_description">{this.props.description}</p>
            </div>
        );
    }
}
export default Task