import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Globe, Users, Calendar, BookOpen, Award, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'history', 'leadership', 'events', 'programs', 'publications', 'join', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">AMEU Global</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'history', label: 'History' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'events', label: 'Events' },
                { id: 'programs', label: 'Programs' },
                { id: 'publications', label: 'Publications' },
                { id: 'join', label: 'Join Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'history', label: 'History' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'events', label: 'Events' },
                { id: 'programs', label: 'Programs' },
                { id: 'publications', label: 'Publications' },
                { id: 'join', label: 'Join Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/network-459277.mp4?width=1280&hash=b7b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-cyan-900/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            AMEU Global
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Advancing Model Economics for Youth Leadership Worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              Learn More
            </Button>
            <Button 
              onClick={() => scrollToSection('join')}
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg"
            >
              Join Us
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/particles-459277.mp4?width=1280&hash=c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8c8" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About AMEU Global
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Association for Model Economics and United Nations (AMEU) Global is a premier international organization 
              dedicated to fostering economic literacy and diplomatic skills among young leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Connecting students and professionals across continents through innovative economic modeling and diplomatic simulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Youth Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Empowering the next generation of leaders with practical skills in economics, policy-making, and international relations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Committed to the highest standards of educational excellence and professional development in economic modeling.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-15"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/digital-459277.mp4?width=1280&hash=d9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d9d9" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our History
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey of growth, innovation, and global impact in economic education.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "Foundation",
                description: "AMEU Global was established with a vision to bridge the gap between theoretical economics and practical application for young minds."
              },
              {
                year: "2015",
                title: "Global Expansion",
                description: "Expanded operations to over 20 countries, establishing regional chapters and partnerships with leading universities."
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description: "Launched comprehensive online platforms and virtual conferences, reaching thousands of participants worldwide."
              },
              {
                year: "2024",
                title: "Innovation Hub",
                description: "Established the AMEU Innovation Hub, focusing on emerging technologies and their economic implications."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="text-4xl font-bold text-cyan-400">{milestone.year}</div>
                </div>
                <div className="md:w-3/4">
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-lg">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/technology-459277.mp4?width=1280&hash=e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving AMEU Global's mission forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                position: "Executive Director",
                bio: "Leading economist with 15+ years in international development and youth education."
              },
              {
                name: "Prof. Michael Rodriguez",
                position: "Academic Director",
                bio: "Renowned professor specializing in macroeconomic modeling and policy analysis."
              },
              {
                name: "Ms. Aisha Patel",
                position: "Global Programs Manager",
                bio: "Expert in international relations and cross-cultural program development."
              },
              {
                name: "Dr. James Thompson",
                position: "Research Director",
                bio: "Published researcher in behavioral economics and youth leadership development."
              },
              {
                name: "Ms. Elena Kowalski",
                position: "Technology Director",
                bio: "Innovation leader specializing in educational technology and digital platforms."
              },
              {
                name: "Mr. David Kim",
                position: "Regional Coordinator",
                bio: "Experienced coordinator managing AMEU chapters across Asia-Pacific region."
              }
            ].map((leader, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-white text-center">{leader.name}</CardTitle>
                  <CardDescription className="text-cyan-400 text-center font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-15"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/conference-459277.mp4?width=1280&hash=f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us at our upcoming conferences, workshops, and networking events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Economic Summit 2024",
                date: "March 15-17, 2024",
                location: "Singapore",
                description: "Annual flagship conference bringing together young economists and policy makers from around the world."
              },
              {
                title: "Model UN Economics Workshop",
                date: "April 22-23, 2024",
                location: "Virtual Event",
                description: "Intensive workshop on economic modeling techniques and their application in international relations."
              },
              {
                title: "Youth Leadership Forum",
                date: "May 10-12, 2024",
                location: "London, UK",
                description: "Forum focused on developing leadership skills and networking opportunities for young professionals."
              },
              {
                title: "Regional Chapter Meeting",
                date: "June 5, 2024",
                location: "New York, USA",
                description: "Regional meeting for North American chapters to discuss upcoming initiatives and collaborations."
              }
            ].map((event, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">{event.title}</CardTitle>
                  <CardDescription className="text-cyan-400">
                    {event.date} • {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{event.description}</p>
                  <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/education-459277.mp4?width=1280&hash=g2g2g2g2g2g2g2g2g2g2g2g2g2g2g2g2g2g2g2g2" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive programs designed to develop economic literacy and leadership skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Economic Modeling Certification",
                description: "Comprehensive certification program covering advanced economic modeling techniques and applications.",
                duration: "6 months",
                level: "Advanced"
              },
              {
                title: "Youth Leadership Academy",
                description: "Leadership development program specifically designed for young professionals and students.",
                duration: "3 months",
                level: "Intermediate"
              },
              {
                title: "Model UN Training",
                description: "Intensive training program for Model United Nations conferences and diplomatic simulations.",
                duration: "2 months",
                level: "Beginner"
              },
              {
                title: "Research Fellowship",
                description: "Research opportunities for graduate students and young professionals in economics.",
                duration: "12 months",
                level: "Advanced"
              },
              {
                title: "Global Mentorship Program",
                description: "One-on-one mentorship with industry leaders and experienced economists.",
                duration: "6 months",
                level: "All Levels"
              },
              {
                title: "Digital Economics Workshop",
                description: "Workshop series on digital transformation and its economic implications.",
                duration: "1 month",
                level: "Intermediate"
              }
            ].map((program, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">{program.title}</CardTitle>
                  <div className="flex gap-2">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      {program.duration}
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      {program.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-15"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/research-459277.mp4?width=1280&hash=h3h3h3h3h3h3h3h3h3h3h3h3h3h3h3h3h3h3h3h3" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Publications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge research and insights from our global community of economists and researchers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Economic Trends 2024",
                authors: "Dr. Sarah Chen, Prof. Michael Rodriguez",
                date: "January 2024",
                description: "Comprehensive analysis of emerging global economic trends and their implications for policy makers."
              },
              {
                title: "Youth Leadership in Economic Development",
                authors: "Ms. Aisha Patel, Dr. James Thompson",
                date: "December 2023",
                description: "Research on the role of young leaders in driving economic development in emerging markets."
              },
              {
                title: "Digital Transformation and Economic Modeling",
                authors: "Ms. Elena Kowalski, Mr. David Kim",
                date: "November 2023",
                description: "Exploring how digital technologies are reshaping traditional economic modeling approaches."
              },
              {
                title: "Sustainable Economics for the Future",
                authors: "AMEU Research Team",
                date: "October 2023",
                description: "White paper on sustainable economic practices and their long-term impact on global development."
              }
            ].map((publication, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-cyan-400 mb-2" />
                  <CardTitle className="text-white">{publication.title}</CardTitle>
                  <CardDescription className="text-cyan-400">
                    {publication.authors} • {publication.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{publication.description}</p>
                  <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/community-459277.mp4?width=1280&hash=i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4i4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Become part of a global network of young economists and leaders shaping the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Student Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Perfect for undergraduate and graduate students interested in economics and leadership.</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">Free</div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center border-cyan-400">
              <CardHeader>
                <Award className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Professional Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">For working professionals and researchers in economics and related fields.</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">$99/year</div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Join Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Institutional Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">For universities, organizations, and institutions supporting our mission.</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">Contact Us</div>
                <Button variant="outline" className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">Join thousands of young leaders making a difference in economics and policy.</p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.pixabay.com/vimeo/459277/global-459277.mp4?width=1280&hash=j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5j5" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to learn more about AMEU Global and how you can get involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-300">info@ameuglobal.org</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-gray-300">
                      123 Global Economics Center<br />
                      New York, NY 10001<br />
                      United States
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Inquiry about membership"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">AMEU Global</span>
              </div>
              <p className="text-gray-400">
                Advancing Model Economics for Youth Leadership Worldwide
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-400">About Us</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="text-gray-400 hover:text-cyan-400">Programs</button></li>
                <li><button onClick={() => scrollToSection('events')} className="text-gray-400 hover:text-cyan-400">Events</button></li>
                <li><button onClick={() => scrollToSection('publications')} className="text-gray-400 hover:text-cyan-400">Publications</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Membership</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Student Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Professional Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Institutional Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Benefits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AMEU Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App