import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Play, Star, Quote, ArrowRight, Users, Music, Award, CheckCircle, Phone, Zap, Heart, Building, ChevronDown, Volume2, Mic } from 'lucide-react';
import PartnersSection from '../components/PartnersSection';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      title: "VAN SFEER TOT KEIHARD",
      subtitle: "ALTIJD RAAK!",
      description: "15 jaar ervaring in het draaien van de perfecte muziek voor bruiloften, bedrijfsfeesten en festivals."
    },
    {
      image: "/images/licht-en-geluid-verhuur-show-scaled.jpeg",
      title: "LIVE MIXING",
      subtitle: "GEEN PLAYLISTS",
      description: "Unieke live mixen die ter plekke worden samengesteld, afgestemd op de sfeer van het moment."
    },
    {
      image: "/images/dj-kevin-froger-bedrijfsfeest.png",
      title: "DJ & MC",
      subtitle: "IN ÉÉN PERSOON",
      description: "Complete entertainment met energieke MC services die elke avond naar een hoger niveau tillen."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Bruiloften",
      description: "Complete muzikale begeleiding voor jullie mooiste dag. Van ceremonie tot late avond.",
      features: ["Ceremonie muziek", "Diner begeleiding", "Eerste dans", "Feestavond DJ"],
      link: "/bruiloften",
      image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      price: "Op aanvraag"
    },
    {
      title: "Bedrijfsfeesten", 
      description: "Professionele entertainment voor corporate events en personeelsfeesten.",
      features: ["Netwerkevents", "Jubilea", "Productlanceringen", "Teambuilding"],
      link: "/bedrijfsfeesten",
      image: "/images/dj-kevin-froger-bedrijfsfeest.png",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      price: "Op aanvraag"
    },
    {
      title: "Festivals",
      description: "High-energy festival sets. 60 minuten non-stop entertainment voor elk publiek.",
      features: ["Power sets", "Crowd control", "MC services", "Flexibele tijdslots"],
      link: "/festivals", 
      image: "/images/licht-en-geluid-verhuur-show-scaled.jpeg",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      price: "Op aanvraag"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Ervaring", icon: <Award className="w-8 h-8" /> },
    { number: "500+", label: "Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Festivals", icon: <Zap className="w-8 h-8" /> },
    { number: "1000+", label: "Happy Events", icon: <Music className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <Volume2 className="w-12 h-12" />,
      title: "LIVE MIXING SPECIALIST",
      description: "Geen standaard playlists maar unieke live mixen die ter plekke worden samengesteld, afgestemd op de sfeer van het moment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "ENERGIEKE MC SERVICES",
      description: "DJ én MC in één persoon. Interactie met het publiek en professionele presentatie voor complete entertainment",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "15+ JAAR ERVARING", 
      description: "Jarenlange ervaring met alle soorten evenementen. Van intieme bruiloften tot grote festivals - altijd de juiste sfeer",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const musicGenres = [
    "House", "Techno", "Pop", "Rock", "Hip-Hop", "R&B", "Dance", "Classics", "Nederlands", "Hardcore"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Fullscreen Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl mobile-hero-content">
                  <div className="mb-8">
                    <img 
                      src="/images/kevin-logo.png" 
                      alt="DJ Kevin Froger Logo" 
                      className="h-20 lg:h-28 w-auto mb-8 drop-shadow-2xl mx-auto md:mx-0"
                    />
                  </div>
                  
                  <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-none tracking-tight">
                    {slide.title}
                    <span className="block text-orange-400 text-shadow-lg">
                      {slide.subtitle}
                    </span>
                  </h1>
                  
                  <p className="text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
                    {slide.description}
                  </p>
                  
                  {/* Desktop buttons */}
                  <div className="hidden md:flex flex-col sm:flex-row gap-6">
                    <Link
                      to="/contact"
                      className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Calendar className="w-8 h-8 mr-4" />
                      DIRECT BOEKEN
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="tel:0645251333"
                      className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-8 h-8 mr-4" />
                      06 45 25 13 33
                    </a>
                  </div>

                  {/* Mobile buttons */}
                  <div className="md:hidden mobile-btn-container">
                    <Link
                      to="/contact"
                      className="mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      DIRECT BOEKEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-30 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white group">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl lg:text-7xl font-black mb-3 text-shadow-lg">{stat.number}</div>
                <div className="text-xl lg:text-2xl font-bold opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout like The Edge */}
      <section id="diensten" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tight">
              ONZE
              <span className="block text-blue-700">DIENSTEN</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Specialistische DJ services voor elke gelegenheid. Van intieme ceremonies 
              tot grote festivals - wij zorgen voor de perfecte muzikale ervaring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-black text-sm">
                      {service.price}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-black text-white mb-2 text-shadow-lg">{service.title}</h3>
                    <p className="text-white/90 text-lg font-medium">{service.description}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className={`group inline-flex items-center bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-black text-lg hover:shadow-lg transition-all duration-200 w-full justify-center mobile-btn`}
                  >
                    MEER INFO
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Stayawake Style */}
      <section id="waarom" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tight">
              WAAROM
              <span className="block text-orange-500">KEVIN FROGER?</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto font-medium">
              De perfecte combinatie van ervaring, professionaliteit en passie
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-32 h-32 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-ping-slow"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-black mb-8 text-shadow-lg tracking-tight">
            KLAAR VOOR EEN
            <span className="block text-orange-400">ONVERGETELIJK FEEST?</span>
          </h2>
          <p className="text-2xl lg:text-3xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto font-medium">
            Neem contact op voor een vrijblijvende offerte en laten we samen 
            jouw evenement tot een groot succes maken.
          </p>
          
          {/* Desktop buttons */}
          <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              BOEK NU DIRECT
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              06 45 25 13 33
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden mobile-btn-container mb-12">
            <Link
              to="/contact"
              className="mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold"
            >
              BOEK NU DIRECT
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="font-black text-2xl mb-2">DIRECT CONTACT</h3>
              <p className="text-blue-200 text-lg">Binnen 24 uur reactie</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="font-black text-2xl mb-2">GRATIS OFFERTE</h3>
              <p className="text-blue-200 text-lg">Vrijblijvend en op maat</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="font-black text-2xl mb-2">15+ JAAR ERVARING</h3>
              <p className="text-blue-200 text-lg">Bewezen kwaliteit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;