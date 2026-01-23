import Image from "next/image";
import About from '@/markdown/about.mdx'
import Link from 'next/link'
export default function Home() {
  return (
   <div className="prose content about">
    <About />
   </div>
  );
}