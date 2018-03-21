import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class ListHorizontal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="/images/culture-landscape.jpg" alt="..."/>
                    <div className="caption">
                        <h3>Thumbnail label</h3>
                        <p>...</p>
                        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                    </div>
                </div>
            </div>
        );
    }
}