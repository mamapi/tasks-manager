import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Row, Col, Table, Button, Glyphicon } from 'react-bootstrap';
import ListRow from './ListRow'
import LanguageSwitch from './LanguageSwitch'
import ReactObserver from 'react-event-observer'

class List extends Component {
  constructor(props) {
    super(props)
    this.observer = ReactObserver()
    this.observer.subscribe('lang switched', (lang) => {
      this.getTasks()
    })

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
          <Col xs={12}>
            <h3>Task List</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <LanguageSwitch observer={this.observer} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button bsStyle="primary" href="/create">
              <Glyphicon glyph="plus-sign" />Add Task
            </Button>
            <Table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Name</th>
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