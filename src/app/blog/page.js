import Image from "next/image";
import { promises as fs } from 'fs';
import Link from 'next/link'
import BlogContainer from '@/app/_components/BlogContainer'
export default async function Home() {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json');
    const data = JSON.parse(file);
  return (
    <div className="content">
      <section hidden>
        <ul className="all_tags">
          <li>All</li>
          <li>Sewing</li>
          <li>Embriodery</li>
          <li>Book Binding</li>
          <li>Cooking</li>
          <li>Coding</li>
        </ul>
      </section>
      <BlogContainer data={data}/>
    </div>
);
}