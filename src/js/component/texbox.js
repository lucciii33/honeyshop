import React from "react";
import { Link } from "react-router-dom";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


export const TextBox = () => {
	return (
		
		<div className="textbox1">
			<h3 className="letter">Loremipsum</h3>
			<p className="letter"><RiDoubleQuotesL/>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.<RiDoubleQuotesR/></p>
		</div>
	);
};