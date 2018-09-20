import React, {Component} from "react";

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  copyright: "版权所有",
		  name: "刘勇react",
		}
	}
	componentWillMount(){
	}
	componentDidMount() {
	}
	render() {
		return(
			<div className="app-footer">
				<h2>{this.state.copyright}</h2>
				<p>{this.state.name}</p>
			</div>
		)
	}
}