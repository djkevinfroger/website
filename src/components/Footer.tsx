import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Clock, Award, Users, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Bruiloften', href: '/bruiloften' },
    { name: 'Bedrijfsfeesten', href: '/bedrijfsfeesten' },
    { name: 'Festivals', href: '/festivals' },
    { name: 'Privé feesten', href: '/prive-feesten' },
    { name: 'Sportfeesten', href: '/sportfeesten' },
    { name: 'Evenementen', href: '/evenementen' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Prijzen', href: '/prijzen' },
    { name: 'Biografie', href: '/biografie' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, number: '15+', label: 'Jaar Ervaring' },
    { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Bruiloften' },
    { icon: <Music className="w-6 h-6" />, number: '50+', label: 'Festivals' },
    { icon: <Clock className="w-6 h-6" />, number: '1000+', label: 'Events' }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-blue-700/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
              <div className="text-blue-200 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/kevin-logo.png" 
                alt="DJ Kevin Froger Logo" 
                className="h-20 w-auto mb-6 drop-shadow-2xl"
              />
            </div>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">
              "Van sfeer tot keihard, altijd raak!" Professionele DJ services voor bruiloften, 
              bedrijfsfeesten en festivals in heel Nederland.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="group text-blue-300 hover:text-orange-400 transition-colors p-3 bg-blue-700/50 rounded-full hover:bg-orange-500/20">
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">DIENSTEN</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <a href="tel:0645251333" className="text-blue-200 hover:text-white transition-colors font-semibold">
                  06 45 25 13 33
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <a href="mailto:booking@kevinfroger.nl" className="text-blue-200 hover:text-white transition-colors font-semibold">
                  booking@kevinfroger.nl
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mt-0.5">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-blue-200 font-semibold">
                  Nederland<br />
                  <span className="text-sm opacity-75">(landelijk werkzaam)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-6 text-orange-400">SNEL NAAR</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-white transition-colors font-semibold hover:translate-x-1 transform duration-200 inline-block"
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-black text-sm hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                BOEK NU
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 font-semibold mb-4 md:mb-0">
              © 2024 DJ Kevin Froger. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-blue-300 hover:text-white font-semibold transition-colors text-center">
                Privacybeleid
              </a>
              <a href="#" className="text-blue-300 hover:text-white font-semibold transition-colors text-center">
                Algemene Voorwaarden
              </a>
              <a href="#" className="text-blue-300 hover:text-white font-semibold transition-colors text-center">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;