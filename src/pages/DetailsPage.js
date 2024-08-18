import React, { useEffect, useState } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import PageDetailTitle from "parts/PageDetailTitle";
import itemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import { Fade } from "react-reveal";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import BookingForm2 from "parts/BookingForm2";

export default function DetailsPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const breadcrumb = [
		{ pageTitle: "Home", pageHref: "" },
		{ pageTitle: "House Details", pageHref: "" },
	];

	return (
		<>
			<Header />
			<PageDetailTitle data={itemDetails} breadcrumb={breadcrumb} />
			<FeaturedImage data={itemDetails.imageUrls} />
			<section className="container">
				<div className="row">
					<div className="col-7 pr-5">
						<Fade bottom>
							<PageDetailDescription data={itemDetails} />
						</Fade>
					</div>
					<div className="col-5">
						<Fade bottom>
							<BookingForm2 itemDetails={itemDetails} />
						</Fade>
					</div>
				</div>
			</section>
		</>
	);
}
