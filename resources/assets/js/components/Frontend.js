import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import Beranda from './Beranda';
import Post from './Post';
import Read from './Read';

export default class Frontend extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <BrowserRouter history={history}>
                <div>
                    <App/>
                    <Route exact path = "/" component={Beranda}/>
                    <Route exact path = "/post" component={Post}/>
                    <Route exact path = "/read/:slug" component={Read}/>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Frontend />, document.getElementById('root'));
}
