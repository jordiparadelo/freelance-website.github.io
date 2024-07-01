import React, { Suspense, lazy } from "react";
import Link from "next/link";
// Styles
import styles from "../styles.module.scss";
// Components
import { Button, ContactButton } from "@/ui";
import { Banner } from "@/layouts";
const GridBackground = lazy(() => import("../../../ui/GridBackground")); 

const Frame = () => {
	return (
		// TODO: Make Grid with images
		<div className={styles["hero__frame-container"]}>
				<GridBackground className={styles["hero__background"]} />
			{/* <Suspense fallback={<div>Loading...</div>}>
				<GridBackground className={styles["hero__background"]} />
			</Suspense> */}
			{/* <div className={styles["hero__layout"]}>
				<div className={styles["hero__heading-wrapper"]}>
					<div className={styles["hero__label"]}>Design & Dev freelancer</div>
					<div className={styles["hero__title-wrapper"]}>
						<h1
							className={styles["hero__title"]}
							aria-label='digital design on demand'
						>
							Web Design for growing companies
						</h1>
					</div>
				</div>
				<p className='text-size-medium'>
					Launch your next project in <strong>no-time.</strong>{" "}
				</p>
				<div className={styles["hero__actions"]}>
					<ContactButton label={"Let's start a new project"} />
				</div>
			</div>

			<Banner /> */}
		</div>
	);
};

export default Frame;
