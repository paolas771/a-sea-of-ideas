import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Image from 'next/image'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "a Sea of Ideas",
  description: "Come along as I bring my ideas to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Image
            src="/images/icon.png"
            width={40}
            height={40}
            alt="a Sea of Ideas icon"
            className="icon"
          />
          <nav>
              <Link href='/'>Home</Link>
              <Link href='/blog'>Blog</Link>
              <Link href='/about'>About</Link>
            </nav>
          </header>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
