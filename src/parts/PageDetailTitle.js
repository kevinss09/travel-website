import React from "react";
import Breadcrumb from "elements/Breadcrumb.js";
import { Fade } from "react-reveal";

export default function PageDetailTitle({ data, breadcrumb }) {
	console.log(data);
	console.log(breadcrumb);

	return (
		<section className="container spacing-sm">
			<Fade bottom>
				<div className="row align-items-center">
					<div className="col">
						<Breadcrumb data={breadcrumb} />
					</div>
					<div className="col-auto text-center">
						<h1 className="h2">{data.name}</h1>
						<span className="text-gray-400">
							{data.city}, {data.country}
						</span>
					</div>
					<div className="col"></div>
				</div>
			</Fade>
		</section>
	);
}
