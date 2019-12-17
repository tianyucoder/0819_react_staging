import React, { Component } from 'react'
import Item from '../item/item'

export default class List extends Component {
	render() {
		const {users,isLoading,isFirst,error} = this.props
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
