import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home.js';
import Rent from './Pages/Rent.js';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/rent' component={Rent} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;