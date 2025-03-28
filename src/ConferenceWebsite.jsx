import React, { useState } from 'react';
import { 
  Globe, 
  MapPin, 
  Calendar, 
  Users, 
  Briefcase, 
  Presentation, 
  Mail, 
  CheckCircle 
} from 'lucide-react';

const ConferenceWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
                  Global Innovation Summit 2025
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Connecting Global Leaders, Innovators, and Changemakers
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
                  <div className="flex items-center">
                    <Calendar className="mr-3 text-blue-600" />
                    <span className="font-semibold text-blue-900">
                      September 15-17, 2025
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <MapPin className="mr-3 text-green-600" />
                    <span className="text-gray-700">
                      Dubai International Convention Centre
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                    Register Now <CheckCircle className="ml-2" />
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center">
                    Download Brochure <Briefcase className="ml-2" />
                  </button>
                </div>
              </div>
              <div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Conference Venue" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              About the Conference
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  The Global Innovation Summit is a premier international conference bringing together leaders, innovators, and professionals from diverse industries to explore emerging trends, share breakthrough insights, and drive global collaboration.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Key Objectives</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Globe className="mr-3 text-blue-600" />
                      Foster Global Networking
                    </li>
                    <li className="flex items-center">
                      <Presentation className="mr-3 text-green-600" />
                      Share Cutting-Edge Insights
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-3 text-purple-600" />
                      Promote Cross-Industry Collaboration
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                    Conference Highlights
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• 100+ International Speakers</li>
                    <li>• 50+ Countries Represented</li>
                    <li>• 30+ Industry Sectors</li>
                    <li>• Interactive Workshops</li>
                    <li>• Networking Sessions</li>
                    <li>• Innovation Showcases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'speakers':
        return (
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Keynote Speakers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Santos",
                  title: "Global Innovation Leader",
                  company: "TechGlobal Corporation",
                  image: "/api/placeholder/300/300"
                },
                {
                  name: "David Kim",
                  title: "Digital Transformation Expert",
                  company: "Future Innovations Inc.",
                  image: "/api/placeholder/300/300"
                },
                {
                  name: "Aisha Mohammed",
                  title: "Sustainability & Strategy Advisor",
                  company: "Global Impact Consulting",
                  image: "/api/placeholder/300/300"
                }
              ].map((speaker, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
                >
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-blue-900">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-600">{speaker.title}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'register':
        return (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
                Conference Registration
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg" 
                    placeholder="Enter your full name" 
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Company/Organization</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg" 
                    placeholder="Enter your company name" 
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border rounded-lg" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Registration Type</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>Full Conference Pass - $799</option>
                    <option>Executive Pass - $1,199</option>
                    <option>Virtual Attendance - $399</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Complete Registration
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
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center">
            <Globe className="mr-3 text-blue-600" size={40} />
            <span className="text-2xl font-bold text-blue-900">
              Global Innovation Summit
            </span>
          </div>
          <nav className="flex space-x-6">
            {[
              { name: 'Home', tab: 'home' },
              { name: 'About', tab: 'about' },
              { name: 'Speakers', tab: 'speakers' },
              { name: 'Register', tab: 'register' }
            ].map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`
                  ${activeTab === item.tab 
                    ? 'text-blue-600 font-bold' 
                    : 'text-gray-600 hover:text-blue-600'}
                  transition-colors
                `}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="font-bold mb-4 text-xl">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="mr-3" /> info@globalinnovationsummit.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-3" /> Dubai, United Arab Emirates
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-xl">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Sponsorship Opportunities</a></li>
              <li><a href="#" className="hover:text-blue-300">Past Conference Archives</a></li>
              <li><a href="#" className="hover:text-blue-300">Travel Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-xl">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Users size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Globe size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConferenceWebsite;