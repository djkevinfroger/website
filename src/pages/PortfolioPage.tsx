import React from 'react';
import { Play, Star, Calendar, Users, Music, Award, ArrowRight, Quote, ExternalLink, Image } from 'lucide-react';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "Bruiloft Sarah & Mark",
      category: "Bruiloft",
      date: "Augustus 2024",
      location: "Kasteel de Haar, Utrecht",
      guests: "150 gasten",
      description: "Complete dagbegeleiding van ceremonie tot late avond. Van klassieke ceremoniemuziek tot een uitbundig dansfeest.",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Ceremonie begeleiding", "Eerste dans", "8 uur non-stop entertainment", "Alle generaties op de dansvloer"]
    },
    {
      title: "TechCorp Jubileum",
      category: "Bedrijfsfeest",
      date: "September 2024",
      location: "RAI Amsterdam",
      guests: "300 gasten",
      description: "25-jarig bedrijfsjubileum met netwerkborrel, diner en groot feest. Professionele MC services en muziek op maat.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["MC services", "Netwerkborrel muziek", "Award ceremony", "Corporate party"]
    },
    {
      title: "Zomerfeest Almere",
      category: "Festival",
      date: "Juli 2024",
      location: "Weerwater, Almere",
      guests: "2000+ bezoekers",
      description: "Main stage performance tijdens het grootste zomerfeest van Almere. 90 minuten high-energy festival set.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Main stage performance", "90 minuten power set", "Crowd control", "Live MC"]
    },
    {
      title: "Emma's 30e Verjaardag",
      category: "Privé Feest",
      date: "Juni 2024",
      location: "Landgoed Zonheuvel",
      guests: "80 gasten",
      description: "Stijlvolle 30e verjaardagsfeest in een prachtige buitenlocatie. Van lounge muziek tot dansfeest.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Outdoor setup", "Lounge & dance", "Persoonlijke playlist", "Sfeerverlichting"]
    },
    {
      title: "FC Almere Kampioenschap",
      category: "Sportfeest",
      date: "Mei 2024",
      location: "Sportpark Almere",
      guests: "200 gasten",
      description: "Kampioenschapsfeest van FC Almere jeugd. Van huldiging tot groot feest voor spelers en ouders.",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Award ceremony", "Team songs", "Familie entertainment", "Victory celebration"]
    },
    {
      title: "InnovatieHub Productlancering",
      category: "Bedrijfsfeest",
      date: "April 2024",
      location: "World Trade Center",
      guests: "250 gasten",
      description: "Exclusieve productlancering met internationale gasten. Stijlvolle achtergrondmuziek en presentatie support.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Internationale gasten", "Presentatie support", "Networking muziek", "Product reveal"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Events Begeleid", icon: <Calendar className="w-8 h-8" /> },
    { number: "500+", label: "Bruiloften", icon: <Star className="w-8 h-8" /> },
    { number: "50+", label: "Festivals", icon: <Music className="w-8 h-8" /> },
    { number: "15+", label: "Jaar Ervaring", icon: <Award className="w-8 h-8" /> }
  ];

  const categories = ["Alle", "Bruiloft", "Bedrijfsfeest", "Festival", "Privé Feest", "Sportfeest"];
  const [activeCategory, setActiveCategory] = React.useState("Alle");

  const filteredItems = activeCategory === "Alle" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              ONS
              <span className="block text-purple-400">PORTFOLIO</span>
              <span className="block text-purple-400">& REFERENTIES</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-purple-100 leading-relaxed max-w-4xl mx-auto">
              Ontdek onze meest succesvolle evenementen en lees wat onze klanten zeggen. 
              Van intieme bruiloften tot grote festivals - elk event is uniek en perfect uitgevoerd.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#portfolio"
                className="group bg-gradient-to-r from-purple-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <Image className="w-6 h-6 inline-block mr-3" />
                BEKIJK PORTFOLIO
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                VRAAG OFFERTE
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-purple-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            KLAAR VOOR UW
            <span className="block text-purple-400">ONVERGETELIJK EVENT?</span>
          </h2>
          <p className="text-2xl mb-12 text-purple-100 leading-relaxed max-w-3xl mx-auto">
            Laten we samen uw evenement tot een groot succes maken. Neem contact op 
            voor een vrijblijvende offerte en persoonlijk advies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-500 to-blue-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
            >
              VRAAG OFFERTE AAN
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              06 45 25 13 33
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;