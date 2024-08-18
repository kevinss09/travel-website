import React, { Component } from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

export default class BookingForm2 extends Component {
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

	updateData = (e) => {
		this.setState((prevState) => ({
			data: {
				...prevState.data,
				[e.target.name]: e.target.value,
			},
		}));
	};

	componentDidUpdate(prevProps, prevState) {
		const { data } = this.state;

		if (prevState.data.date !== data.date) {
			console.log("Yow");
			const startDate = new Date(data.date.startDate);
			const endDate = new Date(data.date.endDate);
			const countDuration = new Date(endDate - startDate).getDate();
			console.log(countDuration);
			this.setState((prevState) => ({
				data: {
					...prevState.data,
					duration: countDuration,
				},
			}));
		}

		// if (prevState.data.date !== data.date) {
		// 	console.log("it goes if date");
		// 	const startDate = new Date(data.date.startDate);
		// 	const endDate = new Date(data.date.endDate);
		// 	const countDuration = new Date(endDate - startDate).getDate();

		// 	this.setState((prevState) => ({
		// 		data: {
		// 			...prevState.data,
		// 			duration: countDuration,
		// 		},
		// 	}));
		// 	console.log("Done date");
		// }

		if (prevState.data.duration !== data.duration) {
			console.log("it goes if duration");
			const startDate = new Date(data.date.startDate);
			const endDate = new Date(
				startDate.setDate(startDate.getDate() + +data.duration - 1)
			);
			this.setState((prevState) => ({
				data: {
					...prevState.data,
					date: {
						...prevState.data.date,
						endDate: endDate,
					},
				},
			}));
		}

		// console.log(prevState.data.date);
		// console.log("THIS IS IT GUYS");
		// console.log(data.date);

		// TODO: DIWNDWOINWD{}
		// if (prevState.data.date !== data.date) {
		// 	const startDate = new Date(data.data.date.startDate);
		// 	const endDate = new Date(data.data.date.endDate);
		// 	const countDuration = new Date(endDate - startDate).getDate();
		// 	this.setState((prevState) => ({
		// 		data: {
		// 			...prevState.data,
		// 			duration: countDuration,
		// 		},
		// 	}));
		// }

		// if (prevState.data.date !== data.data.date) {
		// 	const startDate = new Date(data.date.startDate);
		// 	const endDate = new Date(data.date.endDate);
		// 	const countDuration = new Date(endDate - startDate).getDate();
		// 	this.setState({
		// 		...this.state,
		// 		data: {
		// 			...this.state.data,
		// 			duration: countDuration,
		// 		},
		// 	});
		// }
	}

	render() {
		const { data } = this.state;
		const { itemDetails } = this.props;

		return (
			<div className="card bordered" style={{ padding: "60px 80px" }}>
				<h4 className="mb-3">Start Booking</h4>
				<h5 className="h2 text-teal mb-4">
					${itemDetails.price}{" "}
					<span className="text-gray-500 font-weight-light">
						per {itemDetails.unit}
					</span>
				</h5>

				<label htmlFor="duration">How long will you stay?</label>
				<InputNumber
					max={30}
					suffix={" night"}
					isSuffixPlural
					onChange={this.updateData}
					name="duration"
					value={this.state.data.duration}
				/>

				<label htmlFor="date">Pick a Date</label>
				<InputDate
					onChange={this.updateData}
					name="date"
					value={this.state.data.date}
				/>
				<h6
					className="text-gray-500 font-weight-light"
					style={{ marginBottom: 40 }}
				>
					You will pay{" "}
					<span className="text-gray-900">
						${itemDetails.price * this.state.data.duration} USD
					</span>{" "}
					per{" "}
					<span className="text-gray-900">
						{this.state.data.duration} {itemDetails.unit}
					</span>
				</h6>

				<Button className="btn" hasShadow isPrimary isBlock>
					Continue to Book
				</Button>
			</div>
		);
	}
}

BookingForm2.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};
