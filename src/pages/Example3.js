import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import usePrevious from "helpers/hooks/usePrevious";
import { InputNumber, inputDate } from "elements/Form";

export default function Example3({ itemDetail }) {
	// console.log(itemDetail);
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

	const updateData = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	console.log(state);

	return (
		<div className="container">
			<div className="card bordered" style={{ padding: "60px 80px" }}>
				<label htmlFor="duration">How long will you stay?</label>
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
	);
}
