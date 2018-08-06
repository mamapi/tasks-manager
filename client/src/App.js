import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactObserver from 'react-event-observer'

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

import LocaleProvider, { LocaleContext } from './LocaleContext'
import ToggleLocale from './ToggleLocale'


class App extends Component {
    render() {
        return (
            <LocaleProvider>
                <Router>
                    <div>
                        <TopMenu />

                        <Container text style={{ marginTop: '1em' }}>
                            <Switch>
                                <Route path='/tasks' component={() =>
                                    <LocaleContext.Consumer>
                                        {localeVal =>
                                            <TaskList localeVal={localeVal} />
                                        }
                                    </LocaleContext.Consumer>
                                } />
                                <Route path='/edit/:id' component={Edit} />
                                <Route path='/create' component={Create} />
                                <Route path='/show/:id' component={Show} />
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </LocaleProvider>
        )
    }
}

export default App