import React from "react";
import { ServiceForm, SectionLabel, AnimatedParagraph, Curves } from "@/ui";
// import Box from "@/public/animated-icons/services.json";
import "./styles.scss";

const About = () => {
	return (
		<section
			id='about'
			className='about'
		>
			<div className='container'>
				<div className='about__wrapper'>
					<header className='about__header'>
						<AnimatedParagraph className="about__title">
							Freelancer, focused on develop digital products from scratch.
							Always align with design trends and technologies to solve business
							needs.
						</AnimatedParagraph>
					</header>
					<span className='divider'></span>
					<div className='about__services'>
						<h3 className='about__services-title'>
							Unlock your design potential with{" "}
						</h3>
						<ServiceForm />
					</div>
				</div>
			</div>
			<Curves fill="#101214" orientation="bottom"/>
		</section>
	);
};

export default About;