import React from "react";
import propTypes from "prop-types";
import { useState, useEffect } from "react";
import usePrevious from "helpers/hooks/usePrevious";
import { InputNumber, InputDate } from "elements/Form";
import Button from "elements/Button";

export default function BookingForm({ data }) {
	const [state, setState] = useState({
		data: {
			duration: 1,
			date: {
				startDate: new Date(),
				endDate: new Date(),
				key: "selection",
			},
		},
	});

	const [prevState, setPrevState] = useState({
		data: {
			duration: 1,
			date: {
				startDate: new Date(),
				endDate: new Date(),
				key: "selection",
			},
		},
	});

	const updateData = (e) => {
		setPrevState({
			...prevState,
			data: {
				...prevState.data,
				duration: state.data.duration,
				date: {
					startDate: state.data.date.startDate,
					endDate: state.data.date.endDate,
					key: "selection",
				},
			},
		});

		setState({
			...state,
			data: {
				...state.data,
				[e.target.name]: e.target.value,
			},
		});
		console.log("update done");
	};

	console.log(state);
	console.log(prevState);

	useEffect(() => {
		if (prevState.data.date !== state.data.date) {
			const startDate = new Date(state.data.date.startDate);
			const endDate = new Date(state.data.date.endDate);
			const countDuration = new Date(endDate - startDate).getDate();
			setState({
				...state,
				data: {
					...state.data,
					duration: countDuration,
				},
			});
			// console.log("Change in Date");
		}

		if (prevState.data.duration !== state.data.duration) {
			const startDate = new Date(state.data.date.startDate);
			const endDate = new Date(
				startDate.setDate(startDate.getDate() + +data.duration - 1)
			);
			setState({
				...state,
				data: {
					...state.data,
					date: {
						...state.data.date,
						endDate: endDate,
					},
				},
			});
			console.log("Change in Duration");
		}

		console.log("After change");
		console.log(state);
		console.log(prevState);
	}, []);

	// console.log(state);

	return (
		<div className="card bordered" style={{ padding: "60px 80px" }}>
			<h4 className="mb-3">Start Booking</h4>
			<h5 className="h2 text-teal mb-4">
				${data.price}{" "}
				<span className="text-gray-500 font-weight-light">per {data.unit}</span>
			</h5>

			<label htmlFor="duration">How long you will stay?</label>
			<InputNumber
				max={30}
				suffix={" night"}
				isSuffixPlural
				onChange={updateData}
				name="duration"
				value={state.data.duration}
			/>

			<label htmlFor="date">Pick a date</label>
			<InputDate
				onChange={updateData}
				max={30}
				name="date"
				value={state.data.date}
			/>
			<h6
				className="text-gray-500 font-weight-light"
				style={{ marginBottom: 40 }}
			>
				You will pay{" "}
				<span className="text-gray-900">
					${data.price * state.data.duration} USD
				</span>{" "}
				per{" "}
				<span className="text-gray-900">
					{state.data.duration} {data.unit}
				</span>
			</h6>

			{/* Add on click in here later if needed */}
			<Button className="btn" hasShadow isPrimary isBlock>
				Continue to Book
			</Button>
		</div>
	);
}

BookingForm.propTypes = {
	itemDetails: propTypes.object,
	startBooking: propTypes.func,
};
