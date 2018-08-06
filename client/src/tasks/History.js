import React from 'react'
import Moment from 'moment'
import { Row, Table } from 'react-bootstrap'

const History = (props) => {
    return (
        <Row>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.history.map((item) =>
                        <tr key={item.id}>
                            <td>{Moment(item.createdAt).fromNow()}</td>
                            <td>{item.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Row>
    )
}

export default History