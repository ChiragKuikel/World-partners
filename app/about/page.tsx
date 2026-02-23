"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
  Users, Target, Eye, Heart, Award, Globe, TrendingUp, Clock,
  Calendar, Building,
  Briefcase, GraduationCap, Users as UsersIcon, Globe as GlobeIcon,
  ArrowUpRight, ChevronRight, MessageSquare, Crown,
  Building2
} from "lucide-react";



export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const companyHistory = [
    {
      year: "1998",
      title: "Company Foundation",
      description: "Established as Nihon Igaku Sogo Kenkyu Shinko Kyokai Co., Ltd. Began dispensing pharmacy business.",
      icon: <Building className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      milestone: "Foundation"
    },
    {
      year: "2003",
      title: "Human Resources Expansion",
      description: "Acquired licenses for Temporary Staffing Services and Fee-Charging Employment Placement Services. Began Pharmacist Human Resources business.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      milestone: "Growth"
    },
    {
      year: "2018",
      title: "Transformation & Rebranding",
      description: "Following the downsizing of the Pharmacist Human Resources business, commenced Foreign National Human Resources business. Company name changed to Glowing Partner Co., Ltd.",
      icon: <GlobeIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      milestone: "Transformation"
    },
    {
      year: "2018",
      title: "Education Initiative",
      description: "Launched 'GP NAI-TEI Academy', a job-hunting school for international students. Produced over 500 successful job candidates (Nai-tei) in three years.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      milestone: "Education"
    },
    {
      year: "2023",
      title: "Staff Milestone",
      description: "Number of dispatched staff exceeded 50, marking significant growth in our international recruitment operations.",
      icon: <UsersIcon className="w-6 h-6" />,
      color: "from-red-500 to-rose-50 0",
      milestone: "Milestone"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Established local subsidiary in Nepal, World Partner Pvt., Ltd., strengthening our presence in South Asia.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-indigo-500 to-violet-500",
      milestone: "Expansion"
    },
    {
      year: "2025",
      title: "Record Achievement",
      description: "Number of dispatched staff exceeded 100, demonstrating our continued growth and commitment to connecting talent with opportunities.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      milestone: "Achievement"
    }
  ];

  return (
    <>

      <Navbar />
      <main className="overflow-hidden">
        {/* Company Info Container - Minimalistic with Rounded Design */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#2C5A5B] rounded-2xl overflow-hidden shadow-lg">

              {/* Top Bar with Key Stats */}
              <div className="px-6 py-4 bg-[#2C5A5B]/90">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-white/90 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">World Partner Private Limited</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Experienced Team</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>Japan & Nepal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Founded 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Description - Full Paragraph in Rounded Container */}
              <div className="px-6 py-6 bg-white/5 backdrop-blur-sm">
                <div className="text-white/90">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-white/60 rounded-full"></div>
                    A Key Bridge for Nepali Workers to Find Jobs in Japan
                  </h3>
                  <div className="text-sm leading-relaxed space-y-3">
                    <p className="pl-4 border-l-2 border-white/30">
                      Founded in 2025, World Partner Private Limited has quickly become a trusted and essential partner for Nepali job seekers aiming to build careers in Japan. With a mission to simplify the overseas employment journey, we connect skilled and motivated workers from Nepal with reliable employers across Japan's diverse industries.
                    </p>
                    <p className="pl-4 border-l-2 border-white/30">
                      At World Partner, we believe in quality opportunities and transparent processes. That's why we continuously update our job listings—from manufacturing and hospitality to IT, caregiving, and technical positions—ensuring our candidates have access to the most relevant employment options available.
                    </p>
                    <p className="pl-4 border-l-2 border-white/30">
                      But we're not just about quantity—we're about meaningful matches. We work closely with employers of all sizes, from large corporations to local Japanese businesses, so that job seekers with varied skills and backgrounds can find roles that fit their goals. Our services are designed to be affordable, accessible, and supportive, because we want everyone—from first-time job seekers to experienced professionals—to succeed in Japan.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Mission, Vision, Values - Enhanced */}

        <section className="py-20 sm:py-14 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Core Principles
              </h2>
              <p className="text-lg text-text-light max-w-3xl mx-auto">
                Guiding every decision and action we take in our mission to connect talent with opportunity
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Our Mission",
                  content: "We empower individuals by standing beside them and unlocking their full potential through meaningful and open communication.",
                  icon: <Target className="w-12 h-12" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Our Vision",
                  content: "Connecting the World and Creating Pathways to Trust and Success.",
                  icon: <Eye className="w-12 h-12" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Corporate Philosophy",
                  content: "Connecting the world to empower your brighter future.",
                  icon: <Heart className="w-12 h-12" />,
                  color: "from-red-500 to-orange-500"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col items-center"
                >
                  <div className={`mb-6 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} p-3 group-hover:scale-110 transition-transform duration-300  `}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 ">{item.title}</h3>
                  <p className="text-text-light text-lg leading-relaxed text-center ">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Company History Timeline */}
        <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                  Our Journey
                </h1>
              </div>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                From humble beginnings to becoming a bridge between Japan and the world
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 hidden lg:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {companyHistory.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center  ${index % 2 === 0 ? 'lg:flex-row-reverse ' : ''
                      }`}
                  >
                    {/* Year Badge */}
                    <div className={`lg:w-1/2 flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} mb-6 lg:mb-0`}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative group"
                      >
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${item.color} p-1 shadow-xl`}>
                          <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {item.year}
                            </div>
                            <div className="text-xs font-semibold text-text-light px-2 py-1 bg-gray-100 rounded-full">
                              {item.milestone}
                            </div>
                          </div>
                        </div>

                        {/* Connecting line for mobile */}
                        <div className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-gray-300 to-transparent"></div>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 hidden lg:block"></div>

                    {/* Content Card */}
                    <div className="lg:w-1/2 lg:px-12">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                            <div className="text-white">
                              {item.icon}
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                              <div className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {item.year}
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>

                            {/* Progress indicator for mobile */}
                            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
                              <div className="flex items-center text-sm text-gray-500">
                                <ChevronRight className="w-4 h-4 mr-1" />
                                <span>Milestone {index + 1} of {companyHistory.length}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Status */}

            </div>
          </div>
        </section>



        {/* Leadership Team - Enhanced */}
        <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-text-light max-w-3xl mx-auto">
                Visionary leaders with decades of experience in international recruitment and Japanese business culture
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* CEO Container - Full width on top with elevated design */}
              <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                {/* "Lead Visionary" Badge hiding the crown container in smaller device*/} 
                <div className="hidden md:block absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full font-bold text-sm sm:text-base shadow-lg flex items-center gap-2">
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Lead Visionary</span>
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {[
                  {
                    name: "Narayan Pokhrel",
                    role: "CEO ",  // Enhanced role title
                    bio: `Raised in a simple countryside family, I left home at 17, driven by the belief that "I must build my own future".Having personally walked the challenging path from Kathmandu to crossing the ocean, I truly understand your hopes and challenges.We commit our full support to your journey.Let's make it happen, together.`,
                    image: "./CEO1.jpeg",
                    color: "from-green-500 to-emerald-500",
                    social: { linkedin: "#", twitter: "#" }
                  }
                ].map((member, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="group relative"
                  >
                    {/* Premium Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow"></div>

                    {/* Main Container */}
                    <div className="relative bg-gradient-to-br from-white via-emerald-50/30 to-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-300/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-emerald-300/50 rounded-tl-3xl"></div>
                      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-emerald-300/50 rounded-tr-3xl"></div>

                      {/* CEO Ribbon Banner */}
                      <div className="absolute -right-6 top-9 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-2 font-bold text-sm rotate-45 shadow-lg z-10">
                        CHIEF EXECUTIVE
                      </div>

                      <div className="relative">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                          {/* Profile Image with Premium Frame */}
                          <div className="relative">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-2 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                              {/* Thinner Animated Ring */}
                              <div className="absolute inset-0 rounded-full border-2 border-emerald-300/40 animate-spin-slow"></div>

                              {/* Increased image size with minimal border */}
                              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover object-[25%_30%] "
                                />
                              </div>

                              {/* Crown Badge */}
                              <div className="absolute hidden md:block -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-2 rounded-full shadow-lg">
                                <Crown className="w-6 h-6" />
                              </div>
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 whitespace-nowrap z-10">
                              <span className="text-emerald-100">★</span>
                              <span>12+ Years Experience</span>
                              <span className="text-emerald-100">★</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 text-center lg:text-left">
                            <div className="mb-4">
                              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                                {member.name}
                              </h3>
                              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 flex-wrap">
                                <span className="text-emerald-500 font-bold hidden lg:inline">•</span>
                                <p className="text-lg text-emerald-600 font-semibold mt-2 lg:mt-0">
                                  Strategic Leadership
                                </p>
                              </div>
                            </div>

                            {/* Quote/Highlight */}
                            <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-xl border-l-4 border-emerald-500">
                              <p className="text-sm text-emerald-800 italic">
                                "Leading with vision and cultural insight to bridge opportunities between Japan and the world."
                              </p>
                            </div>

                            <p className="text-text-light text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Support Leadership Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >

              </motion.div>

              {/* Manager and Board Member Containers */}
              <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  {
                    name: "Amatya Sanyukta",
                    role: "Board Member & Advisor",
                    bio: "4 years of experience rooted in discipline, consistency, and personal growth through Japanese work culture. Dedicated to guiding and empowering individuals as they pursue new opportunities and long-term success.",
                    image: "./Samyukta_san.jpg",
                    color: "from-purple-500 to-pink-500",
                    social: { linkedin: "#", twitter: "#" }
                  },
                  {
                    name: "Norin Shrestha",
                    role: "Operations Manager",
                    bio: "6 years of experience enriched by Japanese discipline, patience, and time management. Passionate about helping people navigate challenges abroad and creating a positive impact through compassionate support.",
                    image: "./Norin_san.jpeg",
                    color: "from-blue-500 to-cyan-500",
                    social: { linkedin: "#", twitter: "#" }
                  },
                  

                ].map((member, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6  shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full relative">
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <div className={`w-46 h-46 mx-auto rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 p-1 group-hover:scale-105 transition-transform duration-300`}>
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top rounded-full" />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-primary text-center mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold text-center mb-4">{member.role}</p>
                      <p className="text-text-light text-sm text-center leading-relaxed mb-6">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Stats with Counter Animation */}
        <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-text-light max-w-3xl mx-auto">
                Years of dedication translated into meaningful achievements
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            >
              {[
                { number: "100+", label: "Successful Placements", icon: <Users className="w-8 h-8" />, color: "text-blue-600" },
                { number: "95%", label: "Success Rate", icon: <Award className="w-8 h-8" />, color: "text-green-600" },
                { number: "50+", label: "Japanese Partners", icon: <Globe className="w-8 h-8" />, color: "text-purple-600" },
                { number: "10+", label: "Years of Excellence", icon: <Clock className="w-8 h-8" />, color: "text-orange-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${stat.color} mb-4 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-4xl sm:text-5xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-text-light font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Let's discuss how we can help you build a successful career in Japan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"

                  >
                    Contact Us
                  </motion.button>
                </a>
                <a href="/jobs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    View Current Opportunities
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}