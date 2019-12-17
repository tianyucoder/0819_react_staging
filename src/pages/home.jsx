import React, { Component } from 'react'
import HomeNews from './home_news'
import HomeMessage from './home_message'
import {NavLink,Switch,Route} from 'react-router-dom'

export default class Home extends Component {
	/* componentWillUnmount(){
		console.log('---HomeWillUnmount---');
	} */
	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<ul className="nav nav-tabs">
					<li>
						<NavLink className="list-group-item" activeClassName="demo" to="/home/news">News</NavLink>
					</li>
					<li>
						<NavLink className="list-group-item " activeClassName="demo" to="/home/message">Message</NavLink>
					</li>
				</ul>
				<Switch>
					<Route path="/home/news" component={HomeNews}/>	
					<Route path="/home/message" component={HomeMessage}/>	
				</Switch>			
			</div>
		)
	}
}
