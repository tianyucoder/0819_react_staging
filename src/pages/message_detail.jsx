import React, { Component } from 'react'

const messageDetails = [
  {id: 1, title: 'Message1', content: '我爱你, 中国'},
  {id: 2, title: 'Message2', content: '我爱你, atguigu'},
  {id: 3, title: 'Message3', content: '我爱你, 0819'},
]

export default class MessageDetail extends Component {
	render() {
		const {id} = this.props.match.params
		let result = messageDetails.find((detail)=>{
			return detail.id === id*1
		})
		return (
			<ul>
				<li>ID:{result.id}</li>
				<li>TITLE:{result.title}</li>
				<li>CONTENT:{result.content}</li>
			</ul>
		)
	}
}
