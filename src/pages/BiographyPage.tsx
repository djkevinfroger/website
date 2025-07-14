import React from 'react';
import { User, MapPin, Music, Mic, Heart, Star, Award, Calendar, Users, Zap, ArrowRight, Quote } from 'lucide-react';

const BiographyPage = () => {
  const highlights = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Hoeksche Waard",
      description: "Afkomstig uit de prachtige Hoeksche Waard",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Mixing",
      description: "Unieke live mixen ter plekke samengesteld",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "DJ & MC",
      description: "Energieke MC die interactie aangaat met publiek",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Persoonlijke Aanpak",
      description: "Afgestemd op de sfeer van het moment",
      color: "from-green-500 to-green-600"
    }
  ];

  const expertise = [
    {
      title: "Live Mixing Specialist",
      description: "Geen standaard playlists of mixtapes, maar unieke live mixen die ter plekke worden samengesteld. Kevin voelt perfect aan wat het publiek wil horen en past zijn set daarop aan.",
      icon: <Music className="w-12 h-12" />
    },
    {
      title: "Energieke MC Services",
      description: "Als ervaren MC gaat Kevin de interactie aan met het publiek en tilt hij elke avond naar een hoger niveau. Van aankondigingen tot crowd interaction - alles met de juiste energie.",
      icon: <Mic className="w-12 h-12" />
    },
    {
      title: "Veelzijdige Evenementen",
      description: "Of het nu gaat om een intieme bruiloft, een bedrijfsfeest of een groots evenement - Kevin zorgt ervoor dat elk feest onvergetelijk wordt met zijn persoonlijke aanpak.",
      icon: <Calendar className="w-12 h-12" />
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Ervaring", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "Events", icon: <Calendar className="w-8 h-8" /> },
    { number: "500+", label: "Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Festivals", icon: <Zap className="w-8 h-8" /> }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <User className="w-10 h-10 text-orange-400" />
                <span className="text-orange-400 font-black text-xl tracking-wide">BIOGRAFIE</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
                ONTMOET
                <span className="block text-orange-400">DJ KEVIN</span>
                <span className="block text-orange-400">FROGER</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Van de prachtige Hoeksche Waard naar heel Nederland - ontdek het verhaal achter 
                de DJ die elk evenement tot een onvergetelijke ervaring maakt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <a
                  href="#biografie"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
                >
                  <User className="w-6 h-6 inline-block mr-3" />
                  LEES VERHAAL
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  BOEK KEVIN
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0">
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
            
            <div className="relative">
              <img 
                src="/images/kevin-portrait.png" 
                alt="DJ Kevin Froger"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xl">Hoeksche Waard</p>
                    <p className="text-gray-500 font-semibold">Nederland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biografie" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              HET VERHAAL VAN
              <span className="block text-orange-500">KEVIN FROGER</span>
            </h2>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 mb-20">
            <div className="prose prose-xl max-w-none">
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                <strong className="text-orange-500">DJ Kevin Froger</strong>, afkomstig uit de prachtige <strong>Hoeksche Waard</strong>, 
                weet als geen ander zijn publiek te raken met de kracht van live muziek. Geen standaard playlists of mixtapes, 
                maar <strong className="text-blue-600">unieke live mixen</strong> die ter plekke worden samengesteld, 
                afgestemd op de sfeer van het moment.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Wanneer je Kevin Froger boekt, krijg je niet alleen een DJ, maar ook een <strong className="text-purple-600">energieke MC</strong> 
                die de interactie aangaat met het publiek en de avond naar een hoger niveau tilt. Of het nu gaat om een intieme bruiloft, 
                een bedrijfsfeest of een groots evenement, Kevin zorgt ervoor dat elk feest onvergetelijk wordt.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
                <p className="text-lg font-bold">
                  "Boek Kevin voor een onvergetelijke avond vol energie en dansplezier!"
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              KEVIN'S
              <span className="block text-blue-700">EXPERTISE</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Wat maakt Kevin Froger uniek in de wereld van DJ's en entertainment?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            KLAAR OM KEVIN
            <span className="block text-orange-400">TE BOEKEN?</span>
          </h2>
          <p className="text-2xl mb-12 text-blue-100 leading-relax max-w-3xl mx-auto">
            Ervaar zelf de unieke energie en professionaliteit van DJ Kevin Froger. 
            Laten we samen jouw evenement onvergetelijk maken!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              BOEK NU DIRECT
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              06 45 25 13 33
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiographyPage;