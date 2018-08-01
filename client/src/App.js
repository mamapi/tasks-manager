import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import TaskList from './tasks/TaskList'
import AddNewTask from './tasks/AddNewTask'

const App = () => {
  return (
    <BrowserRouter >
      <div className="App">
        <Route path='/' component={TaskList} />
        <Route path='/create' component={Create} />
        <Route path='/add' component={AddNewTask} />
      </div>
    </BrowserRouter>
  )
}

export default App;
