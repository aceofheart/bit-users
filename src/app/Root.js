import React, { Fragment } from "react";
import { App } from "./App";
import { About } from "./about/About"
import { Route, Switch } from "react-router-dom";

import { Footer } from "./partials/footer";

export const Root = () => {
    return (
        <Fragment>
           
            <Switch>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/" component={ App }/>
            </Switch>
            <Footer />
        </Fragment>
    )

}