import Link from 'next/link'
export default async function Page({ params }) {
  const { slug } = await params
  const { default: Post } = await import(`../content/${slug}.mdx`)
  return (
    <article className="prose blog">
      <Link href="/blog" className="back_button"> <p className="arrow">&#10140;</p> Back to all blogs</Link>
      <Post />
    </article>
  )
}
 
// export function generateStaticParams() {
//   return [{ slug: 'welcome' }, { slug: 'about' }, {slug: 'balancing-hobbies-and-coding'}]
// }
 
// export const dynamicParams = false