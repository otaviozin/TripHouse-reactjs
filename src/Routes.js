import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Pages/Home.js";
import Rent from "./Pages/Rent.js";
import Success from "./Pages/Success.js";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rent" component={Rent} />
                <Route path="/success" component={Success} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;