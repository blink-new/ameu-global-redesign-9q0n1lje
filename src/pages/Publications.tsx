import React from 'react';
import { BookOpen, Download, ExternalLink, Calendar, User } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Islamic Economics in the Digital Age: Opportunities and Challenges',
      authors: ['Dr. Ahmad Rahman', 'Sarah Al-Zahra'],
      date: '2024',
      type: 'Research Paper',
      abstract: 'This paper explores the intersection of Islamic economic principles with digital transformation, examining opportunities for financial inclusion and challenges in maintaining ethical standards.',
      downloadUrl: '#',
      category: 'Digital Economics'
    },
    {
      title: 'Sustainable Development Goals through Islamic Finance',
      authors: ['Mohamed Hassan', 'Dr. Fatima Al-Rashid'],
      date: '2024',
      type: 'Journal Article',
      abstract: 'An analysis of how Islamic financial instruments can contribute to achieving the United Nations Sustainable Development Goals.',
      downloadUrl: '#',
      category: 'Sustainable Finance'
    },
    {
      title: 'Youth Leadership in Economic Development: A Global Perspective',
      authors: ['Omar Abdullah', 'Aisha Khan'],
      date: '2023',
      type: 'Conference Proceedings',
      abstract: 'Proceedings from the AMEU Global Conference 2023, featuring research on youth leadership and economic development initiatives worldwide.',
      downloadUrl: '#',
      category: 'Leadership'
    },
    {
      title: 'Fintech and Islamic Banking: Innovation and Compliance',
      authors: ['Dr. Zubair Hasan', 'Sarah Al-Zahra'],
      date: '2023',
      type: 'Research Paper',
      abstract: 'Examining the role of financial technology in Islamic banking and the challenges of maintaining Sharia compliance in digital financial services.',
      downloadUrl: '#',
      category: 'Fintech'
    },
    {
      title: 'Economic Empowerment of Muslim Youth: Case Studies from Southeast Asia',
      authors: ['Dr. Ahmad Rahman', 'Mohamed Hassan'],
      date: '2023',
      type: 'Book Chapter',
      abstract: 'A comprehensive study of economic empowerment initiatives for Muslim youth in Southeast Asian countries.',
      downloadUrl: '#',
      category: 'Youth Development'
    },
    {
      title: 'Green Sukuk: Financing Sustainable Development',
      authors: ['Dr. Fatima Al-Rashid', 'Omar Abdullah'],
      date: '2022',
      type: 'Research Paper',
      abstract: 'Analysis of green sukuk as an innovative Islamic financial instrument for financing environmentally sustainable projects.',
      downloadUrl: '#',
      category: 'Green Finance'
    }
  ];

  const categories = ['All', 'Digital Economics', 'Sustainable Finance', 'Leadership', 'Fintech', 'Youth Development', 'Green Finance'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Publications</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge research and insights from our global community of economists, 
              researchers, and thought leaders in Islamic economics and finance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {publication.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {publication.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{publication.authors.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{publication.date}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {publication.type}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {publication.abstract}
                </p>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button className="border-2 border-cyan-400 text-cyan-400 py-3 px-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Areas</h2>
            <p className="text-xl text-gray-300">Our key areas of research and publication</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Islamic Economics',
                description: 'Fundamental principles and modern applications of Islamic economic theory',
                count: '15+ Publications'
              },
              {
                title: 'Sustainable Finance',
                description: 'Green finance, ESG investing, and sustainable development through Islamic finance',
                count: '12+ Publications'
              },
              {
                title: 'Fintech & Innovation',
                description: 'Digital transformation in Islamic banking and financial services',
                count: '10+ Publications'
              },
              {
                title: 'Youth Development',
                description: 'Economic empowerment and leadership development for young Muslims',
                count: '8+ Publications'
              },
              {
                title: 'Policy Research',
                description: 'Economic policy analysis and recommendations for Muslim-majority countries',
                count: '6+ Publications'
              },
              {
                title: 'Social Impact',
                description: 'Community development and social entrepreneurship initiatives',
                count: '5+ Publications'
              }
            ].map((area, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {area.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Research */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Submit Your Research
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Have research to share with our global community? We welcome submissions 
            from researchers, academics, and practitioners in Islamic economics and finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Submit Research
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Publication Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;