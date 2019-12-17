import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component{

	search = ()=>{
		const {updateAppState} = this.props
		const {value} = this.refs.keyword
		updateAppState({isLoading:true,isFirst:false})
		axios.get(`https://api.github.com/search/users?q=${value}`)
			.then(
				response => {
					updateAppState({isLoading:false,users:response.data.items})
				},
				error => {
					updateAppState({isLoading:false,error:error.message})
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