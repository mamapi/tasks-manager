import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from './tasks/List';
import Create from './tasks/Create'
import Edit from './tasks/Edit';
import Show from './tasks/Show';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={List} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
