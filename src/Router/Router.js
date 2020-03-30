import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../app/landingpage';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
            </Switch>
        );
    }
}

export default Router;