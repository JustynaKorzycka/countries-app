import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import Header from "@/components/Header";

const nunioSans = Nunito_Sans({
 weight: ["300", "600", "800"],
 subsets: ["latin"],
 variable: "--font-nunio_sans",
});

export const metadata = {
 title: "Create Next App",
 description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body
    className={`${nunioSans.className} bg-lightGray dark:bg-dark text-primary dark:text-white `}
   >
    <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
    >
     <Header />
     <main className="container py-6 sm:py-14">{children}</main>
    </ThemeProvider>
   </body>
  </html>
 );
}
