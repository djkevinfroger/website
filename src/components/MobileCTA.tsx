import React from 'react';
import { MessageCircle } from 'lucide-react';

const MobileCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '31645251333'; // Dutch phone number format for WhatsApp
    const message = encodeURIComponent('Hallo Kevin! Ik ben geïnteresseerd in jullie DJ services. Kunnen we een gesprek plannen?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-[5%] right-[5%] z-50 md:hidden">
      <button
        onClick={handleWhatsAppClick}
        className="w-full h-11 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 animate-glow"
        style={{ fontSize: '14px', height: '44px' }}
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
        <span>App met Kevin</span>
      </button>
    </div>
  );
};

export default MobileCTA;