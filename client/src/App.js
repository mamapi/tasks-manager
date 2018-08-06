import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
} from 'semantic-ui-react'

import TopMenu from './TopMenu'
import TaskList from './tasks/List'
import Create from './tasks/Create'
import Edit from './tasks/Edit'
import Show from './tasks/Show'

const App = () => (
    <Router>
        <div>
            <TopMenu />
            <Switch>
                <Route path='/tasks' component={TaskList} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/create' component={Create} />
                <Route path='/show/:id' component={Show} />
            </Switch>
        </div>
    </Router>
)

export default App