import React from "react";
import rigoImage from "../../img/bg.jpg";
import "../../styles/home.css";
import { Parallax } from 'react-parallax';
import { CompOne } from "../component/compone";
import { TextBox } from "../component/texbox";
import { CompTwo } from "../component/comptwo";
import { CompContact } from "../component/compcontact";

export const Home = () => (
	<div className="text-center">
			<CompOne />
			<TextBox/>
			<CompTwo/>
			<TextBox/>
			<CompContact/>
		</div>

);
