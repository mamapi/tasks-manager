import React from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import TaskStatusButton from './TaskStatusButton'
import { LocaleContext } from '../LocaleContext'


const Task = (props) => {
    return (
        <LocaleContext.Consumer>
            {context =>
                <Table.Row>
                    <Table.Cell>
                        <TaskStatusButton {...props} {...context} />
                    </Table.Cell>
                    <Table.Cell><Link to={`/show/${props.id}`}>{props.name}</Link></Table.Cell>
                </Table.Row>
            }
        </LocaleContext.Consumer>
    )
}

export default Task