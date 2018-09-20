import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  urlHome: "首页",
		  urlList: "列表",
		}
	}
	componentWillMount(){

	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div className="app-header clearfix">
				<ul>
                    <li>
                        <Link to="/">{this.state.urlHome}</Link>
                    </li>
                    <li>
                        <Link to="/list">{this.state.urlList}</Link>
                    </li>
                </ul>
			</div>
		)
	}
}