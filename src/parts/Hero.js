import React from "react";
import imgHero from "assets/images/img-hero.jpg";
import imgHeroBack from "assets/images/img-hero-back.jpg";
import IconCamera from "assets/icons/ic_camera.svg";
import IconCities from "assets/icons/ic_cities.svg";
import IconTraveler from "assets/icons/ic_traveler.svg";
import Button from "elements/Button";

export default function Hero(props) {
	console.log(props.data);

	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	}

	const numberFormat = (number) => {
		const formatNumbering = new Intl.NumberFormat("id-ID");
		return formatNumbering.format(number);
	};

	return (
		<section className="container pt-4">
			<div className="row align-items-center">
				<div className="col-auto pr-5" style={{ width: 530 }}>
					<h1 className="font-weight-bold line-height-1 mb-3 ">
						Forget Busy Work, <br />
						Start Next Vacation
					</h1>
					<p
						className="mb-4 font-weight-light text-gray-600 w-75"
						style={{ lineHeight: "170%" }}
					>
						We provide what you need to enjoy your holiday with family. Time to
						make another memorable moment.
					</p>
					<Button
						className="btn px-4"
						hasShadow
						isPrimary
						onClick={showMostPicked}
					>
						Show me Now
					</Button>
					<div className="row" style={{ marginTop: 65 }}>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img
								src={IconTraveler}
								alt={`${props.data.travelers} Travelers`}
								style={{ height: 36, width: 36 }}
							/>
							<h6 className="mt-3">
								{numberFormat(props.data.travelers)}{" "}
								<span className="text-gray-500 font-weight-light">
									travelers
								</span>
							</h6>
						</div>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img
								src={IconCamera}
								alt={`${props.data.treasures} Destination`}
								style={{ height: 36, width: 36 }}
							/>
							<h6 className="mt-3">
								{numberFormat(props.data.treasures)}{" "}
								<span className="text-gray-500 font-weight-light">
									Destination
								</span>
							</h6>
						</div>
						<div className="col-auto">
							<img
								src={IconCities}
								alt={`${props.data.cities} Cities`}
								style={{ height: 36, width: 36 }}
							/>
							<h6 className="mt-3">
								{numberFormat(props.data.travelers)}{" "}
								<span className="text-gray-500 font-weight-light">cities</span>
							</h6>
						</div>
					</div>
				</div>
				<div className="col-6" style={{ paddingLeft: "6rem" }}>
					<div
						style={{ width: 520, height: 410 }}
						className="position-relative"
					>
						<img
							src={imgHero}
							alt="Room with couches"
							className="img-fluid position-absolute"
							style={{
								margin: "-30px 0 0 -30px",
								zIndex: 1,
								width: 520,
								height: 410,
							}}
						/>
						<img
							src={imgHeroBack}
							alt="Frame of hero mage"
							className="img-fluid position-absolute"
							style={{ margin: "0 -15px -15px 0", width: 520, height: 410 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
