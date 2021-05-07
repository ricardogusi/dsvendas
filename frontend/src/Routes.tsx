import Dashboard from 'Pages/Dashboard/Dashboard';
import Home from 'Pages/Home/Home';
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
