import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
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
