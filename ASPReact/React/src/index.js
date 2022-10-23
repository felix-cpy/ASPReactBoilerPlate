import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

var rootElem = document.getElementById('root');

render(
    <React.Fragment>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.Fragment>
     , rootElem)
