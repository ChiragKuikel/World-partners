import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ProcessFlowSection from "@/components/process"
import { FaUtensils, FaHeartbeat, FaBroom, FaPlane, FaSeedling } from 'react-icons/fa';
import LeadershipSection from "@/components/leadership";
import SuccessStories from "@/components/success";
import Link from 'next/link';
import FAQ from "@/components/faq";
import type { Metadata } from "next";
export const metadata:Metadata = {
  title: "World Partner Nepal | Job Opportunities in Japan",
  description: "World Partner is a trusted consultancy in Nepal helping youths find jobs, training, and career opportunities in Japan.",
}

const features = [
  {
    title: "Experienced Team with Deep Roots in Japan",
    description: "We have years of experience living and working in Japan, giving us strong cultural and professional insight to guide you effectively."
  },
  {
    title: "Strong Network Through Our Parent Company",
    description: "Backed by a trusted Japanese recruitment agency, we provide access to exclusive job opportunities with top employers."
  },
  {
    title: "Professional Guidance by a Certified Career Consultant",
    description: "Our parent company's CEO is a nationally certified Career Consultant in Japan, ensuring expert guidance and precise career matching."
  },
  {
    title: "Comprehensive Support: Visa, Exams, and Language",
    description: "Beyond job placement, we assist with visa procedures, skills exam preparation, and Japanese language training."
  },
  {
    title: "Housing and Daily Life Support",
    description: "We help you settle comfortably in Japan with support for housing, utilities, mobile contracts, and everyday essentials."
  }
]
const programs = [
  { id: 1, name: 'Food Service Industry', icon: <FaUtensils /> },
  { id: 2, name: 'Nursing Care', icon: <FaHeartbeat /> },
  { id: 3, name: 'Building Cleaning', icon: <FaBroom /> },
  { id: 4, name: 'Aviation Industry', icon: <FaPlane /> },
  { id: 5, name: 'Agriculture', icon: <FaSeedling /> }
];

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C5A5B] mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                With so many consultancies out there, here's why we stand out:
              </p>
            </div>

            {/* Horizontal Flex Container - Desktop Only */}
            <div className="hidden lg:flex gap-6 lg:gap-8 justify-center items-stretch">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`w-64 group feature-card delay-${index}`}
                >
                  <div className="h-full bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col relative overflow-hidden">
                    {/* Background decorative element */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2C5A5B]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                    {/* Centered Tick Symbol at Top */}
                    <div className="flex justify-center mb-6 z-10">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        {/* Glow effect behind tick */}
                        <div className="absolute w-14 h-14 bg-gradient-to-br from-[#2C5A5B]/20 to-[#3a7c7d]/20 rounded-full blur-md group-hover:blur-lg group-hover:scale-125 transition-all duration-500"></div>

                        {/* Animated ring */}
                        <div className="absolute w-14 h-14 border-2 border-[#2C5A5B]/20 rounded-full group-hover:border-[#2C5A5B]/40 group-hover:scale-110 group-hover:rotate-180 transition-all duration-700"></div>

                        {/* Main tick with gradient */}
                        <div className="relative">
                          <svg
                            className="w-10 h-10 drop-shadow-lg" // Reduced size
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <defs>
                              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#2C5A5B" />
                                <stop offset="50%" stopColor="#3a7c7d" />
                                <stop offset="100%" stopColor="#4a9d9e" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M5 13l4 4L19 7"
                              stroke={`url(#gradient-${index})`}
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="group-hover:scale-110 group-hover:translate-y-[-2px] transition-all duration-300"
                            />
                          </svg>

                          {/* Subtle sparkle effect */}
                          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#2C5A5B]/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <h3 className="text-lg font-bold text-[#2C5A5B] mb-3 group-hover:text-[#1a3a3a] transition-colors duration-300 relative z-10 text-center"> {/* Reduced margin, smaller text */}
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10 text-center"> {/* Smaller text */}
                      {feature.description}
                    </p>

                    {/* Bottom accent line - reduced margin */}
                    <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-[#2C5A5B]/30 transition-colors duration-300 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-[#2C5A5B] to-transparent rounded-full group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Grid Layout for Mobile & Tablet */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Reduced gap */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"> {/* Reduced padding */}
                    {/* Centered Tick Symbol at Top (No Square) */}
                    <div className="flex justify-center mb-4"> {/* Reduced margin */}
                      <div className="relative w-12 h-12 flex items-center justify-center"> {/* Reduced size */}
                        {/* Glow effect */}
                        <div className="absolute w-11 h-11 bg-[#2C5A5B]/10 rounded-full blur-sm"></div>

                        {/* Main tick */}
                        <svg
                          className="w-8 h-8 drop-shadow" // Reduced size
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <defs>
                            <linearGradient id={`gradient-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#2C5A5B" />
                              <stop offset="100%" stopColor="#3a7c7d" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M5 13l4 4L19 7"
                            stroke={`url(#gradient-mobile-${index})`}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Header */}
                    <h3 className="text-base font-bold text-[#2C5A5B] mb-2 group-hover:text-[#1a3a3a] transition-colors duration-300 text-center"> {/* Smaller text, reduced margin */}
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs leading-relaxed text-center"> {/* Smaller text */}
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SuccessStories />
        {/* Journey section*/}

        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">

            {/* TOP SECTION (FULL WIDTH) */}
            <div className="mb-16 text-center">
              <h1 className="text-[#2C5A5B] text-5xl font-light mb-4 tracking-tight">
                SSW Skills Preparation Programs
              </h1>
              <div className="w-24 h-1 bg-[#2C5A5B] mx-auto mb-6"></div>
              <p className="text-[#2C5A5B] text-xl italic max-w-3xl mx-auto">
                The SSW visa is a Japanese work visa category allowing skilled foreign workers in 16 key industries
              </p>
            </div>

            {/* TWO COLUMNS START HERE */}
            <div className="flex flex-col md:flex-row gap-12">

              {/* LEFT COLUMN */}
              <div className="flex-1 flex items-center ">
                <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
                  {programs.map((program) => (
                    <Link key={program.id}
                      href={`/ssw#industry-${program.id}`}
                      className="w-full flex items-stretch h-20 group hover:bg-gray-50 transition-colors duration-200 cursor-pointer" >
                      <div
                        key={program.id}
                        className="flex items-stretch h-20 group hover:bg-gray-50 transition-colors duration-200"
                      >
                        {/* Icon Area */}
                        <div className="w-20 bg-[#2C5A5B] flex items-center justify-center group-hover:w-28 transition-all duration-300">
                          <div className="text-white text-2xl transform rotate-0 group-hover:rotate-12 transition-transform duration-300">
                            {program.icon}
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 flex items-center pl-8">
                          <span className="text-[#2C5A5B] text-xl font-medium tracking-wide">
                            {program.name}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN (IMAGE) */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="./Collage.png"
                  alt="SSW Illustration"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>

            </div>
          </div>
        </section>


        <ProcessFlowSection />
        <LeadershipSection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
