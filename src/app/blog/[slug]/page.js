export default async function Page({ params }) {
  const { slug } = await params
  console.log(slug)
  const { default: Post } = await import(`@/markdown/${slug}.mdx`)
  return (
    <article className="prose blog">
      <Post />
    </article>
  )
}
 
// export function generateStaticParams() {
//   return [{ slug: 'welcome' }, { slug: 'about' }, {slug: 'balancing-hobbies-and-coding'}]
// }
 
// export const dynamicParams = false