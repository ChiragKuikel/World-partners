'use client';
import { useState } from 'react';
import { CalendarDays, GraduationCap, Briefcase, Users, FileSignature, Plane, Globe, Building } from 'lucide-react';
import React from 'react';
import Image from 'next/image';




const processSteps = [
  {
    id: 1,
    title: "Learn Japanese",
    description: "Master essential language skills for work and daily life",
    icon: <GraduationCap className="w-12 h-12" />,
    color: "from-blue-500 to-cyan-400",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-400/20",
    iconColor: "text-blue-500"
  },
  {
    id: 2,
    title: (
    <>
      Learn SSW<br />Skills
    </>
  ),
    description: "Acquire technical skills for Specified Skilled Worker visa",
    icon: <Briefcase className="w-12 h-12" />,
    color: "from-purple-500 to-pink-400",
    iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-400/20",
    iconColor: "text-purple-500"
  },
  {
    id: 3,
    title: "Interview Preparation",
    description: "Mock interviews and communication training",
    icon: <Users className="w-12 h-12" />,
    color: "from-green-500 to-emerald-400",
    iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-400/20",
    iconColor: "text-green-500"
  },
  {
    id: 4,
    title: "Company Interview",
    description: "Direct interviews with Japanese employers",
    icon: <CalendarDays className="w-12 h-12" />,
    color: "from-yellow-500 to-orange-400",
    iconBg: "bg-gradient-to-br from-yellow-500/20 to-orange-400/20",
    iconColor: "text-yellow-500"
  },
  {
    id: 5,
    title: (
    <>
      CoE &<br />Agreement
    </>
  ),
    description: "Certificate of Eligibility and employment contract",
    icon: <FileSignature className="w-12 h-12" />,
    color: "from-red-500 to-rose-400",
    iconBg: "bg-gradient-to-br from-red-500/20 to-rose-400/20",
    iconColor: "text-red-500"
  },
  {
    id: 6,
    title: (
    <>
      Apply<br />for Visa
    </>
  ),
    description: "Visa application at VFS and document processing",
    icon: <Globe className="w-12 h-12" />,
    color: "from-indigo-500 to-violet-400",
    iconBg: "bg-gradient-to-br from-indigo-500/20 to-violet-400/20",
    iconColor: "text-indigo-500"
  },
  {
    id: 7,
    title: "Orientation",
    description: "Pre-departure briefing and cultural training",
    icon: <Building className="w-12 h-12" />,
    color: "from-amber-500 to-yellow-400",
    iconBg: "bg-gradient-to-br from-amber-500/20 to-yellow-400/20",
    iconColor: "text-amber-500"
  },
  {
    id: 8,
    title: "Departure to Japan",
    description: "Flight arrangements and arrival support",
    icon: <Plane className="w-12 h-12" />,
    color: "from-teal-500 to-cyan-400",
    iconBg: "bg-gradient-to-br from-teal-500/20 to-cyan-400/20",
    iconColor: "text-teal-500"
  }
];


