import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import ListRow from './ListRow'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get('/api/tasks')
      .then((res) => {
        this.setState({ tasks: res.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Task list
                </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Task</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map(task =>
                  <ListRow {...task} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

export default List