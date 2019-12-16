import React from 'react';
import axios from 'axios'

class App extends React.Component{

	state = {
		isLoading:true, //标识是否处于加载中
		repoName:'',//仓库的名字
		repoUrl:'',//仓库地址
		keyWord:'r',
		error:'' //如果请求出错，保存错误信息（我们不期待这里有值）
	}

	componentDidMount(){
		fetch(`https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`)
		.then(
			value => {
				return value.json()
			},
		)
		.then(
			value =>{
				this.setState({
					isLoading:false,
					repoName:value.items[0].name,
					repoUrl:value.items[0].html_url,
				})
			}
		)
		.catch(
			error => {
				this.setState({
					isLoading:false,
					error:error.message
				})
			}
		)
	}

	render(){
		const {isLoading,repoName,repoUrl,error} = this.state
		if(isLoading){
			return <h2>Loading......</h2>
		}else if(error){
			return <h2>{error}</h2>
		}else{
			return <h2>在github上以【{this.state.keyWord}】字母开头的仓库中，点赞量最多的是<a href={repoUrl}>{repoName}</a></h2>
		}
	}
}

export default App;
