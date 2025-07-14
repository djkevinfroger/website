import React from 'react';
import { Gift, Users, Music, Calendar, CheckCircle, ArrowRight, Star, Quote, Clock, Cake, PartyPopper, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// SEO Meta data
export const privatePartiesSEO = {
  title: "DJ voor verjaardag boeken - Kevin Froger | Privé Feesten",
  description: "Boek een DJ voor jouw verjaardag. Geen standaard set, maar een optreden dat precies past bij jouw feest en gasten.",
  keywords: "DJ verjaardag, privé feest DJ, verjaardagsfeest DJ, familiefeest DJ, jubileum DJ"
};
const PrivatePartiesPage = () => {
  const services = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Verjaardagsfeesten",
      description: "Van 18e verjaardag tot 50+ jubileum"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Jubilea & Anniversaries",
      description: "Speciale mijlpalen vieren met stijl"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Themafeesten",
      description: "Van jaren '80 tot tropical party"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Familiebijeenkomsten",
      description: "Reünies en familiefeesten"
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Sweet 16 & 18e verjaardagen",
      description: "Onvergetelijke coming-of-age feesten"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Huisfeesten & Garden parties",
      description: "Intieme feesten in eigen omgeving"
    }
  ];

  const packages = [
    {
      name: "INTIEM PAKKET",
      price: "Op aanvraag",
      duration: "4 uur",
      features: [
        "DJ services voor 4 uur",
        "Basis geluidsapparatuur",
        "Draadloze microfoon",
        "Muziekwensen vooraf",
        "Persoonlijke playlist"
      ],
      popular: false
    },
    {
      name: "FEEST PAKKET",
      price: "Op aanvraag",
      duration: "6 uur",
      features: [
        "DJ services voor 6 uur",
        "Professionele geluidsapparatuur",
        "Sfeerverlichting",
        "Draadloze microfoons",
        "MC services",
        "Onbeperkte muziekwensen",
        "Speciale effecten"
      ],
      popular: true
    },
    {
      name: "PREMIUM FEEST",
      price: "Op aanvraag",
      duration: "8 uur",
      features: [
        "Alles van feest pakket",
        "Uitgebreide verlichting",
        "Rookmachine effecten",
        "Extra geluidspunten",
        "Persoonlijke voorbereiding",
        "Backup apparatuur",
        "Onbeperkte overleg",
        "Speciale intro/outro"
      ],
      popular: false
    }
  ];

  const partyTypes = [
    {
      title: "Sweet 16 & 18e Verjaardagen",
      description: "De perfecte overgang naar volwassenheid vieren",
      image: "/images/IMG_1605.png",
      features: ["Trendy muziek", "Social media moments", "Interactieve games"]
    },
    {
      title: "Volwassen Verjaardagsfeesten",
      description: "Van 30+ tot 70+ - elke leeftijd zijn eigen stijl",
      image: "/images/IMG_9532.png",
      features: ["Muziek op maat", "Nostalgische hits", "Dansbare classics"]
    },
    {
      title: "Themafeesten",
      description: "Van jaren '80 disco tot tropical paradise",
      image: "/images/dj-kevin-froger-apreskifeest.png",
      features: ["Thema muziek", "Passende effecten", "Kostuum party support"]
    }
  ];

  const musicStyles = [
    "Pop & Rock Hits",
    "Dance & House", 
    "R&B & Hip-Hop",
    "Nederlandse Hits",
    "Jaren '80 & '90",
    "Feest & Carnaval",
    "Classics & Oldies",
    "Latin & Reggaeton"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/30 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-300/40 rounded-full animate-float"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-center lg:text-left mobile-hero-content">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <Gift className="w-10 h-10 text-pink-400"  />
                <span className="text-pink-400 font-black text-xl tracking-wide">PRIVÉ FEESTEN</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
                JOUW FEEST
                <span className="block text-pink-400">JOUW MUZIEK</span>
                <span className="block text-pink-400">JOUW STIJL</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-purple-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Van intieme verjaardagsfeesten tot grote familiebijeenkomsten - wij zorgen voor de perfecte 
                muzikale sfeer die past bij jouw feest en gasten. Persoonlijk, flexibel en altijd op maat.
              </p>
              
              {/* Desktop buttons */}
              <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Calendar className="w-6 h-6 inline-block mr-3" />
                  PLAN JOUW FEEST
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0645251333"
                  className="border-3 border-pink-300 text-pink-100 px-10 py-5 rounded-full font-black text-xl hover:border-white hover:text-white transition-all duration-300 text-center"
                >
                  DIRECT CONTACT
                </a>
              </div>

              {/* Mobile buttons */}
              <div className="md:hidden mobile-btn-container mb-12">
                <a
                  href="#contact"
                  className="mobile-btn bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  PLAN JOUW FEEST
                </a>
              </div>

              {/* Music Styles */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {musicStyles.slice(0, 4).map((style, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-pink-100 border border-pink-400/30"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/IMG_1605.png" 
                alt="Privé Feest DJ"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <PartyPopper className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xl">300+ Feesten</p>
                    <p className="text-gray-500 font-semibold">Onvergetelijk gemaakt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE SOORTEN
              <span className="block text-pink-500">PRIVÉ FEESTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van intieme verjaardagen tot grote familiefeesten - wij maken elk feest onvergetelijk
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl hover:from-pink-100 hover:to-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Types Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              POPULAIRE
              <span className="block text-pink-500">FEEST TYPES</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              FEEST
              <span className="block text-pink-500">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Kies het pakket dat perfect past bij jouw feest
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-pink-500 ring-opacity-50' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg">
                      <span className="text-sm font-black tracking-wide">MEEST GEKOZEN</span>
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-pink-500">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className={`block w-full text-center py-4 rounded-full font-black text-lg transition-all duration-200 mobile-btn ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    KIES DIT PAKKET
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-pink-50 to-purple-50 mobile-bottom-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN JOUW
              <span className="block text-pink-500">PERFECT FEEST</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Laten we samen jouw droomfeest realiseren. Vertel ons over jouw plannen!
            </p>
          </div>
          <ContactForm eventType="prive" />
        </div>
      </section>
    </div>
  );
};

export default PrivatePartiesPage;