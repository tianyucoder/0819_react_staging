import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../item/item'

export default class List extends Component {

	state = {
		isLoading:false, //标识是否加载中
		isFirst:true,//标识是否第一次展示界面
		users:[],//存储要展示的多个用户数据
		error:''//存储请求失败的原因
	}

	componentDidMount(){
		PubSub.subscribe('updateListState', (msg,stateObj)=>{
			//函数体
			this.setState(stateObj)
		});
	}

	render() {
		const {users,isLoading,isFirst,error} = this.state
		if(isLoading){
			return <h2>Loading....</h2>
		}else if(isFirst){
			return <h2>输入名，然后点击搜索</h2>
		}else if(error){
			return <h2>{error}</h2>
		}else{
			return (
				<div className="row">
					{
						users.map((user)=>{
							return <Item key={user.login} {...user}/>
						})
					}
				</div>
			)
		}
	}
}
