import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Detail from './pages/Detail'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "./context";
function Index(){
    return (
        <Provider>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
