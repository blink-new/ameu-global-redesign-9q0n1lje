import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, BookOpen, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20"></div>
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AMEU Global
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering young economists and leaders to shape the future of global economics through innovation, collaboration, and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/about"
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
              >
                Discover Our Mission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/join"
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 flex items-center gap-2"
              >
                Join Our Community
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore AMEU Global</h2>
            <p className="text-xl text-gray-300">Navigate through our key sections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'About Us',
                description: 'Learn about our mission and vision',
                link: '/about',
                color: 'from-blue-500 to-cyan-400'
              },
              {
                icon: Users,
                title: 'Leadership',
                description: 'Meet our executive team',
                link: '/leadership',
                color: 'from-cyan-500 to-blue-400'
              },
              {
                icon: Calendar,
                title: 'Events',
                description: 'Upcoming conferences and workshops',
                link: '/events',
                color: 'from-blue-600 to-cyan-500'
              },
              {
                icon: BookOpen,
                title: 'Publications',
                description: 'Research papers and articles',
                link: '/publications',
                color: 'from-cyan-600 to-blue-500'
              }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-400/0 group-hover:from-blue-600/5 group-hover:to-cyan-400/5 rounded-2xl transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Content</h2>
            <p className="text-xl text-gray-300">Watch our latest conference highlights</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="AMEU Global Conference 2024"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                AMEU Global Conference 2024
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join us as we explore the future of economics and youth leadership. 
                This conference brought together over 500 young economists from around 
                the world to discuss sustainable development, innovation, and global cooperation.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Economics', 'Youth Leadership', 'Sustainability', 'Innovation'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors duration-300 font-semibold"
              >
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;