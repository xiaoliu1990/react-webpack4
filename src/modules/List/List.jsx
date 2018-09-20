import React, {Component} from "react";
import Common from '../Common/Common';
export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  title: "我是列表的内容",
		  id:"",
		  txt:"",
		  txt2:""
		}
	}
	componentWillMount(){

	}
	componentDidMount() {
		Common.title("列表标题");
		this.setState({
			id:this.props.id,
			txt:Common.getParameter(window.location.hash, "txt"),
			txt2:Common.getParameter(window.location.hash, "txt2")
		});
	}
	render() {
		return(
			<div className="app-list">
				<h2>{this.state.title}</h2>
				<p>接收的Id：{this.state.id}</p>
				<p>接收的txt：{this.state.txt}</p>
				<p>接收的txt2：{this.state.txt2}</p>
			</div>
		)
	}
}