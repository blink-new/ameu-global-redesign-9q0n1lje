import React from 'react';
import { Users, Globe, Award, BookOpen, Calendar, Mail, CheckCircle } from 'lucide-react';

const JoinUs = () => {
  const membershipTiers = [
    {
      title: 'Student Member',
      price: 'Free',
      description: 'Perfect for undergraduate and graduate students',
      features: [
        'Access to all events and webinars',
        'Networking opportunities',
        'Resource library access',
        'Monthly newsletter',
        'Student community forum'
      ],
      color: 'from-blue-500 to-cyan-400',
      popular: false
    },
    {
      title: 'Professional Member',
      price: '$50/year',
      description: 'For working professionals and recent graduates',
      features: [
        'All Student Member benefits',
        'Priority event registration',
        'Career development resources',
        'Mentorship program access',
        'Professional networking events',
        'Industry reports and insights'
      ],
      color: 'from-cyan-500 to-blue-400',
      popular: true
    },
    {
      title: 'Institutional Member',
      price: '$200/year',
      description: 'For universities, organizations, and companies',
      features: [
        'All Professional Member benefits',
        'Bulk member registrations',
        'Customized training programs',
        'Research collaboration opportunities',
        'Branding opportunities at events',
        'Direct access to leadership team'
      ],
      color: 'from-blue-600 to-cyan-500',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with 5,000+ members across 50+ countries'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Access to research papers, webinars, and educational content'
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'Priority access to conferences, workshops, and networking events'
    },
    {
      icon: Award,
      title: 'Career Development',
      description: 'Mentorship programs, job opportunities, and skill development'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Peer support, collaboration opportunities, and lifelong friendships'
    },
    {
      icon: Mail,
      title: 'Regular Updates',
      description: 'Stay informed with newsletters, industry insights, and announcements'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AMEU Global</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Become part of a global community of young economists and leaders. 
              Connect, learn, and grow with like-minded individuals who are shaping the future of economics.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Join AMEU Global?</h2>
            <p className="text-xl text-gray-300">Discover the benefits of being part of our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Membership Options</h2>
            <p className="text-xl text-gray-300">Choose the membership that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 ${
                  tier.popular ? 'scale-105 border-cyan-400/30' : 'hover:scale-105'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  {tier.price === 'Free' ? 'Join Now' : 'Subscribe'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How to Join</h2>
            <p className="text-xl text-gray-300">Simple steps to become a member</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Membership', description: 'Select the membership tier that best fits your needs and goals' },
              { step: '02', title: 'Complete Application', description: 'Fill out the membership application form with your details' },
              { step: '03', title: 'Payment & Verification', description: 'Complete payment (if applicable) and verify your information' },
              { step: '04', title: 'Welcome to AMEU', description: 'Receive your welcome package and start connecting with the community' }
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

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-300">Hear from our global community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amira Hassan',
                role: 'Economics Student, University of Cairo',
                quote: 'AMEU Global has opened doors to incredible opportunities. The networking and learning experiences have been invaluable for my career development.',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
              },
              {
                name: 'Yusuf Ahmed',
                role: 'Financial Analyst, Dubai',
                quote: 'The professional development programs and mentorship opportunities through AMEU Global have accelerated my career growth significantly.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
              },
              {
                name: 'Fatima Al-Zahra',
                role: 'PhD Candidate, London School of Economics',
                quote: 'Being part of AMEU Global has connected me with researchers worldwide and provided access to cutting-edge research in Islamic economics.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Global Community?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Take the first step towards connecting with like-minded economists and leaders worldwide. 
            Your journey with AMEU Global starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Start Your Application
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;