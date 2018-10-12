import React, { Component, Fragment } from 'react';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-primary">Hello World!</h1>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HelloWorld;