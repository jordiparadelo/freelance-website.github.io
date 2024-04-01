"use client";

import React, { useRef } from "react";

// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { paragraphAnimation } from "./animations";

// Styles
import "./styles.scss";

const AnimatedParagraph = ({ className, children }) => {
	let componentRef = useRef(null);

	useGSAP(() => {
		paragraphAnimation(componentRef?.current);
	}, {scope: componentRef});

	return (
		<p
			className={
				className ? `animated-paragraph ${className}` : "animated-paragraph" 
			}
			ref={componentRef}
			aria-label={children}
		>
			{children}
		</p>
	);
};

export default AnimatedParagraph;