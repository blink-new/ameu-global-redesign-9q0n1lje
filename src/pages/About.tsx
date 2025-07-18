import React from 'react';
import { Target, Eye, Heart, Globe, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AMEU Global</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Association of Muslim Economics Undergraduates (AMEU) Global is a pioneering organization 
              dedicated to empowering young Muslim economists and fostering innovation in economic thought 
              and practice worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To create a global network of young Muslim economists who are equipped with the knowledge, skills, and values necessary to contribute meaningfully to economic development and social justice.',
                color: 'from-blue-500 to-cyan-400'
              },
              {
                icon: Eye,
                title: 'Our Vision',
                content: 'To be the leading global platform for Muslim economics students, fostering innovation, collaboration, and ethical leadership in the field of economics.',
                color: 'from-cyan-500 to-blue-400'
              },
              {
                icon: Heart,
                title: 'Our Values',
                content: 'Integrity, Excellence, Innovation, Collaboration, Social Responsibility, and Commitment to Islamic principles in economic thought and practice.',
                color: 'from-blue-600 to-cyan-500'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-300">Our key activities and initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Conferences',
                description: 'Annual international conferences bringing together young economists from around the world to share research and ideas.'
              },
              {
                icon: Users,
                title: 'Networking Events',
                description: 'Regular networking sessions, workshops, and seminars to connect students and professionals in the field.'
              },
              {
                icon: Lightbulb,
                title: 'Research Initiatives',
                description: 'Supporting and promoting research in Islamic economics, sustainable development, and social entrepreneurship.'
              },
              {
                icon: Target,
                title: 'Mentorship Programs',
                description: 'Connecting students with experienced professionals and academics for guidance and career development.'
              },
              {
                icon: Eye,
                title: 'Policy Advocacy',
                description: 'Engaging with policymakers and institutions to promote ethical and sustainable economic policies.'
              },
              {
                icon: Heart,
                title: 'Community Outreach',
                description: 'Social impact projects and community development initiatives led by our members worldwide.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">Numbers that tell our story</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Countries Represented' },
              { number: '5,000+', label: 'Active Members' },
              { number: '100+', label: 'Events Organized' },
              { number: '25+', label: 'Research Publications' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;