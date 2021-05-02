import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Router/Home';
import Contact from './Router/Contact';

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        );
    }
}