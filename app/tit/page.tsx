// app/tit/page.tsx

import Image from "next/image";
import { CheckCircle, Users, Globe, Target, Award, Clock, ArrowRight, Building, Heart, Factory, Sprout } from "lucide-react";
import Navbar from "@/components/navbar";
import { FaFileContract, FaArrowRight } from "react-icons/fa";
import Footer from "@/components/footer";
import type { Metadata } from "next";
export const metadata:Metadata = {
    title: "Training, Internship & Technology (TIT) | World Partner Nepal",
    description: "Explore World Partner's TIT program in Nepal offering training, internship opportunities, and technology guidance to help Nepali youths build careers in Japan.",
}
export default function TITPage() {
    const stats = [
        { label: "Successful Placements", value: "2,500+", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Success Rate", value: "98%", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
        { label: "Japanese Partners", value: "89+", icon: Globe, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Years of Excellence", value: "25+", icon: Award, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    const programDetails = [
        {
            title: "Maximum Duration",
            description: "Up to 5 years comprehensive training",
            icon: Clock,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Program Scope",
            description: "89 specialized job categories",
            icon: Target,
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Key Requirement",
            description: "Must return to home country after training",
            icon: Globe,
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    const categories = [
        {
            title: "Construction",
            emoji: "🏗️",
            description: "Learn building techniques, civil engineering, and architectural skills in Japan's advanced construction industry.",
            features: ["Structural Engineering", "Equipment Operation", "Safety Protocols", "Blueprint Reading"],
            icon: Building,
            gradient: "from-blue-500 to-cyan-500",
            image: "./Construction-TIT.jpg"

        },
        {
            title: "Nursing Care",
            emoji: "🩺",
            description: "Gain expertise in healthcare assistance, elderly care, and medical support systems in Japanese healthcare facilities.",
            features: ["Patient Care", "Medical Procedures", "Rehabilitation", "Care Planning"],
            icon: Heart,
            gradient: "from-purple-500 to-pink-500",
            image: "./Nursing-TIT.jpg"
        },
        {
            title: "Manufacturing",
            emoji: "🏭",
            description: "Master industrial production, quality control, and technical operations in Japan's manufacturing sector.",
            features: ["Machinery Operation", "Quality Assurance", "Industrial Safety", "Process Optimization"],
            icon: Factory,
            gradient: "from-green-500 to-emerald-500",
            image: "Manufacturing-TIT.jpg"
        },
        {
            title: "Agriculture",
            emoji: "🚜",
            description: "Develop skills in modern farming, sustainable agriculture, and crop management using Japanese techniques.",
            features: ["Crop Cultivation", "Greenhouse Technology", "Livestock Care", "Irrigation Systems"],
            icon: Sprout,
            gradient: "from-yellow-500 to-orange-500",
            image: "Agriculture-TIT.jpg"
        }
    ];

    const excludedFields = [
        "Food Service (Restaurant)",
        "Entertainment Industry",
        "Retail Sector"
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#2C5A5B] via-[#2C5A5B] to-teal-500 text-white pt-14 pb-16">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-medium">Established 1998</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
                            Technical Intern Training
                            <span className="block text-lg sm:text-xl font-normal mt-2 text-teal-100">
                                (TIT Program)
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Acquire advanced technical skills and knowledge in Japan's leading industries
                            to contribute to your home country's development.
                        </p>

                        {/* Program Overview in Hero Section */}
                        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {programDetails.map((detail, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                    <div className={`inline-flex p-1 rounded-lg bg-gradient-to-br ${detail.gradient} mb-3`}>
                                        <detail.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-1.5">
                                        {detail.title}
                                    </h3>
                                    <p className="text-sm text-teal-100/90">
                                        {detail.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-16 relative -mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Categories Grid */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#2C5A5B] mb-3">
                                Available Fields
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Covering 89 specialized job categories across multiple industries
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {categories.map((category, index) => (
                                <div key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                                                    <category.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">
                                                        {category.title}
                                                    </h3>
                                                    <div className="text-gray-500 text-sm mt-1">{category.emoji} Field</div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6">
                                            {category.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            {category.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                            <Image
                                                src={category.image}
                                                alt={`${category.title} Training`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-10`} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Requirements & Benefits */}
                    <div className="mb-16">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#2C5A5B] mb-8">
                                    Program Requirements & Benefits
                                </h3>

                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900">Application Process</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <div className="bg-blue-50 rounded-full p-1 mt-1">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                                </div>
                                                <span className="text-gray-700">Apply via accredited Sending Organization in your home country</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="bg-blue-50 rounded-full p-1 mt-1">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                                </div>
                                                <span className="text-gray-700">Pass technical skill assessment and interview</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="bg-blue-50 rounded-full p-1 mt-1">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                                </div>
                                                <span className="text-gray-700">Complete pre-departure Japanese language training</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="bg-green-100 p-2 rounded-lg">
                                                <Award className="w-5 h-5 text-green-600" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900">Program Benefits</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <div className="bg-green-50 rounded-full p-1 mt-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                                </div>
                                                <span className="text-gray-700">Hands-on experience with cutting-edge technology</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="bg-green-50 rounded-full p-1 mt-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                                </div>
                                                <span className="text-gray-700">Comprehensive Japanese language and cultural training</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="bg-green-50 rounded-full p-1 mt-1">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                                </div>
                                                <span className="text-gray-700">Internationally recognized technical certification</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Warning Notice */}
                    <div className="mb-12">
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-xl p-5">
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg">
                                    <span className="text-white text-lg">⚠️</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Important Notice
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        "Food Service" (Restaurant work) is <span className="font-semibold text-red-600">NOT available</span> under the TIT program.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {excludedFields.map((field, index) => (
                                            <span key={index} className="bg-white border border-red-200 px-3 py-1 rounded-full text-sm font-medium text-red-700">
                                                {field}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CTA Section */}
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
                </div>
                <Footer />
            </section>
        </main>
    );
}