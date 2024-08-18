import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
	const decimal = Number(value) % 1;
	let leftPost = 0;
	const star = [];

	for (let index = 0; index < 5 && index < value - decimal; index++) {
		leftPost += width;
		star.push(
			<div
				className="star"
				key={`star-${index + 1}`}
				style={{
					left: index * width,
					marginRight: spacing,
					height: height,
					width: width,
				}}
			></div>
		);
	}

	if (decimal > 0 && value <= 5) {
		star.push(
			<div
				className="star"
				key={`starWithDecimal`}
				style={{
					left: leftPost,
					height: height,
					width: decimal * width - spacing,
				}}
			></div>
		);
	}

	const starPlaceHolder = [];
	for (let index = 0; index < 5; index++) {
		starPlaceHolder.push(
			<div
				className="star placeholder"
				key={`star-placeholder-${index + 1}`}
				style={{
					left: index * width,
					height: height,
					width: width,
					marginRight: spacing,
				}}
			></div>
		);
	}

	return (
		<>
			<div
				className={["stars", className].join(" ")}
				style={{ height: height }}
			>
				{starPlaceHolder}
				{star}
			</div>
		</>
	);
}

Star.propTypes = {
	className: propTypes.string,
	value: propTypes.number,
	height: propTypes.number,
	width: propTypes.number,
	spacing: propTypes.number,
};
