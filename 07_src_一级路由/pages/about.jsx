import React, { Component } from 'react'

export default class About extends Component {
	componentWillUnmount(){
		console.log('---AboutWillUnmount---');
	}
	render() {
		return <h3>我是About的内容</h3>
	}
}
