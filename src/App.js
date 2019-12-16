import React from 'react';
import Add from './components/add/add.jsx'
import List from './components/list/list'

class App extends React.Component{

	state = {
		comments:[]
	}

	addComment = (commentObj)=>{
		//1.获取原状态
		const comments = [...this.state.comments]
		//2.追加一个评论到comments
		comments.unshift(commentObj)
		//3.更新状态
		this.setState({comments})
	}

	render(){
		const {comments} = this.state
		return (
			<div>
				<header className="site-header jumbotron">
					<div className="container">
						<div className="row">
							<div className="col-xs-12">
								<h1>请发表对React的评论</h1>
							</div>
						</div>
					</div>
				</header>
				<div className="container">
					<Add addComment={this.addComment}/>
					<List comments={comments}/>
				</div>
			</div>
		)
	}
}

export default App;
