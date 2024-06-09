import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const serviceAnimation = (element) => {
	const servicesCards = element.querySelectorAll(
		'[data-component="service-card"]'
	);
	const { top: elementTop, height: elementHeight } =
		element.getBoundingClientRect();
	const cardContainer = servicesCards[0].parentElement;
	const {
		top: containerTop,
		width: containerWidth,
		height: containerHeight,
	} = cardContainer.getBoundingClientRect();
	const cardWidth = servicesCards[0].offsetWidth;
	const cardShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

	const calculateCardPosition = (index) => {
		const cardCenter = -((index + 0.5) * cardWidth) + containerWidth / 2;
		return cardCenter;
	};

	const calculateCardRotation = (index) => {
		const cardIndex = index + 1; // 1 = first card
		const cardCenter = cardIndex - Math.floor(containerWidth / (cardWidth * 2));
		const rotation = (cardCenter / Math.floor(containerWidth / cardWidth)) * 20;
		return rotation;
	};

	const scrollEnd =
		elementTop +
		elementHeight -
		(containerTop + containerHeight - containerHeight / 2);


	const animation = gsap.from(servicesCards, {
		x: (index, target) => calculateCardPosition(index, target),
		rotation: (index, target) => calculateCardRotation(index, target),
		boxShadow: cardShadow,
	});

	ScrollTrigger.create({
		animation: animation,
		trigger: element,
		scrub: true,
		start: `top center`,
		end: `bottom-=${scrollEnd} center`,
		// markers: true,
	});

	return animation;
};