import React from "react";
import {Route, Switch} from "react-router-dom";
import Checking from "../components/Checking/Checking";
import AddChild from "../components/Home/AddChild";
import ListChildren from "../components/Home/ListChildren";
import Profile from "../components/Profile/Profile";


export default function ShareComponents(props) {

    //todo:Handler all using json conf
    return (<>

        <Switch>
            <Route path="/checking"><Checking {...props} /></Route>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Route path="/addChild"><AddChild {...props}  /></Route>

            <Route path="/profile"><Profile {...props} /></Route>
            <Route path="/"><ListChildren  {...props} /></Route>
        </Switch>
    </>);
}
