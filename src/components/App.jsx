import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class extends Component {

    handleClick = () => {
        console.log('lalalalala!!!!')
    }

    render() {
        return (
            <div>
                <p>this is a SSR component</p>
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}
