import React from 'react';
import { Building, Users, Briefcase, Calendar, CheckCircle, Trophy, Star, Quote, ArrowRight, Award, Target, Zap, Clock, Globe, Shield } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// SEO Meta data
export const corporateSEO = {
  title: "DJ voor bedrijfsfeest - Professioneel & sfeervol | Kevin Froger",
  description: "Sfeervolle DJ op jouw bedrijfsfeest. Geen playlist, wel precies wat de mensen willen horen. Professionele uitstraling gegarandeerd.",
  keywords: "DJ bedrijfsfeest, corporate DJ, zakelijke evenementen, personeelsfeest DJ, netwerkborrel muziek"
};
const CorporatePage = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bedrijfsfeesten & jubilea",
      description: "Professionele entertainment voor bedrijfsevenementen"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Productlanceringen",
      description: "Muzikale ondersteuning bij product presentaties"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Netwerkevenenementen", 
      description: "Sfeervolle achtergrondmuziek voor networking"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Personeelsfeesten",
      description: "Van rustig tot uitbundig voor alle medewerkers"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Teambuilding events",
      description: "Energieke muziek voor teamactiviteiten"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award ceremonies",
      description: "Professionele begeleiding van prijsuitreikingen"
    }
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "PROFESSIONELE UITSTRALING",
      description: "Representatieve DJ services die bij uw bedrijfsimago passen en uw evenement naar een hoger niveau tillen",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "FLEXIBELE PLANNING",
      description: "Volledig aanpasbaar aan uw programma en corporate requirements voor een naadloze integratie",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "BEWEZEN RESULTATEN",
      description: "Jarenlange ervaring met succesvolle bedrijfsevenementen en tevreden corporate klanten",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const packages = [
    {
      name: "NETWERK PAKKET",
      price: "Op aanvraag",
      duration: "4 uur",
      features: [
        "Achtergrondmuziek networking",
        "Basis geluidsapparatuur",
        "Draadloze microfoon",
        "Professionele uitstraling",
        "Flexibele muziekstijl"
      ],
      popular: false
    },
    {
      name: "CORPORATE PAKKET",
      price: "Op aanvraag",
      duration: "6 uur",
      features: [
        "Volledige event begeleiding",
        "Presentatie ondersteuning",
        "MC services",
        "Professionele geluidsapparatuur",
        "Verlichting",
        "Draadloze microfoons",
        "Muziek op maat",
        "Technische ondersteuning"
      ],
      popular: true
    },
    {
      name: "PREMIUM CORPORATE",
      price: "Op aanvraag",
      duration: "8 uur",
      features: [
        "Alles van corporate pakket",
        "Uitgebreide verlichting",
        "Video/audio integratie",
        "Extra geluidspunten",
        "Persoonlijke voorbereiding",
        "Backup apparatuur",
        "Live streaming ondersteuning",
        "Onbeperkte overleg"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "INTAKE & BRIEFING",
      description: "Uitgebreide bespreking van uw event, doelgroep en gewenste sfeer voor optimaal resultaat",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      step: "02",
      title: "VOORBEREIDING & PLANNING", 
      description: "Samenstelling van muziekselectie en technische voorbereiding aangepast aan uw locatie",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "03",
      title: "UITVOERING & BEGELEIDING",
      description: "Professionele uitvoering met flexibiliteit om in te spelen op de dynamiek van uw event",
      icon: <Trophy className="w-8 h-8" />
    }
  ];

  const industries = [
    "Technologie & IT",
    "Financiële dienstverlening",
    "Gezondheidszorg",
    "Onderwijs & Training",
    "Retail & E-commerce",
    "Productie & Industrie",
    "Consultancy",
    "Non-profit organisaties"
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Betrouwbaarheid",
      description: "Altijd op tijd, professioneel en volledig voorbereid"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Internationale ervaring",
      description: "Ervaring met multiculturele bedrijfsevenementen"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kwaliteitsgarantie",
      description: "Hoogwaardige apparatuur en backup systemen"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <Building className="w-10 h-10 text-blue-400" />
                <span className="text-blue-400 font-black text-xl tracking-wide">BEDRIJFSFEESTEN</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
                PROFESSIONELE
                <span className="block text-blue-400">ENTERTAINMENT</span>
                <span className="block text-blue-400">VOOR CORPORATE</span>
                <span className="block text-blue-400">EVENTS</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Elk bedrijfsevenement verdient de perfecte muzikale begeleiding. Van stijlvolle 
                netwerkevenenementen tot uitbundige personeelsfeesten - wij zorgen voor entertainment 
                dat past bij uw professionele uitstraling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Calendar className="w-6 h-6 inline-block mr-3" />
                  OFFERTE AANVRAGEN
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0645251333"
                  className="border-3 border-blue-300 text-blue-100 px-10 py-5 rounded-full font-black text-xl hover:border-white hover:text-white transition-all duration-300 text-center"
                >
                  DIRECT CONTACT
                </a>
              </div>

              {/* Industries */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {industries.slice(0, 4).map((industry, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-100 border border-blue-400/30"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/dj-kevin-froger-bedrijfsfeest.png" 
                alt="Corporate Event DJ"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xl">200+ Events</p>
                    <p className="text-gray-500 font-semibold">Succesvol uitgevoerd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              MAATWERK VOOR
              <span className="block text-blue-700">ELK BEDRIJFSFEEST</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services afgestemd op uw corporate identity en doelstellingen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              CORPORATE
              <span className="block text-blue-700">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Professionele pakketten voor elk type bedrijfsevenement
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                pkg.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
                      <span className="text-sm font-black tracking-wide">MEEST GEKOZEN</span>
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-blue-500">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className={`block w-full text-center py-4 rounded-full font-black text-lg transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
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

      {/* Benefits Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VOORDELEN VAN
              <span className="block text-blue-700">DJ KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Waarom bedrijven kiezen voor onze professionele DJ services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{benefit.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-12 text-shadow">
                ONS PROFESSIONELE
                <span className="block text-blue-700">PROCES</span>
              </h2>
              
              <div className="space-y-10">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-blue-500 font-black text-lg mb-2">{item.step}</div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src="/images/licht-en-geluid-verhuur-scaled.jpeg" 
                alt="Corporate DJ Setup"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM KIEZEN
              <span className="block text-blue-700">VOOR ONS?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN UW
              <span className="block text-blue-700">CORPORATE EVENT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Vraag een vrijblijvende offerte aan en laten we uw evenement tot een succes maken.
            </p>
          </div>
          <ContactForm eventType="bedrijfsfeest" />
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;