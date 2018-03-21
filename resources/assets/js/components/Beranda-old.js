import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Article from './component/Article';
import Panel from './component/Panel';
import List from './component/List';
import ArticleList from './component/ArticleList';
import SimpleList from './component/SimpleList';
import SideBarItem from './component/SideBarItem';
import SocialMedia from './component/SocialMedia';
import ListHorizontal from './component/ListHorizontal';
import '../../sass/beranda.scss';

export default class Beranda extends Component {
    constructor(props){
        super(props);
        this.state = {
            article: []
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
                <div className="container-fluid content slider">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="/images/culture-landscape.jpg" className="img-responsive" alt="Chania" style={{width:'100%', height:'100vh'}}/>
                                <div className="slide-content">
                                    Hallo My name is Almi Kurniawan. I am 23 years old.
                                </div>
                            </div>
                            <div className="item">
                                <img src="/images/stage.jpg" className="img-responsive" alt="Chania" style={{width:'100%', height:'100vh'}}/>
                                <div className="slide-content">
                                    Hallo My name is Almi Kurniawan. I am 23 years old.
                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="container" style={{marginTop:'20px'}}>
                    <SideBarItem header="Top">
                        <div className="row">
                            <ListHorizontal/>
                            <ListHorizontal/>
                            <ListHorizontal/>
                        </div>
                    </SideBarItem>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="">
                                <List/>
                            </div>
                        </div>
                        <div className="col-md-6 scrollit">
                        {
                            _.map(this.state.article, function(value, index){
                                return (<Article data={value} key={'article_'+Math.random()}/>)
                            })
                        }
                        </div>
                        <div className="col-md-3">
                            <Panel title="Hot News">
                                <ArticleList/>
                            </Panel>
                            <SideBarItem header="Join With Us">
                                <SocialMedia link="https://www.facebook.com" media="facebook"/>
                                <SocialMedia link="https://www.facebook.com" media="instagram"/>
                                <SocialMedia link="https://www.facebook.com" media="twitter"/>
                            </SideBarItem>
                            <SideBarItem header="Kategori">
                                <SimpleList />
                            </SideBarItem>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}