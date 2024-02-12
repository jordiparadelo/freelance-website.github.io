import type { Metadata } from "next";
import "./globals.css";
import { Navbar , Footer } from "@/components";
import { Manrope } from 'next/font/google'
import { MenuProvider } from "@/context/MenuContexts";


export const metadata: Metadata = {
  title: "Freelancer | Designer | Developer",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
      <MenuProvider>
        <Navbar/>
        <main className="relative overflow-x-hidden">
          {children}
        </main>
        <Footer/>
        </MenuProvider>
        </body>
    </html>
  );
}
