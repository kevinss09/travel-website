import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputDate from "./index";

class TestInput extends React.Component {
	state = {
		value: {
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		return (
			<InputDate
				max={30}
				onChange={this.handleChange}
				name="value"
				value={this.state.value}
			/>
		);
	}
}

const setup = () => {
	const { container } = render(<TestInput />);
	const wrapper = container.querySelector(".input-date");
	const input = container.querySelector("input.form-control");

	return {
		container,
		wrapper,
		input,
	};
};

test("It should have a wrapper in its class", () => {
	const { wrapper } = setup();

	expect(wrapper).toBeInTheDocument();
});

test("It should have tag <input> and has class name .form-control", () => {
	const { input } = setup();

	expect(input).toBeInTheDocument();
});

test("should show date picker when click input field", () => {
	const { container, input } = setup();

	fireEvent.click(input, { button: 1 });
	const datePickerWrapper = container.querySelector(".date-range-wrapper");

	expect(datePickerWrapper).toBeInTheDocument();
});
