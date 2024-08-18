import React, { Component } from "react";
import { InputNumber } from "elements/Form";

export default class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				duration: 1,
				date: {
					startDate: new Date(),
					endDate: new Date(),
					key: "selection",
				},
			},
		};
	}
	// state = {
	// 	duration: "",
	// };
	handleChange = (e) => {
		// this.setState({
		// 	data: {
		// 		...this.state.data,
		// 		[e.target.name]: e.target.value,
		// 	},
		// });
		this.setState((prevState) => ({
			data: {
				...prevState.data,
				[e.target.name]: e.target.value,
			},
		}));
	};

	render() {
		// console(this.state);
		console.log(this.state.data.date);
		return (
			<div className="container">
				<div
					className="row align-items-center justify-content-center"
					style={{ height: "100vh" }}
				>
					<div className="col-auto">
						<InputNumber
							max={30}
							suffix={" night"}
							isSuffixPlural
							onChange={this.handleChange}
							name="duration"
							value={this.state.data.duration}
						/>
					</div>
				</div>
			</div>
		);
	}
}
