import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Management System",
  description: "Developed by Faisal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "lightblue", padding:"25px"}}>  <NavBar/></header>
        {children}
        
      </body>
      <footer style={{backgroundColor: "lightblue", padding:"100px", height:"200px"}}></footer>
    </html>
  );
}
