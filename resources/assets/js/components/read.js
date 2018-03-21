import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Article from './component/Article';
import Panel from './component/Panel';
import ArticleList from './component/ArticleList';
import SimpleList from './component/SimpleList';
import SideBarItem from './component/SideBarItem';
import SocialMedia from './component/SocialMedia';
import Footer from './component/Footer';

export default class Read extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:'loading',
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
        const slug = this.props.match.params.slug;
        fetch('/api/article/findBy?slug='+slug).then(function(response){
            return response.json();
        }).then(function(result){
            result['readmore'] =true;
            self.setState({
                data : result
            });
        });
    }

    componentWillReceiveProps(nextProps){
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop:'70px'}}>
                    <div className="row">
                        <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12">
                        <Article data={this.state.data}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <Panel title="Catatan">
                                <ArticleList/>
                            </Panel>
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