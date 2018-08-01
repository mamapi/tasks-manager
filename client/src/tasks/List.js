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
      <Grid>
        <Row>
          <Col xs={12}><h3>Task list</h3></Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Button bsStyle="primary" href="/create">
              <Glyphicon glyph="plus-sign" />Add task
            </Button>
            <Table>
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
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default List