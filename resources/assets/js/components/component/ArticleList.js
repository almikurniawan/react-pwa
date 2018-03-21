import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../../../sass/articleList.scss';

export default class ArticleList extends Component {
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
            <div className="media">
                <div className="media-body">
                    <Link to=""><h5 className="media-heading">Ora Due Catatan</h5></Link>
                    Domongi ra due catatan kok panggah ae di woco
                </div>
            </div>
        );
    }
}