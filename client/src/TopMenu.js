import React from 'react'

import { Link } from 'react-router-dom'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Input
} from 'semantic-ui-react'

import ToggleLocale from './ToggleLocale'

const TopMenu = (props) => (
    <Menu>
        <Container>
            <Menu.Item as='a' header>
                Tasks manager
            </Menu.Item>
            <Menu.Item as={Link} to='/tasks'>Tasks</Menu.Item>
            <ToggleLocale />
        </Container>
    </Menu>
)

export default TopMenu