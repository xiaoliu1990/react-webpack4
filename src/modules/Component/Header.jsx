import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  urlHome: "首页",
		  urlList: "列表",
		  id:12,
		  txt:"liuyong",
		  txt2:"daliu"
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
                        <Link to={{
							pathname: "/list/"+this.state.id,
							search: "?txt="+this.state.txt+"&txt2="+this.state.txt2,
							state: { fromDashboard: true }
						}}>{this.state.urlList}</Link>
                    </li>
                </ul>
			</div>
		)
	}
}