import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            header :{
                menu : {
                    linkMenus : [
                    {
                        link : '/',
                        title : 'Beranda',
                    },
                    // {
                    //     link : '/article',
                    //     title : 'Article',
                    //     sub : [
                    //     {
                    //         link : '/post',
                    //         title : 'Post',
                    //     }
                    //     ]
                    // },
                    {
                        link : '/post',
                        title : 'Blog',
                    }],
                }
            }
        }
    }
    render() {
        return (
            <div className="">
                <Header {...this.state.header}/>
                {this.props.children}
            </div>
        );
    }
}