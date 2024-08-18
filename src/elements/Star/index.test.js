import { render } from "@testing-library/react";
import React from "react";
import Star from "./index";

test("Should have props [value, height, width, spacing]", () => {
	const height = 40;
	const width = 40;
	const spacing = 4;
	const { container } = render(
		<Star height={height} width={width} spacing={spacing} value={4} />
	);

	const starPlaceHolder = "div.stars";
	const starYellow = "div.stars div.star:not(.placeholder)";

	expect(container.querySelector(starPlaceHolder)).toBeInTheDocument();
	expect(container.querySelector(starPlaceHolder)).toHaveAttribute(
		"style",
		expect.stringContaining(`height: ${height}px`)
	);

	expect(container.querySelector(starYellow)).toBeInTheDocument();
	expect(container.querySelector(starYellow)).toHaveAttribute(
		"style",
		expect.stringContaining(`width: ${width}px`)
	);
	expect(container.querySelector(starYellow)).toHaveAttribute(
		"style",
		expect.stringContaining(`height: ${height}px`)
	);
	expect(container.querySelector(starYellow)).toHaveAttribute(
		"style",
		expect.stringContaining(`margin-right: ${spacing}px`)
	);
});
