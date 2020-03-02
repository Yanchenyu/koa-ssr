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

    handleJump = () => {
        this.props.history.push('/page/list');
    }

    componentDidMount() {
        console.log(this.props);
        console.log('home page didmount');
    }

    render() {
        return (
            <div>
                <div>name: {this.props.data && this.props.data.name}</div>
                <button onClick={this.handleClick}>click me add one</button>
                <div>num: {this.state.index}</div>
                <button onClick={this.handleJump}>click me jump to list page</button>
            </div>
        );
    }
}
