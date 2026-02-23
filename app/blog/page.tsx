"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`/api/blog`)
      if (response.ok) {
        const data = await response.json()
        setPosts(data)

      } else {
        setError("Failed to load blog posts")
      }
    } catch (err) {
      setError("An error occurred while fetching blog posts")
    } finally {
      setLoading(false)
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
        {/* Header */}
        <section className="relative bg-gradient-to-r from-primary/90 via-primary to-primary text-accent py-20 sm:py-28 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
              Blog
            </h1>
            <p className="text-xl sm:text-2xl text-accent/90 max-w-2xl mx-auto leading-relaxed">
              Insights, tips, and industry updates from <span className="font-semibold text-accent/100">World Partner</span>
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading && <p className="text-center text-text-light">Loading blog posts...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}

            {!loading && posts.length === 0 && (
              <p className="text-center text-text-light">No blog posts available yet.</p>
            )}

            {!loading && posts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all h-full flex flex-col">
                      {/* Image */}
                      <div className="relative w-full h-48 bg-secondary overflow-hidden">
                        {post.imageSignedUrl ? (
                          <img
                            src={post.imageSignedUrl || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-sm text-text-light mb-3">{formatDate(post.created_at)}</p>
                        <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-text-light line-clamp-2 flex-1 mb-4">{post.content}</p>
                        <span className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
