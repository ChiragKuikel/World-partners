import { CalendarDays, GraduationCap, Briefcase, Users, FileSignature, Plane, Globe, Building } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const processSteps = [
    {
        id: 1,
        title: "Learn Japanese",
        description: "Master essential language skills for work and daily life",
        icon: <GraduationCap className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 2,
        title: "Learn SSW Skills",
        description: "Acquire technical skills for Specified Skilled Worker visa",
        icon: <Briefcase className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 3,
        title: "Interview Preparation",
        description: "Mock interviews and communication training",
        icon: <Users className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 4,
        title: "Company Interview",
        description: "Direct interviews with Japanese employers",
        icon: <CalendarDays className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 5,
        title: "CoE & Agreement",
        description: "Certificate of Eligibility and employment contract",
        icon: <FileSignature className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 6,
        title: "Apply for Visa",
        description: "Visa application at VFS and document processing",
        icon: <Globe className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 7,
        title: "Orientation",
        description: "Pre-departure briefing and cultural training",
        icon: <Building className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    },
    {
        id: 8,
        title: "Departure to Japan",
        description: "Flight arrangements and arrival support",
        icon: <Plane className="w-12 h-12" />,
        iconColor: "text-[#4A9D9E]"
    }
];

export default function ProcessFlowSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background with Japan-themed image */}
            <div className="absolute inset-0 z-0">
                {/* Subtle dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/20 z-5"></div>
                
                {/* Japan-themed background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="./trial.jpg"
                        alt="Japan background"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Content - CENTERED CONTAINER */}
            <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8">
                {/* Header - LARGER AND CLEARER */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center justify-center mb-6 md:mb-8">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/25 flex items-center justify-center mr-4 md:mr-5 border-2 border-white/40 backdrop-blur-md">
                            <Plane className="w-8 h-8 md:w-9 md:h-9 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                            style={{
                                textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.5)'
                            }}>
                            Your Journey to Japan
                        </h2>
                    </div>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl mx-auto font-semibold"
                       style={{
                           textShadow: '0 1px 6px rgba(0,0,0,0.6), 0 2px 12px rgba(0,0,0,0.4)'
                       }}>
                        A clear 8-step roadmap for your smooth transition to working and living in Japan
                    </p>
                </div>

                {/* Process Flow - Desktop - LARGER TEXT AND CARDS */}
                <div className="hidden lg:block">
                    <div className="flex justify-center">
                        <div className="relative max-w-7xl">
                            <div className="grid grid-cols-8 gap-8 items-center justify-center">
                                {processSteps.map((step, index) => (
                                    <React.Fragment key={step.id}>
                                        {/* Step Card - LARGER */}
                                        <div className="relative group">
                                            {/* Step Number - LARGER */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-12 
                                                rounded-full bg-white/25 border-2 border-white/40 backdrop-blur-md
                                                flex items-center justify-center z-20">
                                                <span className="text-white text-lg font-bold">{index + 1}</span>
                                            </div>

                                            {/* Card - LARGER WITH MORE PADDING */}
                                            <div className="mt-12 bg-white/20 backdrop-blur-lg rounded-xl p-7 
                                                border-2 border-white/30 group-hover:bg-white/25 
                                                group-hover:border-white/45 transition-all duration-300
                                                hover:scale-105 mx-auto max-w-[200px]">
                                                <div className={`${step.iconColor} mb-6 flex justify-center`}>
                                                    {step.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-white text-center mb-4 leading-tight"
                                                    style={{
                                                        textShadow: '0 1px 4px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)'
                                                    }}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-base text-white/95 text-center leading-relaxed"
                                                   style={{
                                                       textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)'
                                                   }}>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow - LARGER */}
                                        {index < processSteps.length - 1 && (
                                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
                                                <svg
                                                    width="48"
                                                    height="16"
                                                    viewBox="0 0 48 16"
                                                    fill="none"
                                                    className="text-white/80"
                                                >
                                                    <path
                                                        d="M0 8 H36 M36 8 L30 4 M36 8 L30 12"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Flow - Tablet - LARGER TEXT */}
                <div className="hidden md:block lg:hidden">
                    <div className="flex justify-center">
                        <div className="max-w-5xl">
                            <div className="grid grid-cols-4 gap-10 justify-center">
                                {processSteps.map((step, index) => (
                                    <div key={step.id} className="relative group flex justify-center">
                                        {/* Step Number - LARGER */}
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-11 h-11 rounded-full bg-white/25 flex items-center justify-center border-2 border-white/40 z-10 backdrop-blur-md">
                                            <span className="text-white text-base font-bold">{index + 1}</span>
                                        </div>
                                        
                                        {/* Card - LARGER */}
                                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border-2 border-white/30 group-hover:bg-white/25 group-hover:border-white/45 transition-all duration-300 hover:scale-105 max-w-[220px]">
                                            <div className={`${step.iconColor} mb-5 flex justify-center`}>
                                                {step.icon}
                                            </div>
                                            
                                            <h3 className="text-lg font-bold text-white mb-4 text-center leading-tight"
                                                style={{
                                                    textShadow: '0 1px 4px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)'
                                                }}>
                                                {step.title}
                                            </h3>
                                            
                                            <p className="text-sm text-white/95 text-center leading-relaxed"
                                               style={{
                                                   textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)'
                                               }}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Flow - Mobile - LARGER TEXT */}
                <div className="md:hidden">
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg">
                            <div className="relative">
                                {/* Vertical line - THICKER */}
                                <div className="absolute left-1/2 top-0 bottom-0 w-1.5 transform -translate-x-1/2 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

                                {/* Arrow markers on line - LARGER */}
                                {[...Array(7)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-5 h-5 text-white/80 transform -translate-x-1/2"
                                        style={{
                                            left: '50%',
                                            top: `${12.5 + i * 12.5}%`,
                                        }}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 16 16"
                                            style={{ transform: 'rotate(90deg)' }}
                                        >
                                            <path
                                                d="M0 8 L12 8 M12 8 L8 4 M12 8 L8 12"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                ))}

                                {/* Steps - LARGER CARDS */}
                                <div className="space-y-12">
                                    {processSteps.map((step, index) => (
                                        <div key={step.id} className="relative group flex justify-center">
                                            {/* Step Number - LARGER */}
                                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-11 h-11 rounded-full bg-white/25 flex items-center justify-center border-2 border-white/40 z-10 backdrop-blur-md">
                                                <span className="text-white text-base font-bold">{index + 1}</span>
                                            </div>

                                            {/* Dot on line - LARGER */}
                                            <div
                                                className="absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-white/95 border-2 border-white z-20"
                                            />

                                            {/* Content Card - LARGER */}
                                            <div className="mt-14 bg-white/20 backdrop-blur-lg rounded-xl p-6 border-2 border-white/30 group-hover:bg-white/25 group-hover:border-white/45 transition-all duration-300 w-full max-w-sm">
                                                <div className="flex flex-col items-center gap-5">
                                                    <div className={`${step.iconColor}`}>
                                                        {step.icon}
                                                    </div>
                                                    <div className="text-center">
                                                        <h3 className="text-lg font-bold text-white mb-3 leading-tight"
                                                            style={{
                                                                textShadow: '0 1px 4px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)'
                                                            }}>
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-base text-white/95 leading-relaxed"
                                                           style={{
                                                               textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)'
                                                           }}>
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
                    </div>
                </div>

                {/* CTA - LARGER AND CLEARER */}
                <div className="mt-24 md:mt-28 text-center">
                    <div className="relative inline-block">
                        <a
                            href="/apply"
                            className="inline-flex items-center px-10 py-5 md:px-12 md:py-6 bg-white/30 backdrop-blur-lg text-white rounded-full font-bold text-xl md:text-2xl hover:bg-white/40 transition-all duration-300 border-3 border-white/50 hover:border-white/60 hover:scale-105 group"
                            style={{
                                textShadow: '0 1px 4px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
                                boxShadow: '0 6px 25px rgba(0,0,0,0.4)'
                            }}
                        >
                            Start Your Journey
                            <svg className="ml-4 w-6 h-6 md:w-7 md:h-7 transform group-hover:translate-x-2 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-8 text-white/90 text-lg font-medium"
                       style={{
                           textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)'
                       }}>
                        Average processing time: 3-6 months
                    </p>
                </div>
            </div>
        </section>
    );
}


import { CalendarDays, GraduationCap, Briefcase, Users, FileSignature, Plane, Globe, Building } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const processSteps = [
    {
        id: 1,
        title: "Learn Japanese",
        description: "Master essential language skills for work and daily life",
        icon: <GraduationCap className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 2,
        title: "Learn SSW Skills",
        description: "Acquire technical skills for Specified Skilled Worker visa",
        icon: <Briefcase className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 3,
        title: "Interview Preparation",
        description: "Mock interviews and communication training",
        icon: <Users className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 4,
        title: "Company Interview",
        description: "Direct interviews with Japanese employers",
        icon: <CalendarDays className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 5,
        title: "CoE & Agreement",
        description: "Certificate of Eligibility and employment contract",
        icon: <FileSignature className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 6,
        title: "Apply for Visa",
        description: "Visa application at VFS and document processing",
        icon: <Globe className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 7,
        title: "Orientation",
        description: "Pre-departure briefing and cultural training",
        icon: <Building className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    },
    {
        id: 8,
        title: "Departure to Japan",
        description: "Flight arrangements and arrival support",
        icon: <Plane className="w-8 h-8" />,
        iconColor: "text-[#e6c90e]"
    }
];

export default function ProcessFlowSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background with Japan-themed image */}
            <div className="absolute inset-0 z-0">
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#0f2929] opacity-20 z-10"></div>
                
                {/* Japan-themed background image */}
                <div className="absolute inset-0 z-0">
                    {/* Option 1: Use a local image */}
                    <Image
                        src="./Trial.jpg" // Add your image to public/images/
                        alt="Japan background"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        sizes="100vw"
                    />
                    
                    {/* Option 2: Use an online image (uncomment and add your URL) */}
                    {/* 
                    <div className="relative w-full h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                            alt="Mount Fuji and Tokyo background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    */}
                    
                    {/* Option 3: Fallback gradient if image doesn't load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2C5A5B] via-[#1a3a3a] to-[#0f2929] opacity-20"></div>  {/*opacity change garne thau */}
                </div>
                
                {/* Subtle pattern overlay for texture */}
                <div 
                    className="absolute inset-0 opacity-5 z-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 md:mr-4 border border-white/20 backdrop-blur-sm">
                            <Plane className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Your Journey to Japan
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                        A clear 8-step roadmap for your smooth transition to working and living in Japan
                    </p>
                </div>

                {/* Process Flow - Desktop */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-[repeat(8,3fr)_repeat(7,1fr)] items-center gap-4">
                        {processSteps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                {/* Step Card */}
                                <div className="relative group col-span-1">
                                    {/* Step Number */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 
                                        rounded-full bg-white/10 border border-white/20 backdrop-blur-sm
                                        flex items-center justify-center z-20">
                                        <span className="text-white text-m font-semibold">{index + 1}</span>
                                    </div>

                                    {/* Card */}
                                    <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-5 
                                        border border-white/20 group-hover:bg-white/15 
                                        group-hover:border-white/30 transition-all duration-300">
                                        <div className={`${step.iconColor} mb-4 flex justify-center`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-base text-xl font-bold text-white text-center mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xl text-white text-center">{step.description}</p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                {index < processSteps.length - 1 && (
                                    <div className="col-span-0.5 flex justify-center -mx-2">
                                        <svg
                                            width="28"
                                            height="12"
                                            viewBox="0 0 28 12"
                                            fill="none"
                                            className="text-white"
                                        >
                                            <path
                                                d="M0 6 H22 M22 6 L16 2 M22 6 L16 10"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
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
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20 z-10 backdrop-blur-sm">
                                        <span className="text-white font-semibold text-xs">{index + 1}</span>
                                    </div>
                                    
                                    {/* Card */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                                        <div className={`${step.iconColor} mb-3 flex justify-center`}>
                                            {step.icon}
                                        </div>
                                        
                                        <h3 className="text-sm font-semibold text-white mb-2 text-center">
                                            {step.title}
                                        </h3>
                                        
                                        <p className="text-sm text-white/70 text-center">
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
                                    <div className="absolute -left-7 top-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20 z-10 backdrop-blur-sm">
                                        <span className="text-white font-semibold text-xs">{index + 1}</span>
                                    </div>

                                    {/* Dot on line */}
                                    <div
                                        className="absolute -left-7.5 top-3.5 w-2 h-2 rounded-full bg-white/80 border border-white z-20"
                                    />

                                    {/* Content Card */}
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                                        <div className="flex items-start gap-3">
                                            <div className={`${step.iconColor} flex-shrink-0`}>
                                                {step.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs text-white/70 leading-relaxed">
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
                <div className="mt-16 md:mt-20 text-center">
                    <div className="relative inline-block">
                        <a
                            href="/apply"
                            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/40 group"
                        >
                            Start Your Journey
                            <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-4 text-white/60 text-sm">
                        Average processing time: 3-6 months
                    </p>
                </div>
            </div>
        </section>
    );
}


<div className="relative mt-10">
                    {/* Background glow */}
                    <div className={`absolute inset-0 ${step.iconBg} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105 hover:shadow-2xl">
                      <div className={`${step.iconColor} mb-4 flex justify-center`}>
                        <div className="relative">
                          {step.icon}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 rounded-full blur-sm"></div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 text-center">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-white/70 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>