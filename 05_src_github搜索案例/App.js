import React from 'react';
import Search from './components/search/search'
import List from './components/list/list'

class App extends React.Component{

	state = {
		isLoading:false, //标识是否加载中
		isFirst:true,//标识是否第一次展示界面
		users:[],//存储要展示的多个用户数据
		error:''//存储请求失败的原因
	}

	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render(){
		return (
			<div className="container">
				<section className="jumbotron">
					<h3 className="jumbotron-heading">Search Github Users</h3>
					<Search updateAppState={this.updateAppState}/>
				</section>
				<List {...this.state}/>
		 </div>
		)
	}
}

export default App;
