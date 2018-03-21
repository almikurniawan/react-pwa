import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Article from './component/Article';
import Panel from './component/Panel';
import List from './component/List';
import ArticleList from './component/ArticleList';
import SimpleList from './component/SimpleList';
import SideBarItem from './component/SideBarItem';
import SocialMedia from './component/SocialMedia';
import Footer from './component/Footer';

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            article : ['loading'],
            sosmed : [{
                link : 'https://www.facebook.com/almikur',
                media : 'facebook'
            },
            {
                link : 'https://www.instagram.com/almi_kurniawan/',
                media : 'instagram'
            },
            {
                link : 'https://github.com/almikurniawan',
                media : 'github'
            }]
        }
    }

    componentDidMount(){
        const self = this;
        fetch('/api/article').then(function(response){
            return response.json();
        }).then(function(result){
            self.setState({
                article : result
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop:'70px'}}>
                    <div className="row">
                        <div className="col-md-3">
                            <Panel title="Catatan">
                                <ArticleList/>
                            </Panel>
                        </div>
                        <div className="col-md-6 scrollit">
                        {
                            _.map(this.state.article, function(value, index){
                                return (<Article data={value} key={'article_'+Math.random()}/>)
                            })
                        }
                        </div>
                        <div className="col-md-3">
                            
                            <SideBarItem header="Kontak">
                                {
                                    _.map(this.state.sosmed, function(value, index){
                                        return (<SocialMedia link={value.link} media={value.media}/>)
                                    })
                                }
                            </SideBarItem>
                            <SideBarItem header="Kategori">
                                <SimpleList />
                            </SideBarItem>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}