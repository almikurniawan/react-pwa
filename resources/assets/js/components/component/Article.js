import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../../../sass/article.scss';
import SocialMedia from './SocialMedia';
export default class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
        	share : false
        }
    }
    share(e){
    	this.setState({
    		share : !this.state.share
    	})
    }

    componentWillReceiveProps(nextProps){
    	this.props = nextProps;
    }

    render() {
    	if(this.props.data==null){
    		return (<h2>Not Found</h2>);
    	}
    	if(this.props.data=='loading'){
    		return (<h4>Loading...</h4>);
    	}
        return (
    			<div className="thumbnail">
					<img src={this.props.data.article_image} alt="..."/>
					<div className="caption">
						<Link to={'/read/'+this.props.data.article_slug} ><h3>{this.props.data.article_title}</h3></Link>
						<p>{moment(this.props.data.article_created_at).format('dddd DD MMMM YYYY')}</p>
						<p>{(this.props.data.readmore) ? this.props.data.article_content : this.props.data.article_content.substring(0,100)} </p>
						<div className="clearfix">
							{
								(this.props.data.readmore) ? '' : <Link to={'/read/'+this.props.data.article_slug}>Selengkapnya</Link>
							}
							<div className="pull-right">
							<a href="javascript:;" onClick={e=>this.share(e)}><i className="glyphicon glyphicon-share-alt"></i> Share</a>
							</div>
						</div>
							{
								this.state.share ? 
								<div>
									<hr/>
									<SocialMedia link={'https://www.facebook.com/sharer/sharer.php?u=https://almikurniawan.com/read/'+this.props.data.article_slug} media="facebook" />
									<SocialMedia link={'/read/'+this.props.data.article_slug} media="instagram" />
									<SocialMedia link={'/read/'+this.props.data.article_slug} media="twitter" />
								</div>
								:''
							}
					</div>
			    </div>
        );
    }
}