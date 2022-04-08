import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
	return (
		<main data-aos="fade">
			<div className="header-home">
				<div className="header-info">
		
				<video src="vedio.mp4"muted loop autoplay></video>
					<h1>
						Change your Life,
						<br /> From now.
					</h1>
					<NavLink to="/courses">
						<button id="sm" className="btn btn-warning mt-3">
							Discover Our Courses
						</button>
					</NavLink>
				</div>
			</div>
		</main>
	);
};

export default Banner;
