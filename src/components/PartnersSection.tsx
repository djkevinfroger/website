import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "Feyenoord", src: "/images/logos/feyenoord-rotterdam.png", alt: "Feyenoord Rotterdam - Voetbalclub" },
    { name: "Sparta", src: "/images/logos/sparta-rotterdam.png", alt: "Sparta Rotterdam - Voetbalclub" },
    { name: "KPN", src: "/images/logos/kpn.png", alt: "KPN - Telecommunicatie" },
    { name: "Modern Nerdplace", src: "/images/logos/modern-nerdplace.png", alt: "Modern Nerdplace - Gaming & Events" },
    { name: "Pupa Milano", src: "/images/logos/pupa-milano.png", alt: "Pupa Milano - Cosmetica" },
    { name: "Heineken", src: "/images/logos/heineken.png", alt: "Heineken - Bierbrouwerij" },
    { name: "Hogeschool Rotterdam", src: "/images/logos/hogeschool-rotterdam.png", alt: "Hogeschool Rotterdam - Onderwijs" },
    { name: "Van der Valk", src: "/images/logos/van-der-valk.png", alt: "Van der Valk - Hotels & Restaurants" },
    { name: "Albert Heijn", src: "/images/logos/albert-heijn.png", alt: "Albert Heijn - Supermarktketen" },
    { name: "Landmacht", src: "/images/logos/landmacht.png", alt: "Koninklijke Landmacht - Nederlandse Defensie" },
    { name: "Politie", src: "/images/logos/politie.png", alt: "Politie Nederland - Veiligheid & Handhaving" },
    { name: "Zandvoort", src: "/images/logos/zandvoort.png", alt: "Circuit Zandvoort - Racecircuit" },
    { name: "Dutch Grand Prix", src: "/images/logos/dutch-grand-prix.png", alt: "Dutch Grand Prix - Formule 1 Nederland" },
    { name: "Voorwinden", src: "/images/logos/voorwinden.png", alt: "Voorwinden - Catering & Events" },
    { name: "Jumbo", src: "/images/logos/jumbo.png", alt: "Jumbo - Supermarktketen" },
    { name: "Bol.com", src: "/images/logos/bolcom.png", alt: "Bol.com - Online Webwinkel" },
    { name: "Makro", src: "/images/logos/makro.png", alt: "Makro - Groothandel" },
    { name: "Flügel", src: "/images/logos/flugel.png", alt: "Flügel - Events & Entertainment" }
  ];

  return (
    <section className="py-16 bg-gray-50" aria-label="Onze Partners en Samenwerkingen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            VERTROUWD DOOR
            <span className="block text-blue-700">TOONAANGEVENDE MERKEN</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DJ Kevin Froger heeft het vertrouwen van bekende merken en organisaties in heel Nederland
          </p>
        </div>
        
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex space-x-12 items-center animate-scroll-logos">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 group"
              >
                <img 
                  src={partner.src} 
                  alt={partner.alt}
                  className="h-12 w-auto max-w-[120px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.warn(`Logo failed to load: ${partner.src}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div 
                key={`duplicate-${index}`}
                className="flex-shrink-0 group"
              >
                <img 
                  src={partner.src} 
                  alt={partner.alt}
                  className="h-12 w-auto max-w-[120px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    console.warn(`Logo failed to load: ${partner.src}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 font-medium">
            En nog vele andere tevreden klanten door heel Nederland
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;