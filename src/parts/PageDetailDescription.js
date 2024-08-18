import React from "react";
import ReactHtmlParser from "react-html-parser";
import IconText from "./IconText";

export default function PageDetailDescription({ data }) {
	// console.log(data.features);
	return (
		<main>
			<h4>About the place</h4>
			{ReactHtmlParser(data.description)}
			<div className="row" style={{ marginTop: 30 }}>
				{data.features.length === 0
					? "Tidak Ada Feature"
					: data.features.map((feature, index) => {
							return (
								<div
									key={`feature-${index}`}
									className="col-3"
									style={{ marginBottom: 30 }}
								>
									<img
										width="38"
										height="38"
										className="d-block mb-2"
										src={feature.imageUrl}
										alt={feature.name}
									/>{" "}
									<span>{feature.qty}</span>{" "}
									<span className="text-gray-500 font-weight-light">
										{feature.name}
									</span>
								</div>
							);
					  })}
			</div>
		</main>
	);
}
