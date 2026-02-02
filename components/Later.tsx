import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
  companyName?: string;
}

function Footer() {
  const primaryColor = '#FFFFFF'; // Changed to white

  // Social media links
  const socialMediaLinks = [
    { icon: faFacebookF, url: 'https://facebook.com', label: 'Facebook' },
    { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: faInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: faLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: faYoutube, url: 'https://youtube.com', label: 'YouTube' },
  ];

  // Office hours data
  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <footer className="w-full py-4" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-full mx-auto px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">

          {/* Column 1 */}
          <div className="flex-1 space-y-6 text-black flex flex-col justify-center items-center">
            {/* Row 1: Company Logo */}
            <div className="w-full mb-4 flex justify-center">
              <div className="bg-gray-100 w-30 h-30 rounded-lg overflow-hidden">
                <img
                  src="./Logo.jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            {/* Row 2: Company Address */}
            <div className="space-y-2 w-full text-center">
              <p className="text-gray-700 text-2xl">
                <span className="font-semibold text-black ">Our Address: </span>
                123 Main Street, City, State 12345, Country
              </p>
            </div>

            {/* Row 3: Phone Number */}
            <div className="space-y-2 w-full text-center">
              <p className="text-gray-700 text-2xl">
                <span className="font-semibold text-black">Call Us: </span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>

            {/* Row 4: Email Address */}
            <div className="space-y-2 w-full text-center">
              <p className="text-gray-700 text-2xl">
                <span className="font-semibold text-black">Email Us: </span>
                <a
                  href="mailto:info@company.com"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  info@company.com
                </a>
              </p>
            </div>

            {/* Row 5: Follow Us & Social Media */}
            <div className="space-y-4 pt-2 w-full text-center ">
              <p className="font-semibold text-black text-lg">Follow Us</p>
              <div className="flex space-x-4 justify-center">
                {socialMediaLinks.map((social, index) => {
                  // Define original brand colors for each icon
                  let iconColor;
                  switch (social.label) {
                    case 'Facebook':
                      iconColor = '#1877F2'; // Facebook blue
                      break;
                    case 'Twitter':
                      iconColor = '#1DA1F2'; // Twitter blue
                      break;
                    case 'Instagram':
                      iconColor = '#E4405F'; // Instagram pink
                      break;
                    case 'LinkedIn':
                      iconColor = '#0A66C2'; // LinkedIn blue
                      break;
                    case 'YouTube':
                      iconColor = '#FF0000'; // YouTube red
                      break;
                    default:
                      iconColor = '#374151'; // Default gray-700
                  }

                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        style={{ color: iconColor }}
                        size="lg"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 space-y-6 text-black">
            {/* Row 1: Office Hours */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-black">Office Hours</h3>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 ">{schedule.day}</span>
                    <span className="font-medium text-gray-800">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2-4: Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700">
                Stay updated with our latest news and offers.
              </p>

              <div className="space-y-3">
                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 rounded-lg bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>

                {/* Subscribe Button */}
                <button
                  className="w-full px-6 py-4 mt-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Facebook Page */}
          <div className="flex-1">
            <div className="space-y-4">
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {/* Placeholder for Facebook page image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center p-4 text-white">
                  <h3 className="text-xl font-semibold text-white mb-4">Follow us on Facebook</h3>
                  <div className="text-5xl mb-4">f</div>
                  <p className="text-xl font-bold text-center"> on Facebook</p>
                  <p className="text-white/80 text-center mt-2">Like us for updates and news</p>
                  <div className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full">
                    Visit Page
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg">
                      Visit Facebook Page
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;