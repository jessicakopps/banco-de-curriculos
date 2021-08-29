import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import Sobre from './pages/sobre/sobre';
import Cv from './pages/cv/cv';




function Routes() {
    return ( 
        <BrowserRouter>
            <Switch >]
            <Route exact path ={['', '/']} component ={Home} />
            <Route path = "/curriculo" component = { Cv } />
            <Route path = "/sobre" component = {Sobre} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

