import React, { Component } from 'react'
import axios from 'axios'
import ListRow from './ListRow'
import { Container, Table, Button, Icon } from 'semantic-ui-react'

class List extends Component {
  constructor(props, context) {
    super(props)

    this.state = {
      tasks: [],
      locale: props.localeVal.locale
    }
  }

  getTasks() {
    axios.get('/api/tasks', { headers: { language: this.state.locale } })
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

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ locale: nextProps.localeVal.locale, }, () => {
        this.getTasks()

      })
    }
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }

}

export default List