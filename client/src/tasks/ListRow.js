import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import TaskStatusButton from './TaskStatusButton'
import { LocaleContext } from '../LocaleContext'


const Task = (props) => {
    return (
        <Table.Row>
            <Table.Cell>
                <LocaleContext.Consumer>
                    {localeVal =>
                        <TaskStatusButton {...props} localeVal={localeVal} />
                    }
                </LocaleContext.Consumer>
            </Table.Cell>
            <Table.Cell><Link to={`/show/${props.id}`}>{props.name}</Link></Table.Cell>
        </Table.Row>
    )
}

export default Task