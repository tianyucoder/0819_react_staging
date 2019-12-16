import React from 'react';

class App extends React.Component{

	state = {
		isLoading:true, //标识是否处于加载中
		repoName:'',//仓库的名字
		repoUrl:'',//仓库地址
		keyWord:'r'
	}

	render(){
		const {keyWord,repoName,repoUrl} = this.state
		return (
			<div>
				<h2>在github上以【{this.state.keyWord}】字母开头的仓库中，点赞量最多的是<a href={repoUrl}>{repoName}</a></h2>
			</div>
		)
	}
}

export default App;
