import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './list.css'
import Item from '../item/item'

export default class List extends Component {
	static propTypes = {
		comments:PropTypes.array.isRequired
	}
	render() {
		const {comments,deleteComment} = this.props
		return (
			<div className="col-md-8">
				<h3 className="reply">评论回复：</h3>
				<h2 style={{display:comments.length > 0 ? 'none':'block'}}>暂无评论，点击左侧添加评论！！！</h2>
				<ul className="list-group">
					{
						comments.map((comment)=>{
							return <Item key={comment.id} {...comment} deleteComment={deleteComment}/>
						})
					}
				</ul>
			</div>
		)
	}
}
