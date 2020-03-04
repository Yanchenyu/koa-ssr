import React, { Component } from 'react';

export default function(componentFactory) {
    class AsyncComponent extends Component {
        state = {
            component: null
        }
        async componentDidMount() {
            let { default: component } = await componentFactory();
            this.setState({
                component
            });
        }
        render() {
            const Comp = this.state.component;
            return Comp ? <Comp {...this.props} /> : null;
        }
    }
    return AsyncComponent;
}
