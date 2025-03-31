import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Globe, 
  MapPin, 
  Calendar, 
  Users, 
  Mail, 
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Download,
  Linkedin,
  Twitter,
  UserCheck,
  BookOpen,
  Shield,
  Zap,
  Terminal,
  Award, 
} from 'lucide-react';

const ConferenceWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    ticket: 'standard'
  });
  const contentRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Navigation Items
  const navItems = useMemo(() => [
    { name: 'Home', tab: 'home', icon: <Globe size={18} /> },
    { name: 'About', tab: 'about', icon: <Shield size={18} /> },
    { name: 'Speakers', tab: 'speakers', icon: <Users size={18} /> },
    { name: 'Register', tab: 'register', icon: <UserCheck size={18} /> }
  ], []);

  // Speakers data
  const speakers = useMemo(() => [
    {
      name: "Maria Santos",
      title: "Global Innovation Leader",
      company: "TechGlobal Corporation",
      bio: "Pioneering digital transformation and sustainable innovation strategies.",
      image: "/images/jose-aljovin-JZMdGltAHMo-unsplash.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      title: "Digital Transformation Expert",
      company: "Future Innovations Inc.",
      bio: "Renowned for breakthrough technological integration approaches.",
      image: "/images/sigmund-a19OVaa2rzA-unsplash.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Aisha Mohammed",
      title: "Sustainability & Strategy Advisor",
      company: "Global Impact Consulting",
      bio: "Leading expert in sustainable business practices and social impact.",
      image: "/images/sigmund-jzz_3jWMzHA-unsplash.jpg",
      linkedin: "#",
      twitter: "#"
    }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scrolling effect
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  // Handle body overflow and click outside to close menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when changing tabs
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Registration submitted:', formData);
    alert('Registration submitted! We will contact you soon.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      ticket: 'standard'
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Additional smooth scroll for mobile and desktop
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderFooter = () => (
    <footer className="bg-blue-900 text-white py-8 md:py-12 mt-auto">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="font-bold mb-4 text-xl flex items-center">
            <Globe className="mr-3 text-white" /> Global Innovation Summit
          </h3>
          <p className="text-blue-100 mb-4 text-sm md:text-base">
            Connecting global leaders to drive innovation and create meaningful impact.
          </p>
          <div className="space-y-2 text-sm md:text-base">
            <p className="flex items-center">
              <Mail className="mr-3 flex-shrink-0" /> info@globalinnovationsummit.com
            </p>
            <p className="flex items-center">
              <MapPin className="mr-3 flex-shrink-0" /> Dubai, United Arab Emirates
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-xl">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            {[
              'Sponsorship Opportunities',
              'Past Conference Archives', 
              'Travel Information',
              'Privacy Policy',
              'Terms of Service'
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="hover:text-blue-300 flex items-center group"
                >
                  <ArrowRight 
                    className="mr-2 text-blue-400 group-hover:translate-x-1 transition" 
                    size={16} 
                  />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-full md:col-span-1">
          <h3 className="font-bold mb-4 text-xl">Stay Connected</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.x.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition"
              aria-label="Twitter"
            >
              <X size={24} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="mt-6">
            <p className="text-sm text-blue-200">
              © 2025 Global Innovation Summit. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
                    Global Innovation Summit 2025
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    Uniting Global Leaders, Innovators, and Changemakers to Shape Tomorrow
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 sm:p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar className="mr-3 text-blue-600 flex-shrink-0" size={24} />
                      <span className="text-base sm:text-lg font-semibold text-blue-900">
                        September 15-17, 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 text-sm sm:text-base">
                      Dubai International Convention Centre, UAE
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
                  <button 
                    onClick={() => handleTabChange('register')}
                    className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center group w-full sm:w-auto"
                  >
                    Register Now 
                    <CheckCircle className="ml-2 group-hover:rotate-45 transition" size={20} />
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center group w-full sm:w-auto">
                    Download Brochure 
                    <Download className="ml-2 group-hover:animate-bounce" size={20} />
                  </button>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <img 
                  src="/images/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg" 
                  alt="Conference Venue" 
                  className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full h-auto object-cover max-h-96 md:max-h-full"
                />
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">
                About Global Innovation Summit
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    The Global Innovation Summit is a premier conference bringing together 
                    thought leaders, entrepreneurs, and visionaries from around the world.
                  </p>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our mission is to foster collaboration, share groundbreaking insights, 
                    and drive meaningful technological and social innovation.
                  </p>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our mission is to foster collaboration, share groundbreaking insights, 
                    and drive meaningful technological and social innovation.
                  </p>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our mission is to foster collaboration, share groundbreaking insights, 
                    and drive meaningful technological and social innovation.
                  </p>
                </div>
                <div>
                  <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                      <Zap className="mr-3 text-yellow-500" /> Our Core Values
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Innovation',
                        'Collaboration',
                        'Sustainability',
                        'Inclusivity'
                      ].map((value, index) => (
                        <li 
                          key={index} 
                          className="flex items-center text-gray-700 text-sm sm:text-base"
                        >
                          <Terminal className="mr-2 text-blue-500" size={16} />
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'speakers':
        return (
          <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Keynote Speakers
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                World-class experts sharing groundbreaking insights and transformative strategies
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {speakers.map((speaker) => (
                <div 
                  key={speaker.name} 
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:opacity-80 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <h3 className="text-lg sm:text-xl font-semibold">{speaker.name}</h3>
                      <p className="text-xs sm:text-sm opacity-90">{speaker.title}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-gray-600 text-xs sm:text-sm mb-4">{speaker.bio}</p>
                    <div className="flex space-x-3 justify-center">
                      <a href={speaker.linkedin} className="text-blue-600 hover:text-blue-800">
                        <Linkedin size={20} />
                      </a>
                      <a href={speaker.twitter} className="text-blue-600 hover:text-blue-800">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'register':
        return (
          <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
            <div className="max-w-md sm:max-w-xl mx-auto bg-white shadow-lg sm:shadow-xl rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center">
                <UserCheck className="mr-3 text-blue-600" /> Conference Registration
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2 text-sm sm:text-base">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Your company name (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="ticket" className="block text-gray-700 mb-2 text-sm sm:text-base">Ticket Type</label>
                  <select 
                    id="ticket"
                    name="ticket"
                    value={formData.ticket}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  >
                    <option value="standard">Standard Ticket - $499</option>
                    <option value="premium">Premium Ticket - $799</option>
                    <option value="vip">VIP Ticket - $1,299</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center text-sm sm:text-base mt-4"
                >
                  Complete Registration <CheckCircle className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className={`
        bg-white shadow-md fixed w-full z-50 top-0 transition-all duration-300
        ${isSticky ? 'py-2 shadow-lg' : 'py-3 sm:py-4'}
      `}>
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
          <div className="flex items-center">
            <Globe className="mr-2 sm:mr-3 text-blue-600" size={isSticky ? 32 : 36} />
            <span className={`font-bold text-blue-900 transition-all ${isSticky ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
              Global Innovation Summit
            </span>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-blue-600 focus:outline-none p-1"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleTabChange(item.tab)}
                className={`
                  flex items-center space-x-1 lg:space-x-2 text-sm lg:text-base
                  ${activeTab === item.tab 
                    ? 'text-blue-600 font-bold border-b-2 border-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'}
                  transition-colors pb-1
                `}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile menu slide-in panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide-in panel */}
          <div 
            ref={mobileMenuRef}
            className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-xl h-full overflow-y-auto"
          >
            {/* Menu header with close button */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold text-lg text-center tracking-wide uppercase">Menu</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            {/* Navigation items */}
            <nav className="flex-grow overflow-y-auto py-2">
              {navItems.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => {
                    handleTabChange(item.tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center w-full px-5 py-4 
                    ${activeTab === item.tab
                      ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'}
                    transition-colors
                  `}
                >
                  {React.cloneElement(item.icon, {
                    className: activeTab === item.tab ? 'text-blue-600' : 'text-gray-500',
                    size: 22
                  })}
                  <span className="ml-4">{item.name}</span>
                </button>
              ))}
            </nav>
            
            {/* Social links section */}
            <div className="p-6 border-t fixed bottom-0 w-full">
              <p className="text-gray-500 text-sm font-medium mb-3">Connect With Us</p>
              <div className="flex space-x-5">
              <a 
  href="https://www.linkedin.com/in/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
>
  <Linkedin size={22} />
</a>

<a 
  href="https://twitter.com/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
>
  <X size={22} />
</a>

<a 
  href="mailto:your-email@example.com" 
  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
>
  <Mail size={22} />
</a>

              </div>
            </div>
          </div>
        </div>
      )}

      <main 
        ref={contentRef} 
        className={`flex-grow pt-16 sm:pt-20 md:pt-24 min-h-screen relative ${isMobileMenuOpen ? 'overflow-hidden' : ''}`}
      >
        <div className={`min-h-full pb-12 md:pb-24 ${isMobileMenuOpen ? 'pointer-events-none' : ''}`}>
          {renderContent()}
        </div>
        
        {renderFooter()}
      </main>
    </div>
  );
};

export default ConferenceWebsite;