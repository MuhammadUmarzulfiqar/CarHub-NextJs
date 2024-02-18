
import "./globals.css";
import { Footer, Navbar } from "@components";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='relative'>
      <Navbar />
        {children} 
        <Footer />
        </body>
    </html>
  );
}
