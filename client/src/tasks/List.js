import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Grid, Row, Col, Table, Button, Glyphicon } from 'react-bootstrap';
import ListRow from './ListRow'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  getTasks() {
    axios.get('/api/tasks')
      .then((res) => {
        this.setState({ tasks: res.data })
      })
      .catch((err) => {
        console.log(err);
      })

  }

  componentDidMount() {
    this.getTasks()
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}><h3>Asana v2</h3></Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Button bsStyle="primary" href="/create">
              <Glyphicon glyph="plus-sign" />Add Task
            </Button>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map(task =>
                  <ListRow key={task.id} {...task} />
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default List