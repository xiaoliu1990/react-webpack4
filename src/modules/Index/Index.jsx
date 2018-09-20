import React, {Component} from "react";
import Common from '../Common/Common';
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  title: "我是首页的内容"
		}
	}
	componentWillMount(){
	}
	componentDidMount() {
		Common.title("首页");
	}
	render() {
		return(
			<div className="app-index">
				<div className="number">{this.state.title}</div>
      			<img src={require('../static/images/react.png')} alt="" />
			</div>
		)
	}
}