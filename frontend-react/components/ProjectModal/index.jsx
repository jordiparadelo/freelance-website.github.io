"use client";

import { useMemo } from "react";
// Next
import { useSearchParams } from "next/navigation";
import Image from "next/image";
// Components
import { Button, CloseModalButton, ProjectDetailsList } from "@/components";
// Constants
import { PROJECTS_ITEMS as projects } from "@/constants";
// Utils
import { splitArray } from "@/utils";
// Styles
import "./styles.scss";

const ProjectModal = () => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	// const project = useFetchProjects(id);
	const projectsMap = new Map(projects.map((project) => [project.id, project]));

	function getProjectById(id) {
		return projectsMap.get(id);
	}

	const project = getProjectById(id);

	return (
		project && (
			<article className='project-detail'>
				<div className='container'>
					<div className='project__header'>
						<div className='project__heading-wrapper'>
							<h3 className='project__title'>{project.title}</h3>
						</div>
						<div className='action_wrapper'>
							<Button href={project?.preview} target='_blank'>Live view</Button>
							<CloseModalButton>Close</CloseModalButton>
						</div>
					</div>
					<div className='project-detail__wrapper'>
						<div className='project-detail__content-wrapper'>
							<div className='project-detail__content'>
								<p className='project-detail__description'>
									{project?.details.blob}
								</p>
							</div>

							<aside className='project-detail__aside'>
								<div className='project-detail__aside__block'>
									<h4>Challenge</h4>
									<p>{project?.challenge}</p>
								</div>
								<div className='project-detail__aside__block'>
									<h4>Services</h4>
									<ul className='project__categories'>
										{project?.services?.map((service) => (
											<li
												className='project__category'
												key={service}
											>
												{service}
											</li>
										))}
									</ul>
								</div>
							</aside>
						</div>

						<div className='project-detail__image'>
							<Image
								src={project?.image?.src}
								alt={project?.image?.alt}
								width={project?.image?.width}
								height={project?.image?.height}
								priority={true}
							/>
						</div>

						<ProjectDetailsList details={project?.details} />

						<ProjectGallery gallery={project?.gallery} />
					</div>
				</div>
			</article>
		)
	);
};

export default ProjectModal;

// export const ProjectDetailsList = ({ details }) => {
// 	const { client, type, industries, year, roles, collaboration } = details;

// 	return (
// 		<div className='project-detail__details-wrapper'>
// 			<div className='project-detail__details-wrapper__col'>
// 				<h4 className='project-detail__details-wrapper__title'>Year</h4>
// 				<p>{year}</p>
// 			</div>
// 			<div className='project-detail__details-wrapper__col'>
// 				<h4 className='project-detail__details-wrapper__title'>Client</h4>
// 				<p>{client}</p>
// 			</div>
// 			<div className='project-detail__details-wrapper__col'>
// 				<h4 className='project-detail__details-wrapper__title'>Project Type</h4>
// 				<ul className='project__categories'>
// 					{type?.map((type) => (
// 						<li
// 							className='project__category'
// 							key={type}
// 						>
// 							{type}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<div className='project-detail__details-wrapper__col'>
// 				<h4 className='project-detail__details-wrapper__title'>Industry</h4>
// 				<p>
// 					{industries?.map((industry) => (
// 						<span key={industry}>{industry}</span>
// 					))}
// 				</p>
// 			</div>
// 			<div className='project-detail__details-wrapper__col'>
// 				<h4 className='project-detail__details-wrapper__title'>Roles</h4>
// 				<ul className='project__categories'>
// 					{roles?.map((role) => (
// 						<li
// 							className='project__category'
// 							key={role}
// 						>
// 							{role}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<div className='project-detail__details-wrapper__col'>
// 				<h4 className='project-detail__details-wrapper__title'>
// 					Collaboration
// 				</h4>
// 				<ul className='project__categories'>
// 					{collaboration?.map((colaborator) => (
// 						<li
// 							className='project__category'
// 							key={colaborator}
// 						>
// 							{colaborator}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };
// Import useMemo hook

export const ProjectGallery = ({ gallery, numOfColumns = 2 }) => {
	// Memoize the splitArray function result to avoid unnecessary recalculations
	const galleryByColumns = useMemo(
		() => splitArray(gallery, numOfColumns),
		[gallery, numOfColumns]
	);

	return (
		<div
			className='project-detail__gallery'
			style={{ "--columns": numOfColumns }}
		>
			{galleryByColumns?.map(
				(
					galleryColumn,
					columnIndex // Added columnIndex to map function
				) => (
					<ul
						key={columnIndex}
						className='project-detail__gallery-column'
					>
						{" "}
						{/* Changed li to ul for better semantics */}
						{galleryColumn.map((galleryItem, index) => (
							<li
								key={index}
								className='project-detail__gallery-item'
							>
								<Image
									src={galleryItem?.src}
									alt={galleryItem?.alt}
									width={galleryItem?.width}
									height={galleryItem?.height}
								/>
							</li>
						))}
					</ul>
				)
			)}
		</div>
	);
};
