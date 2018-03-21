import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Panel extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="panel panel-default">
			  <div className="panel-heading" style={{fontWeight:'bold'}}>{this.props.title}</div>
			  <div className="panel-body">
			    {this.props.children}
			  </div>
			</div>
        );
    }
}