import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HelloWorld from './hello';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;