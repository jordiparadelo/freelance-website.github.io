import Link from "next/link";
import React from "react";

async function getProjects() {
	const res = await fetch(`http://localhost:3000/api/products`);
	return res.json();
}

const ProjectsPage = async () => {
	const projects = await getProjects();

	return (
		<section>
			<ul>
				{projects.map((product) => (
					<li key={product.id}>
						<Link href={`/products/${product.id}`}>
							<h1 key={product.id}>{product.title}</h1>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsPage;
