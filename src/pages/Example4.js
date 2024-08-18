import { InputNumber } from "elements/Form";
import React, { useState, useEffect } from "react";

export default function Example4() {
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
						onChange={updateData}
						name="duration"
						value={state.data.duration}
					/>
				</div>
			</div>
		</div>
	);
}
