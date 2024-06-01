import { Suspense } from "react";
// Components
import { Navbar, Footer, Modal } from "@/layouts";
// Fonts
import { Manrope } from "next/font/google";
// Styles
import "./globals.css";

export const metadata = {
	title: "Freelancer | Designer | Developer",
	description: "Generated by create next app",
};

// Fonts
const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={manrope.className}
				suppressHydrationWarning={true}
			>
					<Navbar />
					<main>{children}</main>
					<Footer />
					<Suspense fallback={null}>
						<Modal />
					</Suspense>
				{/* <InteractiveBackground /> */}
			</body>
		</html>
	);
}
