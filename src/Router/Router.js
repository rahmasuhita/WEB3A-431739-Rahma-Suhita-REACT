import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../Home/LandingPage';


class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/home" component={LandingPage}/>
            </Switch>
        );
    }
}

export default Router;