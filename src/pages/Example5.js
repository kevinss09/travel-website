import React, { useState } from "react";
import { InputDate } from "elements/Form";

export default function Example5() {
	// const [state, setState] = useState({
	// 	date: {
	// 		startDate: new Date(),
	// 		endDate: new Date(),
	// 		key: "selection",
	// 	},
	// });
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

	const handleChange = (e) => {
		setState({
			...state,
			data: {
				...state.data,
				[e.target.name]: e.target.value,
			},
		});
	};

	console.log(state);

	return (
		<div className="container">
			<div
				className="row align-items-center justify-content-center"
				style={{ height: "100vh" }}
			>
				<div className="col-auto">
					<InputDate
						max={30}
						onChange={handleChange}
						name="date"
						value={state.data.date}
					/>
				</div>
			</div>
		</div>
	);
}
