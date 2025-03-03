import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const posts = import.meta.glob(`$lib/posts/*.md`)
  const activePosts = await Promise.all(
    Object.values(posts).map(async (post) => {
      const { metadata } = await post()
      return metadata.active ? 1 : 0
    })
  )
  return json(activePosts.reduce((a, b) => a + b, 0))
}