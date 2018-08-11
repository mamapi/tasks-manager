import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import TaskList from './tasks/List'
import Create from './tasks/Create'
import Edit from './tasks/Edit'
import Show from './tasks/Show'
import { LocaleContext } from './LocaleContext'

const Main = () => (
    <LocaleContext.Consumer>
        {context =>
            <Container text style={{ marginTop: '1em' }}>
                <Switch>
                    <Route path='/tasks' render={(props) => <TaskList {...props} {...context} />} />
                    <Route path='/edit/:id' component={Edit} />
                    <Route path='/create' component={Create} />
                    <Route path='/show/:id' render={(props) => <Show {...props} {...context} />} />
                </Switch>
            </Container>
        }
    </LocaleContext.Consumer>
)

export default Main