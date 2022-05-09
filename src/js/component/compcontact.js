import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';
import image4 from "../../img/bgcontact.jpg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";



export const CompContact = () => {
	return (
		
		<div>
			<div className="position-relative">

			<img className="imageconta" src={image4}></img>
			<div className="form position-absolute bottom-0 start-0">
				<input className="m-2 input" placeholder="Emai"></input>
				<input className="m-2 input" placeholder="Phone number"></input>
				<textarea className="m-2 input" placeholder="tell us how can we help you?"></textarea>
			</div>
			</div>
		</div>
	);
};


