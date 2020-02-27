import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class extends Component {

    constructor(props) {
        super(props);
        if (typeof window === 'undefined') {
            // server
            this.state = {
                index: 0
            };
            console.log('here is server side constructor');
        } else {
            // client
            console.log('here is client side constructor');
            console.log('state index: ', this.state);
        }
    }

    handleClick = () => {
        console.log('lalalalala!!!!');
    }

    componentDidMount() {
        console.log('did mount');
    }

    render() {
        return (
            <div>
                <p>this is a SSR component</p>
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}
