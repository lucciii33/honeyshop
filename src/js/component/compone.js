import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image1 from "../../img/bg.jpg";
import obj1 from "../../img/obj1.png";
import { Navbar } from "./navbar";
import {AiOutlineShoppingCart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";



export const CompOne = () => {
	return (

		<Parallax className="image" blur={1} bgImage={image1} bgImageAlt="the cat" strength={200}>
			<div className="contanav m-4">

			<div className="nav1 align-baselin">
				<h2 className="links m-2">Products</h2>
				<h2 className="links m-2">Whay we do</h2>
				<h2 className="links m-2">Why us</h2>
				<h2 className="links m-2">Contact</h2>
			</div>
			<div className="nav2 align-baselin">
				<h2 className="links m-2"><AiOutlineShoppingCart/></h2>
				<h2 className="links m-2"><MdLocationOn/></h2>
			</div>
			</div>
			<div className="content">
				<div className="center">
					<h1>Are you ready?</h1>
					<h2>Lets try the best honey in USA</h2>
					<h5>Lorem ipsum dolor sit amet</h5> 
					<button type="button" class="button-24">Lightlarge</button>
				</div>
				<div className="">

				<div className="circle">

					<div className="circle23">
					<img src={obj1} className="obj"></img>
					</div>
				</div>
				</div>



				
			</div>
		</Parallax>
	);
};