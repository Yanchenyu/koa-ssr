import React from 'react';

export default function asyncComponent({ loader, Placeholder }) {
    let Component = null;
    return class AsyncRouteComponent extends React.Component {
        state = {
            Component
        }

        static load() {
            return loader().then(ResolvedComponent => {
                Component = ResolvedComponent.default || ResolvedComponent;
            });
        }

        componentWillMount() {
            AsyncRouteComponent.load().then(this.updateState);
        }

        updateState = () => {
            // Only update state if we don't already have a reference to the
            // component, this prevent unnecessary renders.
            if (this.state.Component !== Component) {
                this.setState({
                    Component,
                });
            }
        }

        render() {
            const { Component: ComponentFromState } = this.state;
            if (ComponentFromState) {
                return <ComponentFromState {...this.props} />;
            }
            if (Placeholder) {
                return <Placeholder {...this.props} />;
            }
            return null;
        }
    };
}
