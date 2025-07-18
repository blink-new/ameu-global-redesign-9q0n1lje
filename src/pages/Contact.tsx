import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ameuglobal.com', 'support@ameuglobal.com'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+60 3-1234 5678', '+971 4-567 8901'],
      description: 'Available Monday to Friday, 9 AM - 6 PM (GMT+8)'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Kuala Lumpur, Malaysia', 'Dubai, UAE'],
      description: 'Our main offices are located in these cities'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
      description: 'We\'re here to help during business hours'
    }
  ];

  const departments = [
    {
      icon: Users,
      title: 'General Inquiries',
      email: 'info@ameuglobal.com',
      description: 'General questions about AMEU Global'
    },
    {
      icon: Globe,
      title: 'Membership',
      email: 'membership@ameuglobal.com',
      description: 'Questions about joining our community'
    },
    {
      icon: MessageCircle,
      title: 'Events',
      email: 'events@ameuglobal.com',
      description: 'Conference and event-related inquiries'
    },
    {
      icon: Send,
      title: 'Media & Press',
      email: 'media@ameuglobal.com',
      description: 'Press releases and media inquiries'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team. We're here to help you with any questions about 
              AMEU Global, our programs, events, or membership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-cyan-400 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300">
                    <option>General Inquiry</option>
                    <option>Membership Question</option>
                    <option>Event Information</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Departments</h2>
              <p className="text-gray-300 mb-8">
                Reach out to the right department for faster assistance.
              </p>
              
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <dept.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {dept.title}
                        </h3>
                        <p className="text-cyan-400 font-medium mb-2">
                          {dept.email}
                        </p>
                        <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                          {dept.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-xl text-gray-300">Find us around the world</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                city: 'Kuala Lumpur',
                country: 'Malaysia',
                address: '123 Jalan Ampang, 50450 Kuala Lumpur, Malaysia',
                phone: '+60 3-1234 5678',
                email: 'kl@ameuglobal.com'
              },
              {
                city: 'Dubai',
                country: 'UAE',
                address: '456 Sheikh Zayed Road, Dubai, United Arab Emirates',
                phone: '+971 4-567 8901',
                email: 'dubai@ameuglobal.com'
              }
            ].map((location, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="h-64 bg-slate-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                    <p className="text-cyan-400">{location.country}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{location.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How can I become a member of AMEU Global?',
                answer: 'You can join by visiting our membership page and selecting the appropriate membership tier. Student memberships are free, while professional and institutional memberships have annual fees.'
              },
              {
                question: 'When is the next AMEU Global Conference?',
                answer: 'Our annual conference is typically held in March. The next conference is scheduled for March 15-17, 2025, in Kuala Lumpur, Malaysia. Check our events page for the latest updates.'
              },
              {
                question: 'Do you offer scholarships for events?',
                answer: 'Yes, we offer limited scholarships for students from developing countries. Applications are reviewed on a case-by-case basis. Contact us for more information about scholarship opportunities.'
              },
              {
                question: 'How can I submit research for publication?',
                answer: 'We welcome research submissions from members and non-members. Please review our publication guidelines and submit your research through our online portal or email it to publications@ameuglobal.com.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;