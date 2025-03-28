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
  Award
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

  const renderFooter = () => (
    <footer className="bg-blue-900 text-white py-12 mt-auto">
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="font-bold mb-4 text-xl flex items-center">
            <Globe className="mr-3 text-white" /> Global Innovation Summit
          </h3>
          <p className="text-blue-100 mb-4">
            Connecting global leaders to drive innovation and create meaningful impact.
          </p>
          <div className="space-y-2">
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
          <ul className="space-y-2">
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
              href="#" 
              className="text-white hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="#" 
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
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
                    Global Innovation Summit 2025
                  </h1>
                  <p className="text-xl text-gray-700 mb-6">
                    Uniting Global Leaders, Innovators, and Changemakers to Shape Tomorrow
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-3">
                    <Calendar className="mr-4 text-blue-600 flex-shrink-0" size={28} />
                    <span className="text-lg font-semibold text-blue-900">
                      September 15-17, 2025
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-green-600 flex-shrink-0" size={28} />
                    <span className="text-gray-700 text-base">
                      Dubai International Convention Centre, UAE
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-[70px]">

                  <button 
                    onClick={() => handleTabChange('register')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center group"
                  >
                    Register Now 
                    <CheckCircle className="ml-2 group-hover:rotate-45 transition" />
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center group">
                    Download Brochure 
                    <Download className="ml-2 group-hover:animate-bounce" />
                  </button>
                </div>
              </div>
              <div>
              <img src="/images/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg" 
                  alt="Conference Venue" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="container mx-auto px-4 py-16 mb-[200px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                About Global Innovation Summit
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    The Global Innovation Summit is a premier conference bringing together 
                    thought leaders, entrepreneurs, and visionaries from around the world.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our mission is to foster collaboration, share groundbreaking insights, 
                    and drive meaningful technological and social innovation.
                  </p>
                </div>
                <div>
                  <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
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
                          className="flex items-center text-gray-700"
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
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Keynote Speakers
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                World-class experts sharing groundbreaking insights and transformative strategies
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div 
                  key={speaker.name} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-64 object-cover group-hover:opacity-80 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <h3 className="text-xl font-semibold">{speaker.name}</h3>
                      <p className="text-sm opacity-80">{speaker.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>
                    <div className="flex space-x-3 justify-center">
                      <a href={speaker.linkedin} className="text-blue-600 hover:text-blue-800">
                        <Linkedin />
                      </a>
                      <a href={speaker.twitter} className="text-blue-600 hover:text-blue-800">
                        <Twitter />
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
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center">
                <UserCheck className="mr-3 text-blue-600" /> Conference Registration
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company name (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="ticket" className="block text-gray-700 mb-2">Ticket Type</label>
                  <select 
                    id="ticket"
                    name="ticket"
                    value={formData.ticket}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="standard">Standard Ticket - $499</option>
                    <option value="premium">Premium Ticket - $799</option>
                    <option value="vip">VIP Ticket - $1,299</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                >
                  Complete Registration <CheckCircle className="ml-2" />
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
        ${isSticky ? 'py-2 shadow-lg' : 'py-4'}
      `}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Globe className="mr-3 text-blue-600" size={40} />
            <span className="text-xl md:text-2xl font-bold text-blue-900">
              Global Innovation Summit
            </span>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-blue-600 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleTabChange(item.tab)}
                className={`
                  flex items-center space-x-2
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

          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 overflow-y-auto">
              <div className="min-h-screen flex flex-col">
                <nav className="flex-grow flex flex-col items-center space-y-6 pt-10">
                  {navItems.map((item) => (
                    <button
                      key={item.tab}
                      onClick={() => {
                        handleTabChange(item.tab);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`
                        flex items-center space-x-4 text-2xl w-full max-w-md px-6 py-4 rounded-lg
                        ${activeTab === item.tab 
                          ? 'bg-blue-100 text-blue-600 font-bold' 
                          : 'text-gray-600 hover:bg-blue-50'}
                        transition-colors
                      `}
                    >
                      {React.cloneElement(item.icon, { 
                        className: activeTab === item.tab 
                          ? 'text-blue-600' 
                          : 'text-gray-400',
                        size: 24 
                      })}
                      <span>{item.name}</span>
                    </button>
                  ))}
                </nav>
                <div className="pb-10 text-center">
                  <p className="text-gray-500 mb-4">Connect with Us</p>
                  <div className="flex justify-center space-x-6">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <Linkedin size={30} />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <Twitter size={30} />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <Mail size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main 
        ref={contentRef} 
        className="flex-grow pt-24 md:pt-28 min-h-screen relative"
      >
        <div className="min-h-full pb-24">
          {renderContent()}
        </div>
        
        {renderFooter()}
      </main>
    </div>
  );
};

export default ConferenceWebsite;