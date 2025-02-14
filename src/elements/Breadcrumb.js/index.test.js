import Breadcrumb from "./index.js";
import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const setup = () => {
	const arr = [
		{ pageTitle: "Home", pageHref: "" },
		{ pageTitle: "House Details", pageHref: "" },
	];
	const { container } = render(
		<BrowserRouter>
			<Breadcrumb data={arr} />
		</BrowserRouter>
	);
	const breadcrumb = container.querySelector(`.breadcrumb`);

	return {
		breadcrumb,
	};
};

test("Should have <ol> with className, breadcrumb and have text Home & House Details", () => {
	const { breadcrumb } = setup();

	expect(breadcrumb).toBeInTheDocument();
	expect(breadcrumb).toHaveTextContent("Home");
	expect(breadcrumb).toHaveTextContent("Details");
});
