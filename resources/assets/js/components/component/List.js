import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../../../sass/list.scss';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : '',

        }
    }

    componentWillReceiveProps(nextProps){

    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="list-group">
              <Link to="" className="list-group-item">
                Gallery
              </Link>
              <Link to="" className="list-group-item active">
                Trending
              </Link>
            </div>
        );
    }
}