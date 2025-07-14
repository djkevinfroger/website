import React from 'react';
import { Heart, Music, Users, Calendar, CheckCircle, ArrowRight, Star, Quote, Clock, Camera, Gift, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';

// SEO Meta data
export const weddingsSEO = {
  title: "DJ voor bruiloft boeken - Kevin Froger | Professionele Bruiloft DJ",
  description: "Boek DJ Kevin Froger voor jullie bruiloft. Geen standaard playlist, maar live mixing op maat voor jullie mooiste dag. 15+ jaar ervaring.",
  keywords: "DJ bruiloft, bruiloft DJ boeken, trouw DJ, ceremonie muziek, bruiloft entertainment"
};

const WeddingsPage = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ceremonie begeleiding",
      description: "Muzikale ondersteuning tijdens de trouwceremonie"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Diner muziek",
      description: "Sfeervolle achtergrondmuziek tijdens het diner"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Eerste dans begeleiding",
      description: "Perfect geluid en timing voor jullie eerste dans"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Feestavond DJ sets",
      description: "Van rustig tot uitbundig, aangepast aan jullie gasten"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "MC services",
      description: "Professionele presentatie en dagcoördinatie"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Geluid- en lichtapparatuur",
      description: "Complete technische setup voor jullie locatie"
    }
  ];

  const packages = [
    {
      name: "BASIS PAKKET",
      price: "Op aanvraag", 
      duration: "6 uur",
      features: [
        "DJ optreden voor 4 uur",
        "Muziekwensen vooraf bespreken",
        "Live mixing op locatie",
        "Aanpassing aan publiek en sfeer",
        "Professionele uitvoering"
      ],
      note: "Apparatuur niet inbegrepen - wordt ter plaatse geregeld",
      popular: false
    },
    {
      name: "PRO PAKKET",
      price: "Op aanvraag",
      duration: "4 uur",
      features: [
        "DJ optreden voor 4 uur",
        "Uitgebreide voorbereiding",
        "Persoonlijke muziekwensen",
        "Strakke afstemming op programma",
        "Extra aandacht voor speciale momenten",
        "Professionele begeleiding"
      ],
      note: "Apparatuur niet inbegrepen - focus op perfecte uitvoering",
      popular: true
    },
    {
      name: "EXCLUSIEF PAKKET",
      price: "In overleg",
      duration: "4 uur",
      features: [
        "DJ optreden voor 4 uur",
        "Volledig op maat samengesteld",
        "Meerdaagse boekingen mogelijk",
        "Exclusieve voorbereiding",
        "VIP behandeling",
        "Alle speciale wensen mogelijk"
      ],
      note: "Voor bijzondere gelegenheden en meerdaagse events",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "KENNISMAKING",
      description: "Persoonlijk gesprek over jullie wensen, stijl en planning voor de perfecte dag",
      icon: <Heart className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "VOORBEREIDING",
      description: "Samenstellen van muzieklijsten en technische voorbereiding voor jullie locatie",
      icon: <Music className="w-8 h-8" />
    },
    {
      step: "03",
      title: "JULLIE PERFECTE DAG",
      description: "Van ceremonie tot late avond zorgen wij voor de muziek zodat jullie kunnen genieten",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  const musicStyles = [
    "Klassiek & Instrumentaal",
    "Pop & Rock Classics", 
    "Nederlandse Hits",
    "Dance & House",
    "R&B & Soul",
    "Jazz & Lounge",
    "Feest & Carnaval",
    "Internationale Hits"
  ];

  const faq = [
    {
      question: "Hoe ver van tevoren moeten we boeken?",
      answer: "Voor bruiloften adviseren we 6-12 maanden van tevoren te boeken, vooral voor populaire trouwdata in het voorjaar en de zomer. Maar we proberen altijd mee te denken, ook bij kortere termijnen."
    },
    {
      question: "Kunnen we onze eigen muziekwensen doorgeven?",
      answer: "Absoluut! We bespreken vooraf uitgebreid jullie muziekvoorkeuren, no-go songs en speciale verzoeken. Jullie kunnen een playlist aanleveren die we vakkundig verwerken in de set."
    },
    {
      question: "Wat gebeurt er bij slecht weer (outdoor bruiloft)?",
      answer: "We hebben altijd een backup plan en weerbestendige apparatuur. Bij outdoor ceremonies hebben we ervaring met verschillende weersomstandigheden en zorgen we voor de juiste bescherming van de apparatuur."
    },
    {
      question: "Hoe zit het met de technische setup?",
      answer: "Wij verzorgen de complete technische setup en breakdown. We komen van tevoren de locatie bekijken, zorgen voor de juiste aansluitingen en testen alles vooraf. Jullie hoeven nergens aan te denken."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-blue-100/50"></div>
        
        {/* Floating hearts */}
        <div className="absolute top-20 left-10 w-8 h-8 text-pink-300 animate-float">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="absolute top-40 right-20 w-6 h-6 text-purple-300 animate-bounce">
          <Sparkles className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-40 left-20 w-10 h-10 text-pink-400 animate-pulse">
          <Music className="w-full h-full" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <Heart className="w-10 h-10 text-pink-500" />
                <span className="text-pink-500 font-black text-xl tracking-wide">BRUILOFTEN</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-8 leading-tight text-shadow">
                MUZIEK OP MAAT
                <span className="block text-pink-500">VOOR JULLIE</span>
                <span className="block text-pink-500">MOOISTE DAG</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Jullie bruiloft is een van de mooiste momenten in jullie leven. De juiste muziek kan dit 
                moment nog specialer maken. Wij zorgen ervoor dat alle muziekwensen perfect aansluiten 
                bij jullie stijl en de sfeer die jullie willen creëren.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Calendar className="w-6 h-6 inline-block mr-3" />
                  PLAN GESPREK
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0645251333"
                  className="border-3 border-gray-800 text-gray-800 px-10 py-5 rounded-full font-black text-xl hover:bg-gray-800 hover:text-white transition-all duration-300 text-center"
                >
                  DIRECT BELLEN
                </a>
              </div>

              {/* Music Styles */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {musicStyles.slice(0, 4).map((style, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/dj-kevin-froger-bruiloft-scaled.jpeg" 
                alt="Bruiloft DJ"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xl">500+ Bruiloften</p>
                    <p className="text-gray-500 font-semibold">Succesvol begeleid</p>
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
              COMPLETE BRUILOFT
              <span className="block text-pink-500">BEGELEIDING</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van ceremonie tot late avond, wij zorgen voor de perfecte muzikale begeleiding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-pink-50 hover:shadow-lg transition-all duration-300">
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

      {/* Packages Section */}
      <section className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BRUILOFT
              <span className="block text-pink-500">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Kies het pakket dat perfect past bij jullie droombruiloft
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
                    className={`block w-full text-center py-4 rounded-full font-black text-lg transition-all duration-200 ${
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

      {/* Process Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              HOE WERKT
              <span className="block text-pink-500">HET?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Ons bewezen proces voor een perfect muzikale bruiloft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-pink-500 font-black text-lg mb-4">{item.step}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-12 text-shadow">
                WAAROM KIEZEN
                <span className="block text-pink-500">VOOR KEVIN?</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">ERVARING & EXPERTISE</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">Meer dan 15 jaar ervaring in het begeleiden van bruiloften. Wij weten precies hoe we de perfecte sfeer creëren voor elk moment van jullie dag.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Users className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">PERSOONLIJKE AANPAK</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">Elk bruidspaar is uniek. Wij luisteren naar jullie wensen en creëren een op maat gemaakte muziekselectie die perfect past bij jullie stijl.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Music className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">COMPLETE BEGELEIDING</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">Van ceremonie tot late avond. DJ én MC services zorgen voor een naadloze overgang tussen alle onderdelen van jullie bruiloft.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/images/dj-booth-wit-design.png" 
                alt="DJ Setup Bruiloft"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-pink-500">VRAGEN</span>
            </h2>
            <p className="text-2xl text-gray-600">
              Antwoorden op de meest gestelde vragen over bruiloft DJ services
            </p>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
                    {index + 1}
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-pink-50 to-purple-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PLAN JULLIE
              <span className="block text-pink-500">DROOMBRUILOFT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Laten we samen jullie perfecte dag plannen. Vul het formulier in voor een vrijblijvend gesprek.
            </p>
          </div>
          <ContactForm eventType="bruiloft" />
        </div>
      </section>
    </div>
  );
};

export default WeddingsPage;