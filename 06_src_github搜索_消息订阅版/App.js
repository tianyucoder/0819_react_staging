import React from 'react';
import Search from './components/search/search'
import List from './components/list/list'

class App extends React.Component{
	render(){
		return (
			<div className="container">
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
					<Search/>
				</section>
				<List/>
		 </div>
		)
	}
}

export default App;
