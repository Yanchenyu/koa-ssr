import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    handleClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    componentDidMount() {
        console.log('did mount');
    }

    render() {
        return (
            <div>
                <p>this is a SSR component</p>
                <div>name: {this.props.data && this.props.data.name}</div>
                <button onClick={this.handleClick}>click me add one</button>
                <div>num: {this.state.index}</div>
            </div>
        );
    }
}
