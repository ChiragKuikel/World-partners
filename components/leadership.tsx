"use client"
import React, { useState } from 'react';

interface Leader {
  id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  imageUrl: string;
  logo: string;
}

const LeadershipSection: React.FC = () => {
  // Using Record type for better type safety
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const leaders: Leader[] = [
    {
      id: 1,
      name: "Narayan Pokhrel",
      title: "CEO, World Partner",
      description: `I believe in always moving forward -
working hard and taking on new
challenges.
You never know what's possible until you
try, and true results come through
persistence.
What seems difficult often becomes
achievable once you take that first step.
Don't be afraid to fail - every experience
leads to future success.
Through 12years of experience in Japan,
I've learned and grown in many ways.
I hope to share those insights with people
interested in Japan and inspire new
challenges ahead.
Driven by a desire to help others, I have
also been actively involved in volunteer
activities.
Contributing to others' happiness is my
greatest motivation.
Together, let's continue to grow and build
a better future.
`,
      email: "ramesh@worldpartners.com",
      imageUrl: "./CEO1.jpeg",
      logo:"/CroppedLogo.jpeg",
    },
    {
      id: 2,
      name: " Go Uenaka",
      title: "CEO, Glowing Partner",
      description: `First of all, as a Japanese national, I would like to express my sincere appreciation for your interest in Japan.

Glowing Partner Co., Ltd., based in Japan, is a company in which all employees are foreign nationals, and approximately 95% of them are from Nepal.
I hold great admiration for Nepalese people. They are friendly, place strong value on family and community, and I believe they possess a deep understanding of the "truly important things in life," which many Japanese may have begun to overlook.
By utilizing the bridge we have established between Nepal and Japan through the collaboration of World Partner Pvt. Ltd. and Glowing Partner Co., Ltd., we hope to welcome many more Nepali individuals to Japan.

Furthermore, after your arrival in Japan, we will provide our fullest support to ensure that you genuinely feel, "I am truly glad I came to Japan."`,
      email: "sita@worldpartners.com",
      imageUrl: "./CEO2.jpg",
      logo:"/GlowingLogo.jpeg",
    }
  ];

  const toggleExpand = (id: number): void => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full bg-gradient-to-br from-teal-50 via-white to-blue-50 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper with rounded rectangle, shadow, and teal-inspired background */}
        <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-2xl shadow-sm overflow-hidden border border-teal-100">

          {/* Optional decorative top border */}
          <div className="h-1 bg-gradient-to-r from-teal-400 to-cyan-400"></div>

          {/* Inner padding for the entire section */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">

            {/* Upper Section - Map/Image */}
            <div className="mb-10 md:mb-8">
              <div className="max-w-5xl mx-auto">
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-teal-200">
                  <img
                    src="./Map1.png"
                    alt="World Map"
                    className="w-full h-48 sm:h-56 md:h-86 object-contain sm:object-cover"
                  />
                  {/* Optional overlay with teal tint */}
                  <div className="absolute inset-0 bg-teal-900/5 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Two Leaders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
              {leaders.map((leader) => (
                <div key={leader.id} className="flex flex-col items-center">

                  {/* Profile Image */}
                  <div className="relative mb-8">
                    <div className="relative">
                      <div className="w-34 h-34 md:w-42 md:h-42 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-teal-100">
                        <img
                          src={leader.imageUrl}
                          alt={leader.name}
                          className="w-full h-full object-cover transform scale-125  hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Updated logo to match teal color scheme */}
                      <div className="absolute -bottom-4 -right-4 w-14 h-14  rounded-full border-3 border-white shadow-lg flex items-center justify-center overflow-hidden bg-white ">
                        <img src={leader.logo} className='object-contain' />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full text-center max-w-lg mx-auto">
                    
                    <div className="mb-6">
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-lg text-teal-700 font-medium">
                        {leader.title}
                        {
                        leader.id === 2 ? <a href='https://www.glowing-partner.jp/' className='underline underline-offset-2'>(↪Visit)</a>:<></>
                     
                      }
                      </p>
                      
                    </div>

                    {/* Expandable Description */}
                    <div className="mb-8">
                      <div className="relative">
                        <p className={`text-gray-700 leading-relaxed text-base md:text-lg text-left ${!expanded[leader.id] ? 'line-clamp-5' : ''
                          }`}>
                          {leader.description}
                        </p>

                        {/* Gradient overlay for truncated text */}
                        {!expanded[leader.id] && (
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExpand(leader.id)}
                        className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
                      >
                        {expanded[leader.id] ? 'Show Less' : 'Read More'}
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform duration-300 ${expanded[leader.id] ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;