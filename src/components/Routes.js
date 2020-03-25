import React from 'react'
import { Router, Switch, Route } from "react-router";
import Home from '../pages/home';
import Register from '../pages/register';
import Login from '../pages/login'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register} exact path="/register"/>
            <PrivateRoute component={Home} exact path="/"/>
            <PrivateRoute component={NotFound} />
        </Switch>
    </Router>
)


export default Routes