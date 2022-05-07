import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/bg.jpg";
import obj1 from "../../img/obj1.png";


export const CompTwo = () => {
	return (

		<Parallax className="image" blur={1} bgImage={image1} bgImageAlt="the cat" strength={800}>
			<div className="section2 align-baseline">
				<div className="sectioncard">
					<img></img>
				</div>
				<div>
					<img></img>
				</div>
				<div>
					<img></img>
				</div>
			</div>
		</Parallax>
	);
};


