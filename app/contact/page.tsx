"use client"

import type React from "react"
import { useState } from "react"
import { MessageCircle, Upload, Building, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { json } from "body-parser"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Contact Us | World Partner Nepal",
  description: "Get in touch with World Partner Nepal for inquiries about training, internships, and job opportunities in Japan.",
};

type ContactType = "individual" | "company"

export default function Contact() {
  const [contactType, setContactType] = useState<ContactType>("individual")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobType: [] as string[],
    hearAbout: "",
    message: "",
    companyName: "",
    position: "",
  })
  const [resume, setResume] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const hearAboutOptions = [
    "Friend/Family",
    "Facebook",
    "Website",
    "LinkedIn",
    "Advertisement",
    "News Article",
    "Other",
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    setFormData((prev) => {
      const currentArray = prev[name as keyof typeof prev] as string[]
      if (checked) {
        return { ...prev, [name]: [...currentArray, value] }
      } else {
        return { ...prev, [name]: currentArray.filter((item) => item !== value) }
      }
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      let resumeBase64 = ""
      if (resume) {
        const reader = new FileReader()
        resumeBase64 = await new Promise((resolve) => {
          reader.onloadend = () => {
            resolve((reader.result as string).split(",")[1])
          }
          reader.readAsDataURL(resume as File)
        })
      }
      const response = await fetch(`/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData, contactType:contactType , resume: resumeBase64
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          jobType: [],
          hearAbout: "",
          message: "",
          companyName: "",
          position: "",
        })
        setResume(null)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // WhatsApp chat redirect
  const handleChatClick = () => {
    const phoneNumber = "+9779768614346" 
    const message = `Hello World Partner! I'm interested in ${
      contactType === "individual" ? "finding a job" : "hiring through your services"
    }.`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section 
  className="relative overflow-hidden bg-gradient-to-br from-[#2C5A5B] via-[#1a3a3a] to-[#2C5A5B] text-white py-16 sm:py-20"
  style={{
    backgroundSize: "200% 200%",
    animation: "gradientPulse 6s ease infinite",
  }}
>
  {/* Animated gradient overlays - fixed positions */}
  <div className="absolute inset-0 opacity-30"
    style={{
      background: `
        radial-gradient(circle at 20% 30%, rgba(72, 187, 120, 0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(52, 211, 153, 0.7) 0%, transparent 40%),
        radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.5) 0%, transparent 40%)
      `,
      animation: "gradientMove 8s ease-in-out infinite alternate",
    }}
  />
  
  {/* Animated light beams - fixed values */}
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="absolute h-1 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent animate-beam"
      style={{
        width: "150%",
        left: "-25%",
        top: "20%",
        transform: "rotate(0deg)",
        animationDelay: "0s",
        filter: "blur(1px)",
      }}
    />
    <div
      className="absolute h-1 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent animate-beam"
      style={{
        width: "150%",
        left: "-25%",
        top: "50%",
        transform: "rotate(12deg)",
        animationDelay: "0.5s",
        filter: "blur(1px)",
      }}
    />
    <div
      className="absolute h-1 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent animate-beam"
      style={{
        width: "150%",
        left: "-25%",
        top: "80%",
        transform: "rotate(24deg)",
        animationDelay: "1s",
        filter: "blur(1px)",
      }}
    />
  </div>
  
  {/* Floating glowing orbs - FIXED: Use predefined values instead of Math.random() */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Predefined orb positions and sizes to avoid hydration mismatch */}
    <div
      className="absolute rounded-full animate-orb-float"
      style={{
        width: "60px",
        height: "60px",
        left: "10%",
        top: "20%",
        background: "radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)",
        animationDuration: "20s",
        animationDelay: "0s",
        filter: "blur(8px)",
        boxShadow: "0 0 60px rgba(72, 187, 120, 0.3)",
      }}
    />
    <div
      className="absolute rounded-full animate-orb-float"
      style={{
        width: "80px",
        height: "80px",
        left: "80%",
        top: "30%",
        background: "radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)",
        animationDuration: "25s",
        animationDelay: "2s",
        filter: "blur(8px)",
        boxShadow: "0 0 60px rgba(72, 187, 120, 0.3)",
      }}
    />
    <div
      className="absolute rounded-full animate-orb-float"
      style={{
        width: "40px",
        height: "40px",
        left: "20%",
        top: "70%",
        background: "radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)",
        animationDuration: "18s",
        animationDelay: "1s",
        filter: "blur(8px)",
        boxShadow: "0 0 60px rgba(72, 187, 120, 0.3)",
      }}
    />
    <div
      className="absolute rounded-full animate-orb-float"
      style={{
        width: "70px",
        height: "70px",
        left: "70%",
        top: "60%",
        background: "radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)",
        animationDuration: "22s",
        animationDelay: "3s",
        filter: "blur(8px)",
        boxShadow: "0 0 60px rgba(72, 187, 120, 0.3)",
      }}
    />
    <div
      className="absolute rounded-full animate-orb-float"
      style={{
        width: "50px",
        height: "50px",
        left: "40%",
        top: "10%",
        background: "radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)",
        animationDuration: "24s",
        animationDelay: "1.5s",
        filter: "blur(8px)",
        boxShadow: "0 0 60px rgba(72, 187, 120, 0.3)",
      }}
    />
    <div
      className="absolute rounded-full animate-orb-float"
      style={{
        width: "90px",
        height: "90px",
        left: "90%",
        top: "80%",
        background: "radial-gradient(circle, rgba(72, 187, 120, 0.3) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 70%)",
        animationDuration: "30s",
        animationDelay: "4s",
        filter: "blur(8px)",
        boxShadow: "0 0 60px rgba(72, 187, 120, 0.3)",
      }}
    />
  </div>

  {/* Animated border glow */}
  <div className="absolute inset-0 border-2 border-transparent animate-border-glow"
    style={{
      background: "linear-gradient(45deg, transparent, rgba(72, 187, 120, 0.2), transparent)",
      backgroundSize: "400% 400%",
      animation: "borderGradient 4s ease infinite",
      filter: "blur(1px)",
    }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Glowing title with pop animation */}
    <div className="mb-8">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 relative inline-block">
        <span className="relative z-10 animate-text-glow">
          Contact Us
        </span>
        <span className="absolute -bottom-3 left-0 w-0 h-1 bg-gradient-to-r from-emerald-300 to-teal-400 shadow-[0_0_20px_rgba(72,187,120,0.5)] animate-underline-pop" 
          style={{ animationDelay: '0.5s' }} />
      </h1>
    </div>

    {/* Dynamic subtitle with shine effect */}
    <div className="relative">
      <p className="text-2xl sm:text-3xl text-white/95 max-w-2xl font-medium relative z-10 animate-text-shine">
        {contactType === "individual" 
          ? "Start your journey to Japan today" 
          : "Find skilled Nepali talent for your company"
        }
      </p>
      
      {/* Animated underline */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mt-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine" 
          style={{ animationDelay: '1s' }} />
      </div>
    </div>

    {/* Animated scroll indicator */}
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-glow">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-300/20 backdrop-blur-sm border border-emerald-300/30 flex items-center justify-center shadow-[0_0_30px_rgba(72,187,120,0.3)]">
          <svg
            className="w-5 h-5 text-emerald-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <span className="text-xs text-emerald-200/80 mt-2 animate-pulse">Scroll down</span>
      </div>
    </div>
  </div>

  {/* Enhanced custom animations */}
  <style jsx>{`
    @keyframes gradientPulse {
      0%, 100% {
        background-position: 0% 50%;
        filter: brightness(1);
      }
      50% {
        background-position: 100% 50%;
        filter: brightness(1.1);
      }
    }

    @keyframes gradientMove {
      0% {
        transform: scale(1) rotate(0deg);
        opacity: 0.3;
      }
      100% {
        transform: scale(1.2) rotate(180deg);
        opacity: 0.5;
      }
    }

    @keyframes orb-float {
      0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.3;
      }
      50% {
        transform: translateY(-40px) scale(1.1);
        opacity: 0.5;
      }
    }

    @keyframes beam {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      10%, 90% {
        opacity: 0.4;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }

    @keyframes borderGradient {
      0%, 100% {
        background-position: 0% 50%;
        border-color: rgba(72, 187, 120, 0.1);
      }
      50% {
        background-position: 100% 50%;
        border-color: rgba(72, 187, 120, 0.3);
      }
    }

    @keyframes textGlow {
      0%, 100% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.3),
                     0 0 40px rgba(72, 187, 120, 0.3),
                     0 0 60px rgba(52, 211, 153, 0.2);
      }
      50% {
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                     0 0 60px rgba(72, 187, 120, 0.5),
                     0 0 90px rgba(52, 211, 153, 0.3);
      }
    }

    @keyframes textShine {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    @keyframes underlinePop {
      0% {
        width: 0;
        opacity: 0;
      }
      50% {
        opacity: 1;
        box-shadow: 0 0 30px rgba(72, 187, 120, 0.8);
      }
      100% {
        width: 100%;
        opacity: 1;
      }
    }

    @keyframes shine {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }

    @keyframes bounceGlow {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
        filter: drop-shadow(0 0 10px rgba(72, 187, 120, 0.3));
      }
      40% {
        transform: translateY(-15px) translateX(-50%);
        filter: drop-shadow(0 0 20px rgba(72, 187, 120, 0.5));
      }
      60% {
        transform: translateY(-7px) translateX(-50%);
        filter: drop-shadow(0 0 15px rgba(72, 187, 120, 0.4));
      }
    }

    .animate-beam {
      animation: beam 4s linear infinite;
    }

    .animate-orb-float {
      animation: orb-float ease-in-out infinite;
    }

    .animate-border-glow {
      animation: borderGradient 4s ease infinite;
    }

    .animate-text-glow {
      animation: textGlow 3s ease-in-out infinite;
    }

    .animate-text-shine {
      background: linear-gradient(90deg, #ffffff, #a7f3d0, #ffffff);
      background-size: 200% auto;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textShine 4s linear infinite;
    }

    .animate-underline-pop {
      animation: underlinePop 1.5s ease-out forwards;
    }

    .animate-shine {
      animation: shine 2s ease-in-out infinite;
    }

    .animate-bounce-glow {
      animation: bounceGlow 2s infinite;
    }

    .animate-pulse {
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 0.8;
      }
      50% {
        opacity: 1;
      }
    }
  `}</style>
</section>

        {/* Contact Type Selector */}
        <div className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-700 font-medium">I am:</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setContactType("individual")}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                    contactType === "individual"
                      ? "bg-[#2C5A5B] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-[#2C5A5B]"
                  }`}
                >
                  <User className="w-5 h-5 mr-2" />
                  Job Seeker
                </button>
                <button
                  onClick={() => setContactType("company")}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                    contactType === "company"
                      ? "bg-[#2C5A5B] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-[#2C5A5B]"
                  }`}
                >
                  <Building className="w-5 h-5 mr-2" />
                  Employer/Company
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {contactType === "individual" ? "Apply for Jobs in Japan" : "Request Hiring Support"}
              </h2>
              <p className="text-gray-600 mb-6">
                {contactType === "individual" 
                  ? "Fill out the form below and we'll help you find the right opportunity"
                  : "Tell us about your hiring needs and we'll connect you with qualified candidates"
                }
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                      placeholder="+977 98XXXXXXXX"
                    />
                  </div>
                </div>

                {/* Company Name for employers */}
                {contactType === "company" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                      placeholder="Your Company Name"
                    />
                  </div>
                )}

                {/* Job Type (for individuals only) */}
                {contactType === "individual" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Job Type Preference *
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="jobType"
                          value="full-time"
                          checked={formData.jobType.includes("full-time")}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-[#2C5A5B] border-gray-300 rounded focus:ring-[#2C5A5B]"
                        />
                        <span className="ml-3 text-gray-700">Full-time</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="jobType"
                          value="part-time"
                          checked={formData.jobType.includes("part-time")}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-[#2C5A5B] border-gray-300 rounded focus:ring-[#2C5A5B]"
                        />
                        <span className="ml-3 text-gray-700">Part-time</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* How did you hear about us */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us? *
                  </label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                  >
                    <option value="">Select an option</option>
                    {hearAboutOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Position (for individuals) */}
                {contactType === "individual" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Position/Role *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                      placeholder="e.g., Caregiver, IT Specialist, Engineer, Factory Worker"
                    />
                  </div>
                )}

                {/* Resume Upload (for individuals only) */}
                {contactType === "individual" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume (Optional)
                    </label>
                    <div className="mt-1 flex items-center">
                      <label className="cursor-pointer flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Upload className="w-5 h-5 text-[#2C5A5B] mr-3" />
                        <span className="text-gray-700">
                          {resume ? resume.name : "Choose file"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      {resume && (
                        <button
                          type="button"
                          onClick={() => setResume(null)}
                          className="ml-4 text-sm text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {contactType === "individual" ? "Tell us about yourself" : "Tell us about your hiring needs"} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2C5A5B] focus:ring-1 focus:ring-[#2C5A5B]"
                    placeholder={
                      contactType === "individual"
                        ? "Share your skills, experience, qualifications, and why you want to work in Japan..."
                        : "Describe the positions you need to fill, industry, requirements, and timeline..."
                    }
                  />
                </div>

                {/* Status Messages */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600">
                      Thank you for contacting us! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-[#2C5A5B] text-white rounded-lg hover:bg-[#1a3a3a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    contactType === "individual" ? "Apply Now" : "Submit Request"
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Chat Online Button */}
        <button
          onClick={handleChatClick}
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-50"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </main>
      <Footer />
    </>
  )
}