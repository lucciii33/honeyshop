import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/bg.jpg";
import obj1 from "../../img/obj1.png";
import { Navbar } from "./navbar";


export const CompOne = () => {
	return (

		<Parallax className="image" blur={1} bgImage={image1} bgImageAlt="the cat" strength={200}>
			<div className=" nav1 align-baseline">
				<a className="links m-2">Products</a>
				<a className="links m-2">Whay we do</a>
				<a className="links m-2">Why us</a>
				<a className="links m-2">Contact</a>
			</div>
			<div className="content">
				<div className="center">
					<h1>Are you ready?</h1>
					<h2>Lets try the best honey in USA</h2>
					<h5>Lorem ipsum dolor sit amet</h5> 
					<button type="button" class="button-24">Lightlarge</button>
				</div>
				<div className="circle">
					<img src={obj1} className="obj"></img>
				</div>



			</div>
		</Parallax>
	);
};