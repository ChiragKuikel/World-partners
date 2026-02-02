"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface BlogPost {
  id: number
  title: string
  content: string
  image_url: string
  slug: string
  created_at: string
  imageSignedUrl: string | null
}

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetchBlogPost()
  }, [params.slug])

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(
        `/api/blog/${params.slug}`,
      )
      if (response.ok) {
        const data = await response.json()
        setPost(data)
        // Fetch related posts
        fetchRelatedPosts()
      } else {
        setError("Blog post not found")
      }
    } catch (err) {
      setError("Failed to load blog post")
    } finally {
      setLoading(false)
    }
  }

  const fetchRelatedPosts = async () => {
    try {
      const response = await fetch(`/api/blog`)
      if (response.ok) {
        const data = await response.json()
        setRelatedPosts(data.slice(0, 3))
      }
    } catch (err) {
      console.error("Failed to fetch related posts")
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <Navbar />
      <main>
        {loading && <p className="text-center py-20">Loading...</p>}
        {error && <p className="text-center py-20 text-red-600">{error}</p>}

        {!loading && post && (
          <>
            {/* Post Header */}
            <section className="bg-primary text-accent py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => router.back()}
                  className="text-accent/80 hover:text-accent mb-4 transition-colors"
                >
                  ← Back
                </button>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
                <p className="text-accent/80">{formatDate(post.created_at)}</p>
              </div>
            </section>

            {/* Post Content */}
            <section className="py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {post.imageSignedUrl && (
                  <div className="mb-8 rounded-lg overflow-hidden h-96 bg-secondary">
                    <img
                      src={post.imageSignedUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="prose prose-sm max-w-none text-text-light leading-relaxed">
                  {post.content.split("\n\n").map((para, idx) => (
                    <p key={idx} className="mb-4 text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="py-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-text mb-8">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relPost) => (
                      <div
                        key={relPost.id}
                        className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        {relPost.imageSignedUrl && (
                          <img
                            src={relPost.imageSignedUrl || "/placeholder.svg"}
                            alt={relPost.title}
                            className="w-full h-40 object-cover"
                          />
                        )}
                        <div className="p-4">
                          <p className="text-sm text-text-light mb-2">{formatDate(relPost.created_at)}</p>
                          <h3 className="font-semibold text-text mb-2 line-clamp-2">{relPost.title}</h3>
                          <a
                            href={`/blog/${relPost.slug}`}
                            className="text-primary text-sm font-semibold hover:underline"
                          >
                            Read →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
