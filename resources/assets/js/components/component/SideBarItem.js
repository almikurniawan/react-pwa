import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../sass/side-bar-item.scss';

export default class SideBarItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="side-bar">
                <div className="side-bar-header">
                    {this.props.header}
                </div>
                <div className="side-bar-body">
                    {this.props.children}
                </div>
            </div>

        );
    }
}