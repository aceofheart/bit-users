import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root } from './app/Root';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from "react-router-dom"


const app = (
    <HashRouter>
        <Root/>
    </HashRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
