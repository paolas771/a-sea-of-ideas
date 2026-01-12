import Link from 'next/link'

export default async function Page({ params }) {
  const { slug } = await params
  const { default: Post } = await import(`@/markdown/${slug}.mdx`)
  return (
    <article className="prose blog">
      <Link href="/blog">&larr; Back to all blogs</Link>
      <Post />
    </article>
  )
}
 
// export function generateStaticParams() {
//   return [{ slug: 'welcome' }, { slug: 'about' }, {slug: 'balancing-hobbies-and-coding'}]
// }
 
// export const dynamicParams = false