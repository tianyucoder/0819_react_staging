import React from 'react';
//import Button from './components/button'
import {Button,message,Icon,Input} from 'antd'

class App extends React.Component{

	demo = ()=>{
		message.error('操作失败')
	}

	render(){
		return (
			<div>	
				<h2>App</h2>
				<Button type="primary" onClick={this.demo}>点我</Button>
				<Icon type="down-circle" />
				<Input></Input>
			</div>
		)
	}
}

export default App;