export default function ProcessFlowSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0f2929] opacity-10 z-10"></div>

        {/* Japan-themed background image */}
        <div className="absolute inset-0 z-0">
          {/* Option 1: Use a local image */}
          <Image
            src="./Trial3.jpg" // Add your image to public/images/
            alt="Japan background"
            fill
            className="object-cover"
            priority
            
            sizes="100vw"
          />
          {/* Option 3: Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C5A5B] via-[#1a3a3a] to-[#0f2929] opacity-20"></div>  {/*opacity change garne thau */}
        </div>



      </div>

      {/* Content */}
      <div className="relative z-30 max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 md:mr-4 border border-white/20 backdrop-blur-sm">
              <Plane className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white">
              Your Journey to Japan
            </h2>
          </div>
          <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto">
            A clear 8-step roadmap for your smooth transition to working and living in Japan
          </p>
        </div>

        {/* Process Flow - Desktop */}
        <div className="hidden lg:block relative mt-20 ">

          {/* Reserved space so CTA doesn't shift */}
          <div className="absolute -bottom-36 left-0 w-full h-36 pointer-events-none "></div>

          {/* Japanese Wave Path */}
          <svg
            className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-150 pointer-events-none opacity-100 "
            viewBox="0 0 1400 300"
            fill="none"
          >
            <path
              d="
                M 50 200 
                C 150 120, 250 200, 350 160
                C 450 120, 550 180, 650 140
                C 750 100, 850 170, 950 130
                C 1050 90, 1150 160, 1300 120
            "
              stroke="rgba(44, 90, 91, 1)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* Card Grid */}
          <div className="grid grid-cols-8 gap-2 relative z-10">

            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`
                    relative flex flex-col items-center transition-all duration-500
                    ${index % 2 === 0 ? "translate-y-10" : "-translate-y-10"}
                `}
              >

                {/* Step Number */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full 
                    bg-white border border-white/20 backdrop-blur-sm flex items-center 
                    justify-center z-20">
                  <span className="text-black text-lg font-semibold">{index + 1}</span>
                </div>

                {/* ==== CIRCULAR CARD (icon + title only) ==== */}
                {/* ==== CIRCULAR CARD (updated: white icon + colored background + bigger size) ==== */}
                <button
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                  className="relative cursor-pointer group"
                >
                  {/* Glow using full icon colors */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} 
        rounded-full blur-xl opacity-70 group-hover:blur-2xl transition-all duration-500`}
                  ></div>

                  {/* Circle (bigger size + solid gradient background) */}
                  <div
                    className={`relative w-42 h-42 bg-gradient-to-br ${step.color}
        rounded-full border-2 border-white/20 flex flex-col items-center justify-center 
        group-hover:border-white/80 group-hover:scale-105 transition-all duration-300`}
                  >
                    {/* White icon */}
                    <div className="text-white mb-3">
                      {React.cloneElement(step.icon, { className: "w-14 h-14 text-white" })}
                    </div>

                    <h3 className="text-lg font-semibold text-white text-center leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </button>


                {/* ==== POPUP BELOW CARD ==== */}
                {activeStep === index && (
                  <div
                    className="mt-6 w-64 bg-white/10 border border-white/20 backdrop-blur-xl 
                        rounded-xl p-4 text-white text-center shadow-xl animate-fadeIn absolute top-1/2 translate-y-1/2"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveStep(null)}
                      className="absolute top-2 right-2 text-white/70 hover:text-white text-lg"
                    >
                      ✕
                    </button>

                    <p className="text-2xl font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>



        {/* Process Flow - Tablet */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            {/* Steps grid for tablet */}
            <div className="grid grid-cols-4 gap-6 mt-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center border border-white/20 z-10 backdrop-blur-sm">
                    <span className="text-black font-semibold text-lg">{index + 1}</span>
                  </div>

                  {/* Card */}
                  <div className={`bg-gradient-to-br ${step.color}  rounded-xl p-4 border border-white/20 group-hover:border-white/80 group-hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <div className= 'text-white mb-3 flex justify-center'>
                      {step.icon}
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 text-center">
                      {step.title}
                    </h3>

                    <p className="text-sm text-white text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Flow - Mobile */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

            {/* Arrow markers on line */}
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 text-white/60"
                style={{
                  left: '22px',
                  top: `${12.5 + i * 12.5}%`,
                }}
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M0 6 L8 6 M8 6 L5 3 M8 6 L5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}

            {/* Steps */}
            <div className="space-y-8 pl-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative group">
                  {/* Step Number */}
                  <div className="absolute -left-7 top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-white/20 z-10 backdrop-blur-sm">
                    <span className="text-black font-semibold text-s">{index + 1}</span>
                  </div>

                  {/* Dot on line */}
                  <div
                    className="absolute -left-7.5 top-3.5 w-2 h-2 rounded-full bg-white/80 border border-white z-20"
                  />

                  {/* Content Card */}
                  <div className={` bg-gradient-to-br ${step.color} backdrop-blur-sm rounded-xl p-4 border border-white/20 group-hover:border-white/80 group-hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <div className="flex items-start gap-3">
                      <div className='text-white flex-shrink-0'>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-s text-white leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-40 text-center">
          <div className="relative inline-block">
            <a
              href="/jobs"
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-br from-[#2C5A5B] to-[#4C9E9F] backdrop-blur-sm text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/40 group"
            >
              Get Online Consultation
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}