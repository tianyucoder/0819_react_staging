import React, { Component } from 'react'

export default class HomeNews extends Component {
	state = {
    newsArr: ['news001', 'news002', 'news003']
  }
	render() {
		return (
			<ul>
				{
					this.state.newsArr.map((news,index)=>{
						return <li key={index}>{news}</li>
					})
				}
			</ul>
		)
	}
}
