"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Add blur + shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Update active link on page load
    const updateActiveLink = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", updateActiveLink);
    
    // Initial update
    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", updateActiveLink);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vacancy", href: "/jobs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const sswDropdownItems = [
    { name: "SSW", href: "/ssw" },
    { name: "TIT", href: "/tit" },
    { name: "Bachelors & engineering", href: "/engineer" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        sticky top-0 z-50 border-b border-border
        ${scrolled ? "bg-background/80 backdrop-blur-xl shadow-sm" : "bg-background"}
      `}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center gap-2">
               <div className="w-10 h-10 flex items-center justify-center">
                 <img src='/Logo.png' alt="World Partner Logo" /> 
              </div>

              <span className="text-xl font-bold text-primary sm:inline">
                World Partner
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {/* Home */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.08 }}
              className="relative"
            >
              <Link
                href="/"
                className={`relative text-text transition-colors text-lg px-3 py-2 ${
                  activeLink === "/" 
                    ? "text-primary font-semibold" 
                    : "hover:text-primary"
                }`}
                onClick={() => {
                  setActiveLink("/");
                  setDropdownOpen(false);
                }}
              >
                Home
                
                {/* Rounded Rectangular Box Animation */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary -z-10 bg-primary/20"
                  initial={false}
                  animate={{
                    scale: activeLink === "/" ? 1 : 0,
                    opacity: activeLink === "/" ? 1 : 0,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                  }}
                />
              </Link>
            </motion.div>

            {/* SSW Skill Preparation Dropdown (Now 2nd position) */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.08 }}
              className="relative"
              ref={dropdownRef}
            >
              <button
                className={`relative flex items-center gap-1 text-text transition-colors text-lg px-3 py-2 rounded-lg  ${
                  dropdownOpen || sswDropdownItems.some(item => activeLink === item.href)
                    ? "text-primary font-semibold" 
                    : "hover:text-primary"
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Visa
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />

                {/* Rounded Rectangular Box Animation for Dropdown */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary -z-10 bg-primary/20"
                  initial={false}
                  animate={{
                    scale: dropdownOpen || sswDropdownItems.some(item => activeLink === item.href) ? 1 : 0,
                    opacity: dropdownOpen || sswDropdownItems.some(item => activeLink === item.href) ? 1 : 0,
                  }}
                  whileHover={{ 
                    scale: 0.9,
                    opacity: 0.2,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                  }}
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-xl rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                  >
                    {sswDropdownItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 text-sm transition-all ${
                            activeLink === item.href
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                          }`}
                          onClick={() => {
                            setActiveLink(item.href);
                            setDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Rest of the links (About, Vacancy, Blog, Contact) */}
            {["About", "Vacancy", "Blog", "Contact"].map((name, index) => {
              const link = navLinks.find(l => l.name === name);
              if (!link) return null;
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 2) * 0.08 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`relative text-text transition-colors text-lg px-3 py-2 ${
                      activeLink === link.href 
                        ? "text-primary font-semibold" 
                        : "hover:text-primary"
                    }`}
                    onClick={() => {
                      setActiveLink(link.href);
                      setDropdownOpen(false);
                    }}
                  >
                    {link.name}
                    
                    {/* Rounded Rectangular Box Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-primary -z-10 bg-primary/20"
                      initial={false}
                      animate={{
                        scale: activeLink === link.href ? 1 : 0,
                        opacity: activeLink === link.href ? 1 : 0,
                      }}
                      whileHover={{ 
                        scale: activeLink === link.href ? 1 : 0.9,
                        opacity: activeLink === link.href ? 1 : 0.2,
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                      }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text hover:text-primary transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 * 0.1 }}
                >
                  <Link
                    href="/"
                    className={`block px-4 py-3 text-lg transition-all ${
                      activeLink === "/"
                        ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                        : "text-text hover:bg-gray-100 hover:text-primary"
                    }`}
                    onClick={() => {
                      setActiveLink("/");
                      setIsOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* SSW Skill Preparation (Mobile) - Now 2nd */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 * 0.1 }}
                >
                  <div className="px-4 py-3">
                    <div className="text-lg font-medium text-text mb-2">Visa</div>
                    <div className="space-y-1 pl-4">
                      {sswDropdownItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 text-base rounded transition-all ${
                              activeLink === item.href
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-text hover:bg-gray-100 hover:text-primary"
                            }`}
                            onClick={() => {
                              setActiveLink(item.href);
                              setIsOpen(false);
                              setDropdownOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Rest of links */}
                {["About", "Vacancy", "Blog", "Contact"].map((name, index) => {
                  const link = navLinks.find(l => l.name === name);
                  if (!link) return null;
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + 2) * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 text-lg transition-all ${
                          activeLink === link.href
                            ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                            : "text-text hover:bg-gray-100 hover:text-primary"
                        }`}
                        onClick={() => {
                          setActiveLink(link.href);
                          setIsOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}