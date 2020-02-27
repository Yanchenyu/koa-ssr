import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const data = window['renderProps'];     // 服务端赋值到该属性上去了

ReactDOM.hydrate(
    <App data={data} />,
    document.getElementById('root')
);
