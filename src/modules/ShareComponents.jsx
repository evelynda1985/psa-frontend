import React from "react";

import About from "../About";
import Home from "../Home";
import Topics from "../Topics";

import {   Switch, Route  } from "react-router-dom";
import ProductList from "../components/products/ProductList/ProductList";
import ProductEdit from "../components/products/ProductEdit";
import Checking from "../../../../projects/psa-frontend/src/components/Checking/Checking";
import AddChild from "../../../../projects/psa-frontend/src/components/Home/AddChild";
export default function ShareComponents(props) {
 
  //todo:Handler all using json conf
    return (<>
    
                <Switch>
                  <Route path="/checking"><Checking {...props} /></Route>
                  <Route path="/addChild"><AddChild {...props}  /></Route>

                  <Route path="/"><Home  {...props} /></Route>
                </Switch>
    </>);
}