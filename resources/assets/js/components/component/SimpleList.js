import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../../../sass/simple-list.scss';

export default class SimpleList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul className="simple-list">
                <li><Link to="test">Hoby</Link></li>
                <li><Link to="test">Olahraga</Link></li>
                <li><Link to="tes">Photoghrapy</Link></li>
            </ul>
        );
    }
}