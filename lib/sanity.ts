import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  content,
  author,
  publishedAt,
  featured,
  "imageUrl": mainImage.asset->url
}`

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  author,
  publishedAt,
  featured,
  "imageUrl": mainImage.asset->url
}`

export const FEATURED_POST_QUERY = `*[_type == "post" && featured == true][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  author,
  publishedAt,
  featured,
  "imageUrl": mainImage.asset->url
}`
