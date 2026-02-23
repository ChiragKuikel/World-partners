"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { motion } from 'framer-motion';


interface Job {
  id: number
  title: string
  description: string
  image_url: string | null,
  image_key: string | null,
  imageSignedUrl: string,
  benefits: string
  place: string
  contractType: string
  employmentPeriod: string
  trialPeriod: string
  salary: string
  workingDays: string
  workTime: string
  breakTime: string
  holidays: string
  gender: string
  requirements: string
  selectionMethod: string
  applicationMethod: string
  notification: string
  created_at: string
}


export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://world-partner.com.np/api/jobs`
      )
      if (response.ok) {
        const data = await response.json()
        setJobs(data)
      } else {
        setError("Failed to load jobs")
      }
    } catch {
      setError("An error occurred while fetching jobs")
    } finally {
      setLoading(false)
    }
  }

  const toggleExpand = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-primary text-accent py-12 md:py-20 relative overflow-hidden">
          {/* Enhanced background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95"></div>

          {/* Subtle static grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
              }}
            />
          </div>

          {/* Static decorative dots (no animation) */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => {
              // Use deterministic positioning based on index
              const x = (i * 7) % 100;
              const y = (i * 13) % 100;

              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-accent/20 rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%)`
                  }}
                />
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Enhanced heading with shine effect */}
              <div className="relative inline-block">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1] // Custom easing for smoother animation
                  }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  <span className="relative">
                    <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-shine">
                      Join Our Team
                    </span>
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent blur-sm"></span>
                  </span>
                </motion.h1>
              </div>

              {/* Subtitle with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut"
                }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-accent/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                  Explore exciting career opportunities at{" "}
                  <span className="font-semibold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                    World Partners
                  </span>{" "}
                  and be part of something extraordinary
                </p>
              </motion.div>

              {/* Animated decorative element with glow */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.4,
                  ease: "circOut"
                }}
                className="relative h-1 mx-auto mb-12 max-w-xs"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full"></div>
              </motion.div>

              {/* Optional subtle CTA hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="flex flex-col items-center gap-2"
              >
                <div className="text-accent/60 text-sm font-medium">Scroll to explore</div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                  className="w-4 h-6 border-2 border-accent/40 rounded-full flex justify-center"
                >
                  <div className="w-1 h-1 bg-accent/60 rounded-full mt-1"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </section>

        {/* Jobs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            {loading && <p className="text-center">Loading jobs...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job) => {
                const isExpanded = expandedJobId === job.id
                return (
                  <Link key={job.id} href={`/jobs/${job.id}`} className="block">
                    <div className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all h-full">

                      {/* Image */}
                      {/* Image Container - Auto height, full visibility */}
                      <div className="relative w-full bg-white overflow-hidden">
                        {job.image_url ? (
                          <div className="w-full h-auto p-4 flex items-center justify-center"
                            style={{ minHeight: '200px', maxHeight: '350px' }}>
                            <img
                              src={job.imageSignedUrl}
                              alt={job.title}
                              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                              style={{
                                width: 'auto',
                                height: 'auto'
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                            <span className="text-gray-400">No image</span>
                          </div>
                        )}
                      </div>


                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>

                        <p className="text-text-light">
                          {job.description}
                        </p>

                        {/* Expanded info */}
                        {isExpanded && (
                          <div className="text-sm text-text-light space-y-2 border-t pt-4">
                            <p><strong>Place:</strong> {job.place}</p>
                            <p><strong>Contract:</strong> {job.contractType}</p>
                            <p><strong>Employment Period:</strong> {job.employmentPeriod}</p>
                            <p><strong>Trial Period:</strong> {job.trialPeriod}</p>
                            <p><strong>Salary:</strong> {job.salary}</p>
                            <p><strong>Working Days:</strong> {job.workingDays}</p>
                            <p><strong>Work Time:</strong> {job.workTime}</p>
                            <p><strong>Break Time:</strong> {job.breakTime}</p>
                            <p><strong>Holidays:</strong> {job.holidays}</p>
                            <p><strong>Gender:</strong> {job.gender}</p>
                            <p><strong>Benefits:</strong> {job.benefits}</p>
                            <p><strong>Requirements:</strong> {job.requirements}</p>
                            <p><strong>Selection Method:</strong> {job.selectionMethod}</p>
                            <p><strong>Application Method:</strong> {job.applicationMethod}</p>
                            <p><strong>Notification:</strong> {job.notification}</p>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4">
                          {/* Show more button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setExpandedJobId(isExpanded ? null : job.id)
                            }}
                            className="text-sm text-primary font-semibold hover:underline"
                          >
                            {isExpanded ? "Show less ↑" : "Show more ↓"}
                          </button>

                          {/* Apply now */}
                          <span className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1">
                            Apply Now →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
