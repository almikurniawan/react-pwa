import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import '../../../sass/header.scss';

export default class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	menu : {
	    		active : '/',
	    		linkMenus : [],
	    	},
	    	togglemenu : '',
	    	searchText : '',
	    }
	}	

	componentDidMount(){
		
	}

	componentWillMount(){
		this.setStateMenu(this.props);
	}

	setStateMenu(menu){
		this.setState({
			menu : menu.menu,
			searchText : menu.searchText
		});
	}

	componentWillReceiveProps(newProps){		
		this.setStateMenu(newProps);
	}

	changePage(newLink){
		let {menu} = this.state;
		menu.active = newLink;
		this.setState(menu);
	}

	hideMenu(e){
		$('#bs-example-navbar-collapse-1').removeClass('in');
	}

	renderMenu(){
		const self = this;
		return _.map(this.state.menu.linkMenus, function (value, index) {
			if(value.sub){
				let menu= [];
			    _.each(value.sub, function(v, i){
			    	menu.push(<li key={'menus_'+Math.random()}><Link onClick={()=> self.changePage(v.link)} to={v.link}>{v.title}</Link></li>);
			    });
			    return (<li onClick={(e) => self.hideMenu(e)} key={'menus_'+Math.random()} className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{value.title} <span className="caret"></span></a><ul className="dropdown-menu"> {menu} </ul></li>);
			}
			return (
				<li key={'menus_'+Math.random()} className={(value.link==self.state.menu.active) ? "active":""} onClick={(e) => self.hideMenu(e)}><Link onClick={() => self.changePage(value.link)} to={value.link}>{value.title}</Link></li>
			);
		});
	}

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
			  		<div className="container">
					    <div className="navbar-header">
					      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					      </button>
					      <a className="navbar-brand" href="#">Almi's BLOG</a>
					    </div>

					    <div className={"collapse navbar-collapse"+this.state.togglemenu} id="bs-example-navbar-collapse-1">
					      <ul className="nav navbar-nav">
					      {
					      	this.renderMenu()
					      }
					      </ul>
					      <form className="navbar-form navbar-right">
					        <div className="form-group">
					          <input type="text" className="input" placeholder="Search"></input>
					        </div>
					        <i className="glyphicon glyphicon-search"></i>
					      </form>
					    </div>
					</div>
			  	</div>
			</nav>
        );
    }
}