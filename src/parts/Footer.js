import React from "react";
import IconText from "./IconText";
import Button from "elements/Button";

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col">
						<IconText />
						<p className="brand-tagline">
							We kaboom your beauty holiday instantly and memorable
						</p>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2">For Beginner</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/register">
									New Account
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/properties">
									Start Booking a Room
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/use-payment">
									Use Payment
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-2 mr-5">
						<h6 className="mt-2">Explore Us</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button type="link" href="/register">
									Our Carrers
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/properties">
									Privacy
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" href="/use-payment">
									Terms & Conditions
								</Button>
							</li>
						</ul>
					</div>
					<div className="col-auto mr-5">
						<h6 className="mt-2">Connect Us</h6>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<Button
									type="link"
									isExternal
									href="mailto:support@staycation.id"
								>
									support@staycation.id
								</Button>
							</li>
							<li className="list-group-item">
								<Button type="link" isExternal href="tel:+62236684089">
									235 - 736 - 9637
								</Button>
							</li>
							<li className="list-group-item">
								<span>Staycation, Kemang, Jakarta</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="copyrights">
					Copyright 2022 • All right reserved • Staycation
				</div>
			</div>
		</footer>
	);
}
