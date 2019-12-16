import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
	render() {
		return (
			<div className="card">
				<a href="https://github.com/reactjs" target="_blank">
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576495653880&di=749467220dacf4feda356d5b3042a098&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F24%2F20151024160112_uYtPB.jpeg" style={{width: '100px'}}/>
				</a>
				<p className="card-text">reactjs</p>
			</div>
		)
	}
}
