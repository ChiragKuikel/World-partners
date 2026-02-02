"use client";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import {
  FaBuilding,
  FaUserTie,
  FaFileContract,
  FaGlobeAsia,
  FaCertificate,
  FaLanguage,
  FaChevronRight,
  FaArrowRight,
  FaCalendarAlt,
  FaUsers,
  FaIndustry,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCogs,
  FaCheckCircle,
  FaHandHoldingHeart,
  FaInfoCircle,
  FaHardHat,

  FaSeedling,
  FaLeaf,

  FaPaw,
  FaUtensils,
  FaCocktail,
  FaPlane,
  FaTruckLoading,
  FaTools,
  FaCheck,

} from 'react-icons/fa';

import {
  GiNurseMale,
  GiChefToque,
  GiAirplane,
  GiConcreteBag,
  GiBroom,
  GiFactory,
  GiFarmTractor,
  GiHouse,
  GiShipBow,
  GiCarKey,
  GiFishBucket,
  GiCircuitry
} from 'react-icons/gi';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: "SSW Program | World Partner Nepal - Jobs in Japan for Nepali Youths",
description: "Learn about the Special Skills Worker (SSW) program with World Partner Nepal. Discover how Nepali youths can gain job opportunities and career support in Japan.",
};

const SSW1Page = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'visa' | 'industries'>('industries');

  const industries = [
    { icon: <GiNurseMale />, title: 'Nursing Care', desc: 'Physical caregiving & support', color: 'bg-gradient-to-br from-pink-50 to-red-50 border-pink-100' },
    { icon: <GiChefToque />, title: 'Food Service', desc: 'Cooking, service, management', color: 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100' },
    { icon: <GiAirplane />, title: 'Aviation', desc: 'Ground handling, maintenance', color: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100' },
    { icon: <GiConcreteBag />, title: 'Construction', desc: 'Civil engineering, infrastructure', color: 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-100' },
    { icon: <GiBroom />, title: 'Building Cleaning', desc: 'Interior cleaning & sanitation', color: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100' },
    { icon: <GiFactory />, title: 'Manufacturing', desc: 'Machine processing, assembly', color: 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-100' },
    { icon: <GiFarmTractor />, title: 'Agriculture', desc: 'Farming & livestock', color: 'bg-gradient-to-br from-green-50 to-lime-50 border-green-100' },
    { icon: <GiHouse />, title: 'Accommodation', desc: 'Hotel front desk & hospitality', color: 'bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100' },
    { icon: <GiShipBow />, title: 'Shipbuilding', desc: 'Marine vessel construction', color: 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100' },
    { icon: <GiCarKey />, title: 'Automotive Repair', desc: 'Vehicle maintenance & repair', color: 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-100' },
    { icon: <GiFishBucket />, title: 'Fisheries', desc: 'Aquaculture & fishing industry', color: 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100' },
    { icon: <GiCircuitry />, title: 'Electronics', desc: 'Electronic components assembly', color: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100' },
  ];

  const visaTypes = [
    {
      type: 'SSW Type 1',
      duration: 'Up to 5 years',
      family: 'Family cannot accompany',
      color: 'border-l-4 border-[#2C5A5B]',
      bg: 'bg-gradient-to-r from-blue-50/50 to-white',
      badgeColor: 'bg-gradient-to-r from-[#2C5A5B] to-[#3a7a7b]',
      features: ['Ideal for single professionals', 'Renewable up to 5 years', 'Pathway to Type 2', 'Quick processing']
    },
    {
      type: 'SSW Type 2',
      duration: 'No renewal limit',
      family: 'Spouse & Children can accompany',
      color: 'border-l-4 border-[#D4AF37]',
      bg: 'bg-gradient-to-r from-amber-50/50 to-white',
      badgeColor: 'bg-gradient-to-r from-[#D4AF37] to-[#F4CA64]',
      features: ['Permanent career path', 'Family unification', 'Long-term stability', 'Social security benefits']
    }
  ];

  const stats = [
    { value: '95%', label: 'Success Rate', color: 'text-green-600', bg: 'bg-gradient-to-r from-green-50 to-emerald-50' },
    { value: '3-6', label: 'Months Processing', color: 'text-blue-600', bg: 'bg-gradient-to-r from-blue-50 to-cyan-50' },
    { value: '16', label: 'Industries', color: 'text-purple-600', bg: 'bg-gradient-to-r from-purple-50 to-pink-50' },
    { value: '100+', label: 'Placements', color: 'text-orange-600', bg: 'bg-gradient-to-r from-yellow-50 to-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 font-sans">
      <Navbar />

      {/* Navigation */}
      <div className="bg-gradient-to-r from-[#2C5A5B] via-[#3a7a7b] to-[#4CAF9D] shadow-lg p-8 " >

      </div>


      {/* Stats Banner */}
      <div className="container mx-auto px-4 -mt-6 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bg} rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border`}>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#2C5A5B] via-[#3a7a7b] to-[#4CAF9D] rounded-2xl text-white p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-24 translate-y-24"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <FaGlobeAsia className="text-white" />
                <span className="text-sm font-medium">Japanese Employment Visa Program</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Specified Skilled Worker <span className="text-white">(SSW)</span> Visa
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                Your gateway to professional opportunities in Japan's high-demand industries.
                Immediate work authorization across 16 critical sectors with comprehensive support.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                  <span className="font-semibold">🚀 Immediate Placement</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                  <span className="font-semibold">🎯 16 Industries</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                  <span className="font-semibold">📈 Career Growth</span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <FaUserTie className="text-4xl mb-4 text-yellow-300" />
                <h3 className="font-bold text-lg mb-2">Ready to Work in Japan</h3>
                <p className="text-sm text-white/80">Immediate deployment with employer support</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <nav >
            <div className="container mx-auto px-4 py-4  ">
              <div className="flex justify-between items-center  ">
                <div className="flex space-x-1 bg-white/10 backdrop-blur-sm p-1 rounded-lg mb-4 bg-gradient-to-r from-[#2C5A5B] via-[#3a7a7b] to-[#4CAF9D]">
                  <button
                    onClick={() => setActiveTab('industries')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'industries' ? 'bg-white text-[#2C5A5B] shadow-lg' : 'text-white/90 hover:text-white hover:bg-white/20'}`}
                  >
                    Industries
                  </button>
                  <button
                    onClick={() => setActiveTab('visa')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'visa' ? 'bg-white text-[#2C5A5B] shadow-lg' : 'text-white/90 hover:text-white hover:bg-white/20'}`}
                  >
                    Visa Types
                  </button>

                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white text-[#2C5A5B] shadow-lg' : 'text-white/90 hover:text-white hover:bg-white/20'}`}
                  >
                    Overview
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="p-3 bg-gradient-to-r from-[#2C5A5B] to-[#4CAF9D] text-white rounded-xl mr-4">
                      <FaFileContract />
                    </div>
                    Program Overview
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    The Specified Skilled Worker (SSW) visa addresses Japan's critical labor shortages
                    by enabling skilled professionals worldwide to contribute to key industries.
                    This program offers structured pathways for career development and cultural integration.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg flex items-center justify-center mr-3">
                          <FaCheckCircle />
                        </div>
                        Key Features
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                            ✓
                          </div>
                          Direct employment with competitive salaries
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                            ✓
                          </div>
                          Clear pathway to permanent residency
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                            ✓
                          </div>
                          Comprehensive pre-departure training
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
                      <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg flex items-center justify-center mr-3">
                          <FaLanguage />
                        </div>
                        Requirements
                      </h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                            ✓
                          </div>
                          Industry-specific technical certification
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                            ✓
                          </div>
                          Japanese language proficiency (N4+)
                        </li>
                        <li className="flex items-center">
                          <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3">
                            ✓
                          </div>
                          Relevant work experience or training
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-6">
                  <h3 className="font-bold text-gray-800 mb-6 text-xl">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center mr-4">
                        <FaPhone />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Call us</p>
                        <p className="text-lg font-bold text-gray-800">+9779768614346</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center mr-4">
                        <FaEnvelope />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email us</p>
                        <a
                          href="mailto:career@world-partner.com.np"
                          className="text-gray-700 hover:text-black transition-colors duration-200"
                        >
                          career@world-partner.com.np
                        </a>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                      <h4 className="font-bold text-gray-800 mb-2">Office Hours</h4>
                      <p className="text-gray-600 text-sm">Sun-Fri: 9:00-6:00 </p>
                      <p className="text-gray-600 text-sm">Sat: Closed </p>

                    </div>

                    <button className="w-full mt-4 bg-gradient-to-r from-[#2C5A5B] to-[#4CAF9D] text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                      Contact us
                      <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Visa Types Tab */}
          {activeTab === 'visa' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="p-3 bg-gradient-to-r from-[#2C5A5B] to-[#4CAF9D] text-white rounded-xl mr-4">
                    <FaFileContract />
                  </div>
                  Visa Types & Requirements
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {visaTypes.map((visa, index) => (
                    <div key={index} className={`${visa.bg} ${visa.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-gray-800">{visa.type}</h3>
                        <span className={`px-4 py-2 ${visa.badgeColor} text-white text-sm rounded-full font-bold`}>
                          {index === 0 ? 'Temporary' : 'Permanent'}
                        </span>
                      </div>

                      <div className="space-y-6 mb-8">
                        <div className="flex items-center p-4 bg-white/80 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg flex items-center justify-center mr-4">
                            <FaCalendarAlt />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="text-xl font-bold text-gray-800">{visa.duration}</p>
                          </div>
                        </div>

                        <div className="flex items-center p-4 bg-white/80 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg flex items-center justify-center mr-4">
                            <FaUsers />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Family Status</p>
                            <p className="text-xl font-bold text-gray-800">{visa.family}</p>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {visa.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-6 h-6 bg-gradient-to-r from-[#2C5A5B]/20 to-[#4CAF9D]/20 rounded-full flex items-center justify-center mr-3">
                              <FaChevronRight className="text-[#2C5A5B] text-xs" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-6 text-xl flex items-center">
                    <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl mr-4">
                      <FaCertificate />
                    </div>
                    Common Requirements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                      <h5 className="font-bold text-gray-800 mb-3">Skills Exam</h5>
                      <p className="text-sm text-gray-600">
                        Industry-specific technical assessment demonstrating practical skills
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
                      <h5 className="font-bold text-gray-800 mb-3">Japanese Language</h5>
                      <p className="text-sm text-gray-600">
                        JLPT N4 or higher certification demonstrating communication ability
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200">
                      <h5 className="font-bold text-gray-800 mb-3">Experience</h5>
                      <p className="text-sm text-gray-600">
                        Minimum 1-3 years relevant work experience in target industry
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-200">
                      <h5 className="font-bold text-gray-800 mb-3">Health Check</h5>
                      <p className="text-sm text-gray-600">
                        Medical examination and health certificate for visa processing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Industries Tab */}
          {activeTab === 'industries' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-10 text-2xl flex items-center">
                  <FaIndustry className="mr-3 text-blue-600" />
                  Industry Skills & Specializations
                </h3>

                <div className="space-y-10">
                  {/* Food Service Industry */}
                  <section id="industry-1" className="scroll-mt-20">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex">
                        <div className="md:w-2/5">
                          <div className="h-56 md:h-full">
                            <img
                              src="./Food.jpg"
                              alt="Food Service"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <FaUtensils className="text-white text-xl" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800">Food Service Industry</h4>
                              <p className="text-gray-600 text-sm mt-1">General restaurant operations and services</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border border-yellow-100">
                              <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                                  <span className="text-yellow-700 font-bold">①</span>
                                </div>
                                <h5 className="font-bold text-yellow-800 text-lg">Restaurant Operations</h5>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="bg-white p-3 rounded-lg">
                                  <h6 className="font-semibold text-gray-800 text-sm mb-2">Food Processing</h6>
                                  <p className="text-xs text-gray-600 leading-relaxed">Food preparation, cooking techniques, and presentation standards</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                  <h6 className="font-semibold text-gray-800 text-sm mb-2">Customer Service</h6>
                                  <p className="text-xs text-gray-600 leading-relaxed">Front-of-house operations, hospitality, and customer relations</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg">
                                  <h6 className="font-semibold text-gray-800 text-sm mb-2">Store Management</h6>
                                  <p className="text-xs text-gray-600 leading-relaxed">Inventory control, staff supervision, and daily operations</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border border-orange-100">
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                  <span className="text-orange-700 font-bold">②</span>
                                </div>
                                <h5 className="font-bold text-orange-800 text-lg">Beverage Services</h5>
                              </div>
                              <p className="text-gray-700">Professional drink preparation, bar management, mixology, and beverage service protocols</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Nursing Care */}
                  <section id="industry-2" className="scroll-mt-20">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex">
                        <div className="md:w-2/5">
                          <div className="h-56 md:h-full">
                            <img
                              src="./Nurse.jpg"
                              alt="Nursing Care"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <FaHandHoldingHeart className="text-white text-xl" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800">Nursing Care</h4>
                              <p className="text-gray-600 text-sm mt-1">Comprehensive healthcare and support services</p>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-6 leading-relaxed">Professional elderly and special needs care including assistance with daily activities and health monitoring:</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                            {[
                              { icon: '🛁', text: 'Assistance with bathing & hygiene care' },
                              { icon: '🍽️', text: 'Feeding & nutritional support planning' },
                              { icon: '📊', text: 'Physical condition monitoring & reporting' },
                              { icon: '🎨', text: 'Recreational activities assistance' },
                              { icon: '💪', text: 'Functional training support programs' },
                              { icon: '🧠', text: 'Mental health & emotional support' },
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                <span className="text-2xl mr-3">{item.icon}</span>
                                <span className="text-gray-800 font-medium">{item.text}</span>
                              </div>
                            ))}
                          </div>

                          <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border border-rose-200">
                            <p className="text-sm text-gray-700 italic">
                              <span className="font-semibold text-rose-700">Professional approach:</span> Responding to both physical and mental conditions with personalized care plans
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Construction Industry */}
                  <section id="industry-3" className="scroll-mt-20">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex flex-row-reverse">
                        <div className="md:w-2/5">
                          <div className="h-56 md:h-full">
                            <img
                              src="./Construction.jpg"
                              alt="Construction"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <FaHardHat className="text-white text-xl" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800">Construction Industry</h4>
                              <p className="text-gray-600 text-sm mt-1">Infrastructure development and building construction</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                              {
                                title: 'Civil Engineering',
                                description: 'Roads, bridges, dams, and public infrastructure projects',
                                icon: '🏗️',
                                color: 'from-amber-100 to-orange-100'
                              },
                              {
                                title: 'Building Construction',
                                description: 'Residential, commercial, and industrial structural development',
                                icon: '🏢',
                                color: 'from-orange-100 to-red-100'
                              },
                              {
                                title: 'Infrastructure Facilities',
                                description: 'Equipment installation and comprehensive facility management',
                                icon: '⚙️',
                                color: 'from-yellow-100 to-amber-100'
                              },
                            ].map((item, idx) => (
                              <div key={idx} className={`bg-gradient-to-br ${item.color} p-5 rounded-xl border border-amber-200`}>
                                <div className="flex items-center mb-3">
                                  <span className="text-3xl mr-3">{item.icon}</span>
                                  <h5 className="font-bold text-gray-800">{item.title}</h5>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                            <div className="flex items-center text-sm text-amber-800">
                              <FaInfoCircle className="mr-2" />
                              <span>Specialized training available for all construction disciplines</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Aviation Industry */}
                  <section id="industry-4" className="scroll-mt-20">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-sky-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex">
                        <div className="md:w-2/5">
                          <div className="h-56 md:h-full">
                            <img
                              src="./Aviation.jpg"
                              alt="Aviation Industry"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <FaPlane className="text-white text-xl" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800">Aviation Industry</h4>
                              <p className="text-gray-600 text-sm mt-1">Airport operations and aircraft maintenance services</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Airport Ground Handling */}
                            <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-5 rounded-xl border border-sky-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                                  <FaTruckLoading className="text-white" />
                                </div>
                                <h5 className="font-bold text-gray-800">Ground Handling</h5>
                              </div>
                              <ul className="space-y-3">
                                {['Ground driving support', 'Baggage handling', 'Freight operations', 'Passenger assistance'].map((item, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <FaCheckCircle className="text-sky-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Aircraft Maintenance */}
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-5 rounded-xl border border-blue-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                                  <FaTools className="text-white" />
                                </div>
                                <h5 className="font-bold text-gray-800">Aircraft Maintenance</h5>
                              </div>
                              <ul className="space-y-3">
                                {['Aircraft repairs', 'Equipment calibration', 'Engine servicing', 'Avionics systems'].map((item, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <FaCheckCircle className="text-blue-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-4 rounded-lg">
                            <div className="flex flex-wrap gap-2">
                              {['Airline Catering', 'Aircraft Cleaning', 'Fuel Services', 'De-icing', 'Ramp Services', 'Cargo Operations', 'Aircraft Marshalling'].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Agriculture */}
                  <section id="industry-5" className="scroll-mt-20">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex flex-row-reverse">
                        <div className="md:w-2/5">
                          <div className="h-56 md:h-full">
                            <img
                              src="Agriculture.jpg"
                              alt="Agriculture"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4 shadow-md">
                              <FaSeedling className="text-white text-xl" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800">Agriculture</h4>
                              <p className="text-gray-600 text-sm mt-1">Sustainable farming and livestock management</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-5 rounded-xl border border-emerald-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                                  <FaLeaf className="text-emerald-600" />
                                </div>
                                <h5 className="font-bold text-gray-800">Crop Farming</h5>
                              </div>
                              <ul className="space-y-3">
                                {['Cultivation management', 'Harvest collection', 'Product sorting & grading', 'Shipping preparation'].map((item, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <FaCheckCircle className="text-emerald-500 mr-3" />
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-lime-100 p-5 rounded-xl border border-green-200">
                              <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                  <FaPaw className="text-green-600" />
                                </div>
                                <h5 className="font-bold text-gray-800">Livestock Farming</h5>
                              </div>
                              <ul className="space-y-3">
                                {['Breed management', 'Animal care & health', 'Product collection', 'Processing & packaging'].map((item, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-3" />
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                            <p className="text-sm text-gray-700">
                              <span className="font-semibold text-emerald-700">Modern farming techniques</span> including sustainable practices and technology integration
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                      <div className="p-3 bg-gradient-to-r from-[#2C5A5B] to-[#4CAF9D] text-white rounded-xl mr-4">
                        <FaIndustry />
                      </div>
                      16 Applicable Industries
                    </h2>
                    <p className="text-gray-600">High-demand sectors seeking skilled professionals across Japan</p>
                  </div>
                  <div className="px-6 py-3 bg-gradient-to-r from-[#2C5A5B] to-[#4CAF9D] text-white rounded-xl shadow-lg">
                    <span className="font-bold text-lg">16 Total Sectors</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`${industry.color} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                    >
                      <div className="flex items-start mb-4">
                        <div className="p-4 bg-white rounded-xl shadow-md mr-4">
                          <div className="text-3xl text-gray-700">
                            {industry.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{industry.title}</h3>
                          <p className="text-sm text-gray-600 mt-2">{industry.desc}</p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        Nationwide opportunities available
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[#2C5A5B] via-[#3a7a7b] to-[#4CAF9D] rounded-2xl p-8 text-white shadow-xl">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Complete Industry Coverage</h3>
                      <p className="text-gray-200 text-lg">
                        Our network spans all 16 designated industries with direct partnerships
                        with leading Japanese employers. We ensure the perfect match for your skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-[#2C5A5B] via-[#3a7a7b] to-[#4CAF9D] rounded-2xl text-white p-10 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2C5A5B]/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4CAF9D]/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Japanese Career Journey Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of successful professionals who have built their careers in Japan through our
              comprehensive SSW visa program. Expert guidance from application to arrival.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                <FaFileContract className="mr-3" />
                Contact Us
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                See Current Vacancies
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SSW1Page;