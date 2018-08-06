import React, { Component } from 'react'
import axios from 'axios'
import ListRow from './ListRow'
import LanguageSwitch from './LanguageSwitch'
import ReactObserver from 'react-event-observer'
import { Container, Table, Button, Icon } from 'semantic-ui-react'

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
      <Container text style={{ marginTop: '1em' }}>
        
        <Button primary icon href="/create">
          <Icon name='add' /> Add Task
        </Button>

        <Table compact='very'>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.tasks.map(task =>
              <ListRow key={task.id} {...task} />
            )}
          </Table.Body>

        </Table>

        {/* <Row>
          <Col xs={12}>
            <LanguageSwitch observer={this.observer} />
          </Col>
        </Row> */}
        {/* <Row>
          <Col xs={12}>
            <Button bsStyle="primary" href="/create">
              <Glyphicon glyph="plus-sign" />Add Task
            </Button>
          </Col>
        </Row> */}

      </Container>
    );
  }

}

export default List