import React from 'react';
import { Calendar, MapPin, Users, Clock, Play, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'AMEU Global Conference 2025',
      date: 'March 15-17, 2025',
      location: 'Kuala Lumpur, Malaysia',
      attendees: '500+ Expected',
      description: 'Our flagship annual conference bringing together young economists from around the world.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      status: 'upcoming'
    },
    {
      title: 'Islamic Finance Workshop',
      date: 'February 8-9, 2025',
      location: 'Dubai, UAE',
      attendees: '150+ Expected',
      description: 'Intensive workshop on Islamic banking and finance principles.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      status: 'upcoming'
    },
    {
      title: 'Sustainable Development Symposium',
      date: 'January 20, 2025',
      location: 'Virtual Event',
      attendees: '300+ Expected',
      description: 'Exploring the role of economics in achieving sustainable development goals.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop',
      status: 'upcoming'
    }
  ];

  const pastEvents = [
    {
      title: 'AMEU Global Conference 2024',
      date: 'March 10-12, 2024',
      location: 'Istanbul, Turkey',
      attendees: '450 Participants',
      description: 'A successful gathering focusing on economic innovation and youth leadership.',
      videoId: 'dQw4w9WgXcQ',
      highlights: ['20 Research Presentations', '15 Workshops', '30 Countries Represented']
    },
    {
      title: 'Economic Research Symposium 2024',
      date: 'November 5, 2024',
      location: 'London, UK',
      attendees: '200 Participants',
      description: 'Showcasing cutting-edge research in Islamic economics and finance.',
      videoId: 'dQw4w9WgXcQ',
      highlights: ['12 Research Papers', '8 Panel Discussions', '25 Universities']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join us at conferences, workshops, and symposiums that shape the future of economics 
              and foster global collaboration among young leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300">Don't miss these exciting opportunities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Upcoming
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
                    Register Now
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events with Videos */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Past Events</h2>
            <p className="text-xl text-gray-300">Relive the highlights from our previous events</p>
          </div>

          <div className="space-y-16">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Video Section */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300">
                    <iframe
                      src={`https://www.youtube.com/embed/${event.videoId}`}
                      title={event.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      <span>Past Event</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {event.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Event Highlights:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {event.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-center"
                        >
                          <span className="text-cyan-400 font-semibold text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Next Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Be part of a global community of young economists shaping the future. 
            Register for our upcoming events and connect with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
              View All Events
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;