import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare, ArrowRight, Award, Users, Music, Calendar, Star, Quote } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
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
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Jaar Ervaring' },
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Bruiloften' },
    { icon: <Music className="w-8 h-8" />, number: '50+', label: 'Festivals' },
    { icon: <CheckCircle className="w-8 h-8" />, number: '1000+', label: 'Events' }
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
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "TELEFOON",
      subtitle: "Voor directe vragen en spoedboekingen",
      contact: "06 45 25 13 33",
      href: "tel:0645251333",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "EMAIL",
      subtitle: "Voor uitgebreide informatie en offertes",
      contact: "booking@kevinfroger.nl",
      href: "mailto:booking@kevinfroger.nl",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "WERKGEBIED",
      subtitle: "Landelijk werkzaam",
      contact: "Heel Nederland",
      href: "#",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "REACTIETIJD",
      subtitle: "Snelle reactie gegarandeerd",
      contact: "Binnen 24 uur",
      href: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqs = [
    {
      question: "Hoe ver van tevoren moet ik boeken?",
      answer: "Voor bruiloften raden we aan om 6-12 maanden van tevoren te boeken. Voor andere evenementen is 2-3 maanden meestal voldoende, maar we proberen altijd mee te denken ook bij last-minute boekingen."
    },
    {
      question: "Wat is inbegrepen in de prijs?",
      answer: "Standaard inbegrepen: DJ services, complete geluidsapparatuur, draadloze microfoons, basisverlichting en voor-/nabereiding. Uitgebreide licht shows en extra apparatuur kunnen worden toegevoegd."
    },
    {
      question: "Kunnen we eigen muziekwensen doorgeven?",
      answer: "Absoluut! We bespreken vooraf uitgebreid jullie muziekvoorkeuren en no-go songs. Jullie kunnen een playlist aanleveren die we vakkundig verwerken in de set."
    },
    {
      question: "Hoe zit het met de technische setup?",
      answer: "Wij verzorgen de complete technische setup en breakdown. We hebben eigen professionele apparatuur en zorgen voor de juiste aansluitingen en veiligheid."
    },
    {
      question: "Wat gebeurt er bij ziekte of noodgevallen?",
      answer: "We hebben altijd een backup plan en een netwerk van professionele DJ's die kunnen invallen. Uw evenement gaat altijd door met dezelfde kwaliteit."
    },
    {
      question: "Kunnen jullie ook buiten Nederland optreden?",
      answer: "Ja, we verzorgen ook evenementen in België en Duitsland. Voor internationale boekingen bespreken we de specifieke voorwaarden en kosten."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
                LATEN WE JOUW
                <span className="block text-orange-400">FEEST</span>
                <span className="block text-orange-400">ONVERGETELIJK</span>
                <span className="block text-orange-400">MAKEN</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Klaar voor een feest dat je gasten nog lang zullen herinneren? Neem contact op 
                voor een vrijblijvende offerte. Wij denken graag mee om jouw evenement tot een groot succes te maken.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                  <span className="text-blue-100 text-lg font-semibold">Altijd een persoonlijk gesprek vooraf</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                  <span className="text-blue-100 text-lg font-semibold">Maatwerk voor elk type evenement</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                  <span className="text-blue-100 text-lg font-semibold">15+ jaar ervaring en referenties</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a
                  href="#contact-form"
                  className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Calendar className="w-6 h-6 inline-block mr-3" />
                  DIRECT BOEKEN
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:0645251333"
                  className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300 text-center"
                >
                  06 45 25 13 33
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/kevin-portrait.png" 
                alt="DJ Kevin Froger Contact"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xl">Direct Contact</p>
                    <p className="text-gray-500 font-semibold">Binnen 24u reactie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-black mb-2 text-shadow-lg">{stat.number}</div>
                <div className="text-lg font-bold opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DIRECT
              <span className="block text-blue-700">CONTACT</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Meerdere manieren om contact met ons op te nemen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {method.icon}
                </div>
                <h3 className="font-black text-gray-900 text-xl mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{method.subtitle}</p>
                <a 
                  href={method.href} 
                  className="text-blue-600 font-black text-lg hover:text-orange-500 transition-colors duration-200"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VRAAG DIRECT EEN
              <span className="block text-blue-700">OFFERTE AAN</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAT KUN JE VAN
              <span className="block text-blue-700">ONS VERWACHTEN?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Professionele DJ services voor elk type evenement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-800 font-bold text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              HOE WERKT
              <span className="block text-orange-500">HET?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Van eerste contact tot perfect feest in 4 eenvoudige stappen
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

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-blue-700">VRAGEN</span>
            </h2>
            <p className="text-2xl text-gray-600">
              De meest gestelde vragen over onze DJ services
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            KLAAR VOOR EEN
            <span className="block text-orange-400">ONVERGETELIJK FEEST?</span>
          </h2>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Neem vandaag nog contact op en laten we samen jouw evenement tot een groot succes maken. 
            Binnen 24 uur ontvang je een persoonlijke offerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact-form"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
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

export default ContactPage;