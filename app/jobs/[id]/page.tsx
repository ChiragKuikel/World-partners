"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface Job {
  id: number
  title: string
  description: string
  image_url: string | null
  imageSignedUrl: string | null
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


export default function JobDetail() {
  const params = useParams()
  const router = useRouter()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    facebookUrl: "",
    country: "",
    nearestStation: "",
    residenceStatus: "",
    japaneseLevel: "",
    workingDays: [] as string[],
    daysPerWeek: "",
    coverLetter: "",
    resume: null as File | null,
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchJob()
  }, [params.id])

  const fetchJob = async () => {
    try {
      const response = await fetch(
        `https://world-partner.com.np/api/jobs/${params.id}`,
      )
      if (response.ok) {
        const data = await response.json()
        setJob(data)
      } else {
        setError("Job not found")
      }
    } catch (err) {
      setError("Failed to load job details")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement
      setFormData((prev) => ({
        ...prev,
        workingDays: checkbox.checked
          ? [...prev.workingDays, checkbox.value]
          : prev.workingDays.filter((d) => d !== checkbox.value),
      }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFormData((prev) => ({ ...prev, resume: file || null }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      let resumeBase64 = ""
      if (formData.resume) {
        const reader = new FileReader()
        resumeBase64 = await new Promise((resolve) => {
          reader.onloadend = () => {
            resolve((reader.result as string).split(",")[1])
          }
          reader.readAsDataURL(formData.resume as File)
        })
      }

      const response = await fetch(`https://world-partner.com.np/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: params.id,
          ...formData,
          resume: resumeBase64,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          email: "",
          phone: "",
          facebookUrl: "",
          country: "",
          nearestStation: "",
          residenceStatus: "",
          japaneseLevel: "",
          workingDays: [],
          daysPerWeek: "",
          coverLetter: "",
          resume: null,
        })
        setTimeout(() => {
          router.push("/jobs")
        }, 2000)
      } else {
        setError("Failed to submit application")
      }
    } catch (err) {
      setError("An error occurred while submitting your application")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {loading && <p className="text-center py-20">Loading...</p>}
        {error && <p className="text-center py-20 text-red-600">{error}</p>}

        {!loading && job && (
          <>
            {/* Job Header */}
            <section className="bg-primary text-accent py-12">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => router.back()}
                  className="text-accent/80 hover:text-accent mb-4 transition-colors"
                >
                  ← Back
                </button>
                <h1 className="text-4xl sm:text-5xl font-bold">{job.title}</h1>
              </div>
            </section>

            {/* Job Details */}
            <section className="py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {job.imageSignedUrl && (
                  <div className="mb-8">
                    <div className="max-w-md mx-auto 
                    rounded-2xl overflow-hidden 
                    bg-white 
                    border border-border 
                    shadow-md">

                      <div className="aspect-square bg-gray-50 flex items-center justify-center">
                        <img
                          src={job.imageSignedUrl}
                          alt={job.title}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>

                    </div>
                  </div>
                )}


                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Description */}
                  {/* Job Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <div>
                      <h2 className="text-2xl font-bold text-text mb-4">Job Description</h2>
                      <div className="prose prose-sm max-w-none text-text-light">
                        {job.description}
                      </div>
                    </div>

                    {/* Job Information */}
                    <div>
                      <h2 className="text-2xl font-bold text-text mb-4">Job Information</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text-light">
                        <p><strong>Place:</strong> {job.place}</p>
                        <p><strong>Contract Type:</strong> {job.contractType}</p>
                        <p><strong>Employment Period:</strong> {job.employmentPeriod}</p>
                        <p><strong>Trial Period:</strong> {job.trialPeriod}</p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                        <p><strong>Working Days:</strong> {job.workingDays}</p>
                        <p><strong>Work Time:</strong> {job.workTime}</p>
                        <p><strong>Break Time:</strong> {job.breakTime}</p>
                        <p><strong>Holidays:</strong> {job.holidays}</p>
                        <p><strong>Gender:</strong> {job.gender}</p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h2 className="text-2xl font-bold text-text mb-4">Benefits</h2>
                      <p className="text-text-light">{job.benefits}</p>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h2 className="text-2xl font-bold text-text mb-4">Requirements</h2>
                      <p className="text-text-light">{job.requirements}</p>
                    </div>

                    {/* Application Process */}
                    <div>
                      <h2 className="text-2xl font-bold text-text mb-4">Application Process</h2>
                      <p className="text-text-light">
                        <strong>Selection Method:</strong> {job.selectionMethod}
                      </p>
                      <p className="text-text-light">
                        <strong>Application Method:</strong> {job.applicationMethod}
                      </p>
                      <p className="text-text-light">
                        <strong>Notification:</strong> {job.notification}
                      </p>
                    </div>
                  </div>


                  {/* Application Form */}
                  <div className="lg:col-span-2">
                    <div className="bg-secondary p-6 rounded-lg border border-border  top-24">
                      <h2 className="text-2xl font-bold text-text mb-6">Apply Now</h2>

                      {success && (
                        <p className="text-green-600 mb-4 font-semibold">
                          Application submitted! Redirecting...
                        </p>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">

                        {/* First & Last Name */}
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg"
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg"
                          />
                        </div>

                        {/* Date of Birth */}
                        <input
                          type="date"
                          name="dateOfBirth"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        />

                        {/* Gender */}
                        <select
                          name="gender"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        >
                          <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>

                        {/* Email */}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        />

                        {/* Contact Number */}
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Contact Number"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        />

                        {/* Facebook URL */}
                        <input
                          type="url"
                          name="facebookUrl"
                          placeholder="Facebook Profile URL"
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        />

                        {/* Country */}
                        <input
                          type="text"
                          name="country"
                          placeholder="Country"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        />

                        {/* Nearest Station */}
                        <input
                          type="text"
                          name="nearestStation"
                          placeholder="Nearest Station"
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        />

                        {/* Status of Residence */}
                        <select
                          name="residenceStatus"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        >
                          <option value="">Status of Residence</option>
                          <option>Dependent Visa</option>
                          <option>Student Visa</option>
                          <option>Refugee Visa</option>
                          <option>Working Visa</option>
                          <option>Japanese Spouse</option>
                          <option>Permanent Residence</option>
                          <option>Tokutei / Syusyoki Visa</option>
                        </select>

                        {/* Japanese Ability */}
                        <select
                          name="japaneseLevel"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        >
                          <option value="">Japanese Ability</option>
                          <option>N1</option>
                          <option>N2</option>
                          <option>N3</option>
                          <option>N4</option>
                          <option>N5</option>
                        </select>

                        {/* Possible Working Days */}
                        <div>
                          <p className="text-sm font-semibold mb-2">Possible Working Days</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                              (day) => (
                                <label key={day} className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    name="workingDays"
                                    value={day}
                                    checked={formData.workingDays.includes(day)}
                                    onChange={handleChange}
                                    className="accent-primary"
                                  />
                                  {day}
                                </label>
                              )
                            )}
                          </div>
                        </div>

                        {/* Working Days Per Week */}
                        <select
                          name="daysPerWeek"
                          required
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg"
                        >
                          <option value="">Working Days per Week</option>
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <option key={n} value={n}>
                              {n} day{n > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>

                        {/* Cover Letter */}
                        <textarea
                          name="coverLetter"
                          placeholder="Cover Letter / Message (optional)"
                          rows={4}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg text-sm"
                        />

                        {/* Resume */}
                        <label className="block">
                          <span className="text-sm text-text-light mb-2 block">Resume (PDF/DOC)</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="w-full text-sm"
                          />
                        </label>

                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full px-4 py-2 bg-primary text-accent rounded-lg hover:bg-primary-dark disabled:opacity-50 font-semibold"
                        >
                          {submitting ? "Submitting..." : "Submit Application"}
                        </button>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
