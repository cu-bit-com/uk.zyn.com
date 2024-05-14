import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import office from "../../images/discover/Office.png"
import game from "../../images/discover/Game.png"
import commute from "../../images/discover/Commute.png"
import global from "../../components/Global.module.css"
import './Carousel.css'

// Define your component
const Carousel = () => {
    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
		autoplaySpeed: 5000
    };

    return (
		<div className={global.wrapper}>
			<Slider {...settings}>
				<div className={`cardWrapper`}>
					<div className="inside">
						<div className="card">
							<img className="image" width="100%" src={office} alt="" />
						</div>
						<br />
						<h3 className="cardTitle">Discreet & Considerate</h3><br />
						<p className="cardParagraph">With no ash, no smoke & no smoke smell, nicotine pouches are a cleaner way to enjoy nicotine. They also don’t require any device & are simple to use – you just place the small, white pouches between your upper lip and gum & enjoy the flavor & nicotine as they are released.</p>
					</div>
				</div>
				<div className="cardWrapper">
					<div className="inside">
						<div className="card">
							<img className="image" width="100%" src={commute} alt="" />
						</div>
						<br />
						<h3 className="cardTitle">Clean & Convenient</h3><br />
						<p className="cardParagraph">Nicotine pouches are small, convenient and simple to use.</p>
					</div>
				</div>
				<div className="cardWrapper">
					<div className="inside">
						<div className="card">
							<img className="image" width="100%" src={game} alt="" />
						</div>
						<br />
						<h3 className="cardTitle">High Quality</h3><br />
						<p className="cardParagraph">ZYN® is made up of high quality nicotine and food-grade ingredients. The pouch itself is made from plant fibers, specially designed to release nicotine while feeling comfortable under your lip.</p>
					</div>
				</div>
				<div className="cardWrapper">
					<div className="inside">
						<div className="card">
							<img className="image" width="100%" src={commute} alt="" />
						</div>
						<br />
						<h3 className="cardTitle">Trustworthy</h3><br />
						<p className="cardParagraph">ZYN is world’s No.1 nicotine pouch brand.*“ “* PMI reported global shipment volumes and in market sales estimates of nicotine pouch units, from January to June 2023.</p>
					</div>
				</div>
			</Slider>
		</div>
    );
};

export default Carousel;
