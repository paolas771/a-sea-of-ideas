import Image from "next/image";
import { promises as fs } from 'fs';
// import data from '@/app/'
import Link from 'next/link'
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
      <section className="all_post">
      {
        data.map((blog, i) => {
          return(
            <div className="post" key={i}>
              <Image 
                src="/images/icon.png"
                width={200}
                height={105}
                alt="a Sea of Ideas icon"
                className="blog_image"
              />
              <Link href={`/blog/${blog.slug}`} className="blog_summary">
                <h5 className="tag">tag</h5>
                <h2 className="blog_title">{blog.title}</h2>
                <p className="blog_description">{blog.description}</p>
                {/* <button>Read More</button> */}
              </Link>
            </div>
          )
        })
      }
      </section>
    </div>
);
}