import React, {Component} from "react";
import Common from '../Common/Common';
export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  title: "我是列表的内容"
		}
	}
	componentWillMount(){

	}
	componentDidMount() {
		Common.title("列表标题");
	}
	render() {
		return(
			<div className="app-list">
				<h2>{this.state.title}</h2>
			</div>
		)
	}
}