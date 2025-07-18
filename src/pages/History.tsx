import React from 'react';
import { Calendar, Award, Users, Globe } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'AMEU Global was founded by a group of passionate economics students from various universities.',
      icon: Users,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      year: '2017',
      title: 'First International Conference',
      description: 'Organized our first international conference in Kuala Lumpur with 150 participants.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-400'
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Expanded to 25 countries with over 1,000 active members worldwide.',
      icon: Award,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Adapted to virtual events during the pandemic, reaching even more participants globally.',
      icon: Calendar,
      color: 'from-cyan-600 to-blue-500'
    },
    {
      year: '2023',
      title: 'Research Initiative',
      description: 'Launched our research publication program, contributing to Islamic economics literature.',
      icon: Award,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Now serving 5,000+ members across 50+ countries with continuous growth and impact.',
      icon: Globe,
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
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">History</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to a global movement - discover the journey of AMEU Global 
              and how we've grown to impact thousands of young economists worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Milestones</h2>
            <p className="text-xl text-gray-300">Celebrating our achievements over the years</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '9', label: 'Years of Excellence', suffix: '+' },
              { number: '50', label: 'Countries Reached', suffix: '+' },
              { number: '100', label: 'Events Organized', suffix: '+' },
              { number: '5000', label: 'Lives Impacted', suffix: '+' }
            ].map((milestone, index) => (
              <div
                key={index}
                className="text-center group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {milestone.number}{milestone.suffix}
                </div>
                <div className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;