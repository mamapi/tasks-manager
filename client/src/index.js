import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import LocaleProvider from './LocaleContext'
import App from './App'

ReactDOM.render((
    <LocaleProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LocaleProvider>
), document.getElementById('root'));
registerServiceWorker();
