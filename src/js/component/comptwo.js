import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/bg.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import image4 from "../../img/image4.jpg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";



export const CompTwo = () => {
	return (
		
		<Parallax className="image" blur={1} bgImage={image1} bgImageAlt="the cat" strength={200}>
			 <div className="containercard">
			{/* <div className="textbox m-0">
			<h3>Loremipsum</h3>
			<p><RiDoubleQuotesL/>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.<RiDoubleQuotesR/></p>
			</div>*/}
			</div>  
			<div className="section2 align-baseline">
					<div className="ca">
						<div className="front">
						<img src={image2}  className="imagecard"></img>
						</div>
						<div className="back">
							<h2 className="letter mt-5">how we do it?</h2>
							<button className="button-24 mb-5">click here</button>
						</div>
					
					</div>
					
				
				
					<div className="ca">
						<div className="front">
							<img src={image3}  className="imagecard"></img>
						</div>
						<div className="back">
							<h2 className="mt-5 letter">our Products</h2>
							<button className="button-24 mb-5">click here</button>
						</div>
					</div>
				
				
					<div className="ca">
						<div className="front">
						<img src={image4}  className="imagecard"></img>
						</div>
						<div className="back">
							<h2 className="mt-5 letter">why us?</h2>
							<button className="button-24 mb-5">click here</button>
						</div>
					
					</div>
				
			</div>
		</Parallax>
	);
};


