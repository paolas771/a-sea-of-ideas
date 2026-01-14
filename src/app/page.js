import Image from "next/image";
import Welcome from '@/markdown/welcome.mdx'
import Link from 'next/link'
export default function Home() {
  return (
    <article className="prose">
      <Welcome/>
      <div>
        <h2>Latest Blogs</h2>
      </div>
      </article>
  );
}
