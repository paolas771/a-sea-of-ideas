import Image from "next/image";
import { promises as fs } from 'fs';
// import data from '@/app/'
import Link from 'next/link'
export default async function Home() {
   const file = await fs.readFile(process.cwd() + '/src/app/data.json');
   const data = JSON.parse(file);

  return (
    <div>
      <section>
        <ul>
          <li>All</li>
          <li>Sewing</li>
          <li>Embriodery</li>
          <li>Book Binding</li>
          <li>Cooking</li>
          <li>Coding</li>
        </ul>
      </section>
      <section>
      {
        data.map((blog, i) => {
          return(
            <Link key={i} href={`/blog/${blog.slug}`}>
              <h5>tag</h5>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button>Read More</button>
            </Link>
          )
        })
      }
      </section>
    </div>
);
}