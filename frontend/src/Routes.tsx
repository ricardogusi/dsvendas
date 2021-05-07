import Dashboard from 'pages/Dashboard/Dashboard';
import Home from 'pages/Home/Home';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard" >
                    <Dashboard/>
                </Route>
            </Switch>            
        </BrowserRouter>
    )
}
