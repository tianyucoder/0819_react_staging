import React, { Component } from 'react'

export default class Home extends Component {
	componentWillUnmount(){
		console.log('---HomeWillUnmount---');
	}
	render() {
		return <h3>我是Home的内容</h3>
	}
}
