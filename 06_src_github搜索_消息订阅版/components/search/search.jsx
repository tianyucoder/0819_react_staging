import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component{

	search = ()=>{
		const {value} = this.refs.keyword
		PubSub.publish('updateListState', {isLoading:true,isFirst:false});
		axios.get(`https://api.github.com/search/users?q=${value}`)
			.then(
				response => {
					PubSub.publish('updateListState', {isLoading:false,users:response.data.items});
				},
				error => {
					PubSub.publish('updateListState', {isLoading:false,error:error.message});
				}
			)
	}

	render(){
		return (
			<div>
				<input type="text" placeholder="enter the name you search" ref="keyword"/>&nbsp;
				<button onClick={this.search}>Search</button>
			</div>
		)
	}
}