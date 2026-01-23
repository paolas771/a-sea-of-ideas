import Image from "next/image";
import Welcome from '@/markdown/welcome.mdx'
import Link from 'next/link'
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json');
    const data = JSON.parse(file);
  return (
    <div className="welcome">
        <article className="prose ">
          <Welcome/>
        </article>
        <div>
          <h2 className="latest_blog">Latest Blogs</h2>
          <section className="all_post">
                      {
                          data.map((blog, i) => {
                          return(
                              <div className="post" key={i}>
                              <Image 
                                  src={blog.image}
                                  width={200}
                                  height={75}
                                  alt={blog.alt}
                                  className="blog_image"
                              />
                              <Link href={`/blog/${blog.slug}`} className="blog_summary">
                                  <h5 className="tag">{blog.tag}</h5>
                                  <h2 className="blog_title">{blog.title}</h2>
                                  <p className="blog_description">{blog.description}</p>
                                  {/* <button>Read More</button> */}
                              </Link>
                              </div>
                          )
                          })
                      }
                  </section>
          <Link href="/blog" className="view_all">View All Blogs</Link>
        </div>
    </div>
  );
}
