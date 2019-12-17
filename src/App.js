import React from 'react';
import Home from './pages/home'
import About from './pages/about'
import {Route,NavLink,Switch} from 'react-router-dom'

class App extends React.Component{
	render(){
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}
							<NavLink className="list-group-item" to="/about" activeClassName="demo">About</NavLink>
							<NavLink className="list-group-item" to="/home" activeClassName="demo">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* <h3>我是Home的内容</h3>
								<h3>我是About的内容</h3> */}
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
