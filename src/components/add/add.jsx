import React,{Component} from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'

export default class Add extends Component{

	static propTypes = {
		addComment:PropTypes.func.isRequired
	}

	contentRef = React.createRef()

	submit = ()=>{
		const {addComment} = this.props
		//1.获取用户输入
		const {name} = this
		const content = this.contentRef.current
		//2.校验数据
		if(!name.value || ! content.value){
			alert('名字或评论内容均不能为空')
			return 
		}
		//3.更新App的状态
		addComment({id:uuid(),name:name.value,content:content.value})
		//4.清空输入
		name.value = ''
		content.value = ''
	}

	render(){
		return (
			<div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>用户名</label>
						<input type="text" className="form-control" placeholder="用户名" ref={(input)=>{this.name = input}}/>
					</div>
					<div className="form-group">
						<label>评论内容</label>
						<textarea className="form-control" rows="6" placeholder="评论内容" ref={this.contentRef}></textarea>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}