import React, { Component } from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

export default class Example6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				duration: "",
				date: {
					startDate: new Date(),
					endDate: new Date(),
					key: "selection",
				},
			},
		};
	}

	updateData = (e) => {
		this.setState({
			...this.state,
			data: {
				...this.state.data,
				[e.target.name]: e.target.value,
			},
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { data } = this.state;

		if (prevState.data.date !== data.date) {
			if (prevState.data.duration !== data.duration) {
				console.log("duration change");
				const startDate = new Date(data.date.startDate);
				const endDate = new Date(
					startDate.setDate(startDate.getDate() + +data.duration - 1)
				);
				// console.log(endDate);
				this.setState({
					...this.state,
					data: {
						...this.state.data,
						date: {
							...this.state.data.date,
							endDate: endDate,
						},
					},
				});
			}
			console.log("date change");
			const startDate = new Date(data.date.startDate);
			console.log(startDate);
			const endDate = new Date(data.date.endDate);
			console.log(endDate);
			const countDuration = new Date(endDate - startDate).getDate();
			console.log(countDuration);
			this.setState({
				...this.state,
				data: {
					...this.state.data,
					duration: countDuration,
				},
			});
			console.log(this.state);
			// const endDate = new Date(data.date.endDate);
			// console.log(endDate);

			// const endDate = new Date(data.date.endDate);
			// const countDuration = new Date(endDate - startDate).getDate();
			// this.setState({
			// 	data: {
			// 		...this.state.data,
			// 		duration: countDuration,
			// 	},
			// });
		}

		// if (prevState.data.duration !== data.duration) {
		// 	console.log("duration change");
		// 	const startDate = new Date(data.date.startDate);
		// 	const endDate = new Date(
		// 		startDate.setDate(startDate.getDate() + +data.duration - 1)
		// 	);
		// 	// console.log(endDate);
		// 	this.setState({
		// 		...this.state,
		// 		data: {
		// 			...this.state.data,
		// 			date: {
		// 				...this.state.data.date,
		// 				endDate: endDate,
		// 			},
		// 		},
		// 	});

		// 	// const startDate = new Date(data.date.startDate);
		// 	// const endDate = new Date(
		// 	// 	startDate.setDate(startDate.getDate() + +data.duration - 1)
		// 	// );
		// 	// this.setState({
		// 	// 	...this.state,
		// 	// 	data: {
		// 	// 		...this.state.data,
		// 	// 		date: {
		// 	// 			...this.state.data.date,
		// 	// 			endDate: endDate,
		// 	// 		},
		// 	// 	},
		// 	// });
		// }
	}

	// startBooking = () => {
	//   const { data } = this.state;
	//   this.props.startBooking({
	//     _id: this.props.itemDetails._id,
	//     duration: data.duration,
	//     date: {
	//       startDate: data.date.startDate,
	//       endDate: data.date.endDate,
	//     },
	//   });
	//   this.props.history.push("/checkout");
	// };

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

				<label htmlFor="duration">How long you will stay?</label>
				<InputNumber
					max={30}
					suffix={" night"}
					isSuffixPlural
					onChange={this.updateData}
					name="duration"
					value={data.duration}
				/>

				<label htmlFor="date">Pick a date</label>
				<InputDate onChange={this.updateData} name="date" value={data.date} />

				<h6
					className="text-gray-500 font-weight-light"
					style={{ marginBottom: 40 }}
				>
					You will pay{" "}
					<span className="text-gray-900">
						${itemDetails.price * data.duration} USD
					</span>{" "}
					per{" "}
					<span className="text-gray-900">
						{data.duration} {itemDetails.unit}
					</span>
				</h6>

				<Button
					className="btn"
					hasShadow
					isPrimary
					isBlock
					// onClick={this.startBooking}
				>
					Continue to Book
				</Button>
			</div>
		);
	}
}

Example6.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};
