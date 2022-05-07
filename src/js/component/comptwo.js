import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/bg.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import image4 from "../../img/image4.jpg";



export const CompTwo = () => {
	return (

		<Parallax className="image" blur={1} bgImage={image1} bgImageAlt="the cat" strength={200}>
			<div className="section2 align-baseline">
				
					<img src={image2}  className="imagecard"></img>
				
				
					<img src={image3}  className="imagecard"></img>
				
				
					<img src={image4} className="imagecard"></img>
				
			</div>
		</Parallax>
	);
};


