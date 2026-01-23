import Image from "next/image";
import { promises as fs } from 'fs';
import Link from 'next/link'
export default async function BlogContainer({data}){

    return(
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
    )
}