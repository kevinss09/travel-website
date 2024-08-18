import React from "react";
import TestimonyBack from "assets/images/picture-testimonial-back.jpg";
import Button from "elements/Button";
import Star from "elements/Star";
import { Fade } from "react-reveal";

export default function Testimonial({ data }) {
	console.log(data);

	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div className="col-auto" style={{ marginRight: 40 }}>
						<div
							className="testimonial-hero"
							style={{ margin: "30px 0 0 30px" }}
						>
							<img
								src={data.imageUrl}
								alt={data.name}
								className="position-absolute"
								style={{ zIndex: 2 }}
							/>
							<img
								src={TestimonyBack}
								alt={data.name}
								className="position-absolute"
								style={{ zIndex: 1, margin: "-30px 0 0 -30px" }}
							/>
						</div>
					</div>
					<div className="col-6">
						<h4 style={{ marginBottom: 24 }}>{data.name}</h4>
						<Star value={data.rate} height={35} width={35} spacing={4} />
						<h5 className="h2 font-weight-light line-height-2 my-3">
							{data.content}
						</h5>
						<span className=" text-gray-500">
							{data.familyName}, {data.familyOccupation}
						</span>
						<div>
							<Button
								className="btn px-5 py-2"
								style={{ marginTop: 60 }}
								hasShadow
								isPrimary
								type="link"
								href={`testimonial/${data._id}`}
							>
								Read their Story
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
