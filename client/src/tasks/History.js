import React from 'react'
import Moment from 'moment'
import { Table } from 'semantic-ui-react'

const History = (props) => {
    return (
        <Table compact='very'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.history.map((item) =>
                    <Table.Row key={item.id}>
                        <Table.Cell>{Moment(item.createdAt).fromNow()}</Table.Cell>
                        <Table.Cell>{item.description}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    )
}

export default History