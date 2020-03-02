import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// pages component
import Home from './Home';
import List from './List';

export default function() {
    return (
        <Router>
            <Route path="/page/home" exact component={Home} />
            <Route path="/page/list" exact component={List} />
        </Router>
    );
}
