import React from 'react';
import { Linkedin, Mail, Globe } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: 'Dr. Ahmad Rahman',
      position: 'President & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Rahman is a renowned economist specializing in Islamic finance and sustainable development. He holds a PhD from Harvard University.',
      linkedin: '#',
      email: 'ahmad@ameuglobal.com'
    },
    {
      name: 'Sarah Al-Zahra',
      position: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Sarah leads our global initiatives and has extensive experience in international development and youth leadership programs.',
      linkedin: '#',
      email: 'sarah@ameuglobal.com'
    },
    {
      name: 'Mohamed Hassan',
      position: 'Secretary General',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Mohamed oversees our organizational operations and strategic planning. He has a background in economics and public policy.',
      linkedin: '#',
      email: 'mohamed@ameuglobal.com'
    },
    {
      name: 'Fatima Al-Rashid',
      position: 'Director of Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Fatima leads our research initiatives and publications. She specializes in Islamic economics and financial inclusion.',
      linkedin: '#',
      email: 'fatima@ameuglobal.com'
    },
    {
      name: 'Omar Abdullah',
      position: 'Director of Events',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Omar manages our global conferences and events. He has expertise in event management and international relations.',
      linkedin: '#',
      email: 'omar@ameuglobal.com'
    },
    {
      name: 'Aisha Khan',
      position: 'Director of Communications',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      bio: 'Aisha handles our global communications and outreach programs. She has a background in media and public relations.',
      linkedin: '#',
      email: 'aisha@ameuglobal.com'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leadership</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the dedicated leaders who guide AMEU Global's mission to empower young economists 
              and foster innovation in economic thought worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-slate-700 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-300">Distinguished advisors guiding our strategic direction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Prof. Dr. Zubair Hasan',
                title: 'Senior Economic Advisor',
                institution: 'International Islamic University Malaysia',
                expertise: 'Islamic Economics & Finance'
              },
              {
                name: 'Dr. Mabid Al-Jarhi',
                title: 'Research Advisor',
                institution: 'Islamic Research and Training Institute',
                expertise: 'Monetary Policy & Banking'
              },
              {
                name: 'Prof. Dr. Volker Nienhaus',
                title: 'International Advisor',
                institution: 'University of Bochum',
                expertise: 'Development Economics'
              }
            ].map((advisor, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {advisor.name}
                </h3>
                <p className="text-cyan-400 font-medium mb-2">
                  {advisor.title}
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  {advisor.institution}
                </p>
                <div className="inline-block bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs">
                  {advisor.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in Leadership Opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're always looking for passionate individuals to join our leadership team 
            and help shape the future of AMEU Global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Apply for Leadership
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;