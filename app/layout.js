import { Geist, Geist_Mono, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // optimal weights (avoid heavy downloads)
  variable: "--font-playfair",
});

// Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

// Geist Fonts (these NEVER fail)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Leading Cybersecurity Solutions for Modern Businesses",
  description:
    "We provide advanced cybersecurity solutions, risk assessment, compliance services, and GRC strategies to protect modern businesses from digital threats.",
  metadataBase: new URL("https://cybersecurity-finland-ten.vercel.app"),
  icons: {
    icon: "/titlelogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
