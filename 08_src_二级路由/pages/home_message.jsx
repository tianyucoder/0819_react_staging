import React, { Component } from 'react'

export default class HomeMessage extends Component {

	state = {
    messages: []
  }

	componentDidMount () {
    // 模拟发送ajax请求
    setTimeout(() => {
      const data = [
        {id: 1, title: '消息1'},
        {id: 2, title: '消息2'},
        {id: 3, title: '消息3'},
      ]
      this.setState({
        messages: data
      })
    }, 1000)
  }


	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((message)=>{
							return (
								<li key={message.id}>
									<a href="/home/message/1">{message.title}</a>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
			</div>
		)
	}
}
