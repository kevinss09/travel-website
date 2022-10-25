import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Button from "./index";

test("If it is disabled, user not allowed to click", () => {
	const { container } = render(<Button isDisabled></Button>);

	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("it has loading / spinner", () => {
	const { container, getByText } = render(<Button isLoading></Button>);

	expect(getByText(/loading/i)).toBeInTheDocument();
	expect(container.querySelector("span")).toBeInTheDocument();
});

test("if it's external, should have a tag ", () => {
	const { container } = render(<Button type="link" isExternal></Button>);

	expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render link component", () => {
	const { container } = render(
		<Routes>
			<Button href="" type="link"></Button>
		</Routes>
	);

	expect(container.querySelector("a")).toBeInTheDocument();
});
