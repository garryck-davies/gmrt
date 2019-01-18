import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Accessories from './components/Accessories/Accessories';
import Cart from './components/Cart/Cart';
import Headwear from './components/Headwear/Headwear';
import Hoodies from './components/Hoodies/Hoodies';
import Lifestyle from './components/Lifestyle/Lifestyle';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Shop from './components/Shop/Shop';
import Tops from './components/Tops/Tops';



export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Accessories" component={Accessories} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Headwear" component={Headwear} />
        <Route path="/Hoodies" component={Hoodies} />
        <Route path="/Lifestyle" component={Lifestyle} />
        <Route path="/Men" component={Men} />
        <Route path="/Women" component={Women} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Tops" component={Tops} />
    </Switch>
) 
