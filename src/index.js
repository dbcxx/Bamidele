import React from "react";
import { ReactDOM } from "react";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.register();