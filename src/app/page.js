import Image from "next/image";
import Welcome from '@/markdown/welcome.mdx'
import Link from 'next/link'
import BlogContainer from '@/app/Components/BlogContainer'
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
          <BlogContainer data={data}/>
          <Link href="/blog" className="view_all">View All Blogs</Link>
        </div>
    </div>
  );
}
