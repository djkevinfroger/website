import React from 'react';
import { Calendar, Users, Music, Star, CheckCircle, ArrowRight, Quote, Clock, Sparkles, Gift, Building, Heart } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const EventsPage = () => {
  const eventTypes = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bruiloften & Trouwfeesten",
      description: "Complete muzikale begeleiding voor jullie mooiste dag",
      image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      link: "/bruiloften",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bedrijfsfeesten",
      description: "Professionele entertainment voor corporate events",
      image: "/images/dj-kevin-froger-bedrijfsfeest.png",
      link: "/bedrijfsfeesten",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Festivals",
      description: "High-energy festival sets voor elk publiek",
      image: "/images/licht-en-geluid-verhuur-show-scaled.jpeg",
      link: "/festivals",
      color: "from-orange-500 to-pink-600"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Privé Feesten",
      description: "Verjaardagen en familiefeesten op maat",
      image: "/images/IMG_1605.png",
      link: "/prive-feesten",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Sportfeesten",
      description: "Energieke begeleiding van sportevenementen",
      image: "/images/IMG_9532.png",
      link: "/sportfeesten",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Speciale Evenementen",
      description: "Jubilea, galas en unieke gelegenheden",
      image: "/images/dj-booth-wit-design.png",
      link: "/contact",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const services = [
    "Complete DJ services van 4-12 uur",
    "MC & presentatie services",
    "Professionele geluids- en lichtapparatuur",
    "Draadloze microfoons en headsets",
    "Muziek op maat voor elk publiek",
    "Technische setup en breakdown",
    "Backup apparatuur en noodplan",
    "Persoonlijke voorbereiding en overleg"
  ];

  const stats = [
    { number: "15+", label: "Jaar Ervaring", icon: <Star className="w-8 h-8" /> },
    { number: "1000+", label: "Events", icon: <Calendar className="w-8 h-8" /> },
    { number: "500+", label: "Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Festivals", icon: <Sparkles className="w-8 h-8" /> }
  ];

  const process = [
    {
      step: "01",
      title: "CONTACT & INTAKE",
      description: "Vertel ons over uw evenement en wensen",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: "02",
      title: "OFFERTE OP MAAT",
      description: "Binnen 24 uur een persoonlijke offerte",
      icon: <Star className="w-8 h-8" />
    },
    {
      step: "03",
      title: "VOORBEREIDING",
      description: "Muziekwensen en technische planning",
      icon: <Music className="w-8 h-8" />
    },
    {
      step: "04",
      title: "PERFECT EVENEMENT",
      description: "Ontspannen genieten van uw feest",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mobile-hero-content">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              ALLE SOORTEN
              <span className="block text-orange-400">EVENEMENTEN</span>
              <span className="block text-orange-400">PERFECT BEGELEID</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Van intieme bruiloften tot grote festivals - DJ Kevin Froger zorgt voor de perfecte 
              muzikale begeleiding die past bij uw evenement en publiek. 15+ jaar ervaring, 
              1000+ succesvolle events.
            </p>
            
            {/* Desktop buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#evenementen"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BEKIJK EVENEMENTEN
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                DIRECT CONTACT
              </a>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden mobile-btn-container mb-16">
              <a
                href="#evenementen"
                className="mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold"
              >
                <Calendar className="w-4 h-4 mr-2" />
                BEKIJK EVENEMENTEN
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section id="evenementen" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ONZE
              <span className="block text-blue-700">SPECIALITEITEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor elk type evenement - van intiem tot spectaculair
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {event.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-black text-white mb-2 text-shadow-lg">{event.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  <a
                    href={event.link}
                    className="group inline-flex items-center text-blue-700 font-black text-lg hover:text-orange-500 transition-colors duration-200 mobile-btn"
                  >
                    MEER INFORMATIE
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-12 text-shadow">
                WAT WIJ
                <span className="block text-orange-500">BIEDEN</span>
              </h2>
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg mobile-btn"
                >
                  VRAAG OFFERTE AAN
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            
            <div>
              <img 
                src="/images/kevin-portrait.png" 
                alt="DJ Kevin Froger"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              HOE WERKT
              <span className="block text-blue-700">HET?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Van eerste contact tot perfect evenement in 4 eenvoudige stappen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  {item.icon}
                </div>
                <div className="text-blue-500 font-black text-lg mb-4">{item.step}</div>
                <h3 className="text-xl font-black text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white mobile-bottom-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN UW
              <span className="block text-blue-700">EVENEMENT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om uw evenement onvergetelijk te maken? Neem contact op voor een vrijblijvende offerte.
            </p>
          </div>
          <ContactForm eventType="evenement" />
        </div>
      </section>
    </div>
  );
};

export default EventsPage;