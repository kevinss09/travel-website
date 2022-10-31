import React from "react";
import Button from "elements/Button";

export default function MostPick(props) {
	// console.log(props.data);
	return (
		<section className="container" ref={props.refMostPicked}>
			<h4 className="mb-3">Most Pick</h4>
			<div className="container-grid">
				{props.data.map((item, index) => {
					return (
						<div
							key={`mostpick-${index}`}
							className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
						>
							<div className="card card-featured">
								<div className="tag">
									{item.price}
									<span className="font-weight-light"> per {item.unit}</span>
								</div>
								<figure className="img-wrapper">
									<img
										src={item.imageUrl}
										alt={item.name}
										className="img-cover"
									/>
								</figure>
								<div className="meta-wrapper">
									<Button
										type="link"
										className="stretched-link d-block text-white"
										href={`/properties/${item._id}`}
									>
										<h4 className="text-white">{item.name}</h4>
									</Button>
									<span>
										{item.city}, {item.country}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
