import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {

	delete = (id)=>{
		//1.获取评论的id
		//2.去App的状态中找这个id对应的评论，然后删掉
		console.log('删除了',id);
	}

	render() {
		const {id,name,content} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a href="#1" onClick={()=>{this.delete(id)}}>删除</a>
				</div>
				<p className="user"><span >{name}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		)
	}
}
