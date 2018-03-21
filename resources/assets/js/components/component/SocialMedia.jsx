import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class SocialMedia extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <a href={this.props.link}>
                <span className="soc-med">
                    <i className={'fa fa-'+this.props.media}></i> 
                </span>
            </a>
        );
    }
}