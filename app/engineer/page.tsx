import Image from "next/image";
import { 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Award, 
  Users, 
  Building, 
  Code, 
  FileText, 
  Languages, 
  Cpu,
  CheckCircle,
  XCircle,
  ArrowRight,
  BarChart
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EngineerSpecialistPage() {
  const eligibilityCriteria = [
    {
      title: "Educational Requirement",
      description: "Bachelor's Degree or equivalent",
      details: "Minimum 4-year university degree in relevant field",
      icon: GraduationCap,
      gradient: "from-[#2C5A5B] to-teal-400"
    },
    {
      title: "Professional Experience",
      description: "10+ years alternative",
      details: "Can substitute degree with extensive work experience",
      icon: Briefcase,
      gradient: "from-[#2C5A5B] to-emerald-400"
    },
    {
      title: "Job Alignment",
      description: "Field-Major Match",
      details: "Work must directly relate to your academic background",
      icon: Award,
      gradient: "from-[#2C5A5B] to-cyan-400"
    }
  ];

  const availableFields = [
    {
      title: "Engineering Specialists",
      icon: Cpu,
      description: "Software developers, mechanical engineers, electrical engineers, architects",
      requirements: ["Bachelor's in Engineering", "Technical certifications", "Project portfolio"],
      color: "bg-blue-50 text-blue-700",
      gradient: "from-blue-500 to-cyan-500",
      image: "./software.jpg"
    },
    {
      title: "Humanities Specialists",
      icon: FileText,
      description: "Translators, interpreters, marketing, HR, education, research analysts",
      requirements: ["Bachelor's in Humanities", "Language proficiency", "Cultural knowledge"],
      color: "bg-purple-50 text-purple-700",
      gradient: "from-purple-500 to-pink-500",
      image: "./Humanities.jpg"
    },
    {
      title: "International Services",
      icon: Globe,
      description: "Business consultants, international relations, trade specialists, cultural coordinators",
      requirements: ["International experience", "Business knowledge", "Cross-cultural skills"],
      color: "bg-green-50 text-green-700",
      gradient: "from-green-500 to-emerald-500",
      image: "./Business.jpg"
    }
  ];

  const prohibitedWork = [
    "Cleaning Services",
    "Factory Assembly Line",
    "Restaurant Waiting Staff",
    "Manual Labor",
    "Retail Store Clerks",
    "Construction Labor"
  ];

  const benefits = [
    {
      title: "Professional Environment",
      description: "Work in corporate offices, research facilities, or specialized institutions",
      icon: Building
    },
    {
      title: "Career Growth",
      description: "Clear promotion paths and professional development opportunities",
      icon: BarChart
    },
    {
      title: "International Network",
      description: "Connect with global professionals and Japanese industry leaders",
      icon: Users
    },
    {
      title: "Cultural Integration",
      description: "Opportunities for language learning and cultural immersion",
      icon: Languages
    }
  ];

  const stats = [
    { label: "Average Salary", value: "¥5M+", description: "Annual professional compensation" },
    { label: "Visa Duration", value: "1-5 Years", description: "Renewable based on employment" },
    { label: "Processing Time", value: "2-4 Months", description: "From application to approval" },
    { label: "Success Rate", value: "92%", description: "For qualified applicants" }
  ];

  const requiredDocuments = [
    "University Degree Certificate",
    "Official Transcripts",
    "Professional Resume/CV",
    "Employment Contract",
    "Company Registration Proof",
    "Business Plan (for employers)"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section - Consistent with TIT page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#244A4B] via-[#2C5A5B] to-teal-600 text-white pt-16 pb-20">
  {/* Soft glow */}
  <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left content */}
      <div>
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
          <Award className="w-4 h-4 text-teal-200" />
          <span className="text-sm font-medium">Professional Visa Category</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Engineer / Specialist  
          <span className="block text-teal-200">in Humanities</span>
        </h1>

        <div className="w-20 h-1 bg-teal-300 rounded-full mb-5" />

        <p className="text-base sm:text-lg text-teal-100 max-w-xl leading-relaxed mb-8">
          For university graduates and professionals seeking to apply their expertise in Japan’s
          corporate and specialized industries through meaningful, skill-based roles.
        </p>

        {/* Quick stats */}
        <div className="flex gap-6 text-sm text-teal-100">
          <div>
            <p className="text-xl font-bold text-white">90%+</p>
            <p>Approval Rate</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">3–5 yrs</p>
            <p>Visa Duration</p>
          </div>
          <div>
            <p className="text-xl font-bold text-white">Multiple</p>
            <p>Job Fields</p>
          </div>
        </div>
      </div>

      {/* Right cards – Icon Rail design */}
<div className="relative space-y-5 pl-6">
  {/* Vertical rail */}
  <div className="absolute left-2 top-0 bottom-0 w-px bg-teal-300/40" />

  {eligibilityCriteria.map((criteria, index) => (
    <div
      key={index}
      className="relative flex gap-5 items-start group"
    >
      {/* Rail Icon */}
      <div
        className={`relative z-10 flex items-center justify-center
                    w-10 h-10 rounded-full
                    bg-gradient-to-br ${criteria.gradient}
                    ring-4 ring-[#244A4B]`}
      >
        <criteria.icon className="w-4.5 h-4.5 text-white" />
      </div>

      {/* Card */}
      <div
        className="flex-1 bg-white/10 backdrop-blur-md
                   rounded-xl p-5
                   border border-white/15
                   transition-all duration-300
                   hover:bg-white/15 hover:shadow-lg"
      >
        <h3 className="text-sm font-semibold mb-1">
          {criteria.title}
        </h3>

        <p className="text-xs font-medium text-teal-100 mb-1">
          {criteria.description}
        </p>

        <p className="text-[11px] text-teal-100/70 leading-relaxed">
          {criteria.details}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
</section>


      {/* Main Content */}
      <section className="py-16 relative -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Available Fields */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#2C5A5B] mb-3">
                Professional Fields Available
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Three main categories of specialized work for degree holders
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {availableFields.map((field, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className={`h-2 bg-gradient-to-r ${field.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${field.gradient}`}>
                        <field.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {field.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {field.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Requirements:</h4>
                      <div className="space-y-2">
                        {field.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={field.image}
                        alt={`${field.title} in Japan`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${field.gradient} opacity-20`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Notice - PROHIBITED WORK */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-lg">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-gray-700 mb-6">
                    This visa is for <span className="font-semibold text-red-600">professional white-collar work only</span>. 
                    The following activities are strictly prohibited:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {prohibitedWork.map((work, index) => (
                      <span key={index} className="bg-white border border-red-200 px-4 py-2 rounded-full text-sm font-medium text-red-700">
                        {work}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-6 text-sm">
                    <span className="font-semibold">Important:</span> Violating these restrictions can result in visa cancellation 
                    and deportation. You will engage exclusively in professional office or engineering work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout - Benefits & Requirements */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Program Benefits
                </h3>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Requirements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Required Documents
                </h3>
              </div>
              <div className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-white p-1.5 rounded-md shadow-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Note:</span> All foreign documents must be officially 
                  translated into Japanese and notarized where required.
                </p>
              </div>
            </div>
          </div>

         

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#2C5A5B] via-[#3a7a7b] to-[#4CAF9D] rounded-2xl text-white p-10 mb-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2C5A5B]/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4CAF9D]/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Professional Career Journey Today</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join successful professionals who have built their careers in Japan through our
                comprehensive specialist visa program. Expert guidance from application to arrival.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                  <Briefcase className="mr-3" />
                  Contact Us
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  See Current Vacancies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}