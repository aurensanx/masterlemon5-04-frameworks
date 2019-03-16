import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {MembersTableComponent} from "./components/membersTable";
import {MemberDetailComponent} from "./components/memberDetail/memberDetail";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={MembersTableComponent}/>
            <Route path="/detail/:username" component={MemberDetailComponent}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
