import React from 'react';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: 'Khadgee Pradeep',
      role: 'Work Setup Support Recipient',
      message: '"Huge thanks to World Partner for your awesome support with my work setup here in Japan. Your clear guidance really helped streamline the whole process, and it made the transition so much smoother. Everything is set up now, and I sincerely appreciate all the extra effort you put in to make that happen. Thank you!"',
      image: './Pradeep.jpeg',
      alt: 'Khadgee Pradeep'
    },
    {
      id: 2,
      name: 'Shayal Khadka',
      role: 'Ground Handling Staff',
      message: '"I am extremely grateful to World Partner for guiding me throughout the job placement process in Japan. Their support and guidance made my dream a reality. Thank you for helping me take this important step in my career!"',
      image: './Sayal.jpeg',
      alt: 'Shayal Khadka'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" style={{
        backgroundImage: 'url(./Airport.jpg)', // Add your image path here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            Hear from individuals who have successfully transitioned to working in Japan with our support
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {successStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-1"
            >
              {/* Top Section with Large Image */}
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Large Profile Image - Centered */}
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 shadow-2xl" style={{ borderColor: '#2C5A5B' }}>
                    <img 
                      src={story.image} 
                      alt={story.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundColor: '#2C5A5B' }}></div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-20">            
                {/* Testimonial Text */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic text-center">
                    {story.message}
                  </p>
                </div>

                {/* Person Info */}
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2" style={{ color: '#2C5A5B' }}>
                    {story.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    {story.role}
                  </p>
                  
                  {/* Star Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-6 h-6 mx-1" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        style={{ color: '#FFD700' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Location Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100">
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: '#2C5A5B' }}
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold" style={{ color: '#2C5A5B' }}>Japan</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;