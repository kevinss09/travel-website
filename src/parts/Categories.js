import React from "react";
import Button from "elements/Button";
import { Fade } from "react-reveal";

export default function Categories({ data }) {
	// console.log(data);

	return data.map((category, index1) => {
		return (
			<section className="container" key={`category-${index1}`}>
				<h4 className="mb-3 font-weight-medium">{category.name}</h4>
				<div className="container-grid">
					{category.items.map((item, index2) => {
						return (
							<div
								className="item column-3 row-1"
								key={`category-${index1} item-${index2}`}
							>
								<Fade bottom delay={300 * index2}>
									<div className="card">
										{item.isPopular && (
											<div className="tag">
												Popular{" "}
												<span className="font-weight-light">Choice</span>
											</div>
										)}
										<figure className="img-wrapper" style={{ height: "180px" }}>
											<img
												src={item.imageUrl}
												alt={item.title}
												className="img-cover"
											/>
										</figure>
										<div className="meta-wrapper">
											<Button
												type="link"
												href={`/properties/${item._id}`}
												className="stretched-link d-block text-gray-800"
											>
												{/* <h5 className="h4">{item.name}</h5> */}
												<h5>{item.name}</h5>
											</Button>
											<span className="text-gray-500">
												{item.city}, {item.country}
											</span>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</section>
		);
	});
}
