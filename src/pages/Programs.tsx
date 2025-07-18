import React from 'react';
import { BookOpen, Users, Award, Globe, Target, Lightbulb } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Research Fellowship Program',
      description: 'A comprehensive program for young researchers to conduct cutting-edge research in Islamic economics and finance.',
      duration: '6-12 months',
      participants: '50+ fellows annually',
      features: ['Mentorship by senior academics', 'Research funding', 'Publication opportunities', 'Conference presentations'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Users,
      title: 'Leadership Development Program',
      description: 'Intensive training program designed to develop the next generation of economic leaders and policy makers.',
      duration: '3 months',
      participants: '100+ participants',
      features: ['Leadership workshops', 'Policy simulation exercises', 'Networking opportunities', 'Certification'],
      color: 'from-cyan-500 to-blue-400'
    },
    {
      icon: Globe,
      title: 'Global Exchange Program',
      description: 'International exchange program connecting students from different universities and countries.',
      duration: '1 semester',
      participants: '200+ students',
      features: ['University partnerships', 'Cultural immersion', 'Academic credits', 'Language support'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Entrepreneurship Incubator',
      description: 'Supporting young entrepreneurs in developing sustainable and ethical business solutions.',
      duration: '4-6 months',
      participants: '30+ startups',
      features: ['Business mentoring', 'Seed funding', 'Market access', 'Legal support'],
      color: 'from-cyan-600 to-blue-500'
    },
    {
      icon: Award,
      title: 'Skills Development Workshops',
      description: 'Regular workshops focusing on essential skills for modern economists and professionals.',
      duration: 'Ongoing',
      participants: '500+ annually',
      features: ['Technical skills', 'Soft skills training', 'Industry certifications', 'Career guidance'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Challenge',
      description: 'Annual competition encouraging innovative solutions to global economic challenges.',
      duration: '6 months',
      participants: '300+ teams',
      features: ['Prize money', 'Mentorship', 'Implementation support', 'Media coverage'],
      color: 'from-cyan-500 to-blue-400'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive programs designed to develop skills, foster innovation, and create opportunities 
              for young economists and leaders worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-cyan-400 text-sm font-medium">Duration</div>
                    <div className="text-white font-semibold">{program.duration}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-cyan-400 text-sm font-medium">Participants</div>
                    <div className="text-white font-semibold">{program.participants}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How to Apply</h2>
            <p className="text-xl text-gray-300">Simple steps to join our programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Program', description: 'Select the program that matches your interests and goals' },
              { step: '02', title: 'Submit Application', description: 'Complete the online application form with required documents' },
              { step: '03', title: 'Review Process', description: 'Our team reviews applications and conducts interviews if needed' },
              { step: '04', title: 'Get Started', description: 'Receive acceptance and begin your journey with AMEU Global' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;