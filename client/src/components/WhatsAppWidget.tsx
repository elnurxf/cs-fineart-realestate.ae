import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhatsAppWidget() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp phone number (with country code, no + or spaces)
  const phoneNumber = '4917618182018'; // Fine Art Real Estate WhatsApp number

  // Multilingual messages
  const messages = {
    en: 'Hello! I\'m interested in learning more about your properties in Dubai.',
    ru: 'Привет! Я заинтересован в подробной информации о ваших объектах недвижимости в Дубае.',
    de: 'Hallo! Ich interessiere mich für weitere Informationen über Ihre Immobilien in Dubai.',
  };

  const buttonLabels = {
    en: 'Chat with us',
    ru: 'Напишите нам',
    de: 'Schreiben Sie uns',
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(messages[language as keyof typeof messages] || messages.en);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat Bubble - Show when closed */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
            aria-label="Open WhatsApp chat"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle size={28} />
          </button>
        )}

        {/* Chat Window - Show when open */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80 animate-in fade-in slide-in-from-bottom-4">
            {/* Header */}
            <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Fine Art Real Estate</h3>
                <p className="text-sm text-green-100">
                  {language === 'ru' ? 'Обычно отвечает в течение часа' : language === 'de' ? 'Antwortet normalerweise innerhalb einer Stunde' : 'Usually replies within an hour'}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-600 p-1 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-6 bg-gray-50">
              <p className="text-gray-700 mb-4 text-sm">
                {language === 'ru'
                  ? 'Здравствуйте! 👋 Как мы можем вам помочь?'
                  : language === 'de'
                  ? 'Hallo! 👋 Wie können wir dir helfen?'
                  : 'Hello! 👋 How can we help you?'}
              </p>

              {/* Quick Reply Buttons */}
              <div className="space-y-2 mb-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                  {language === 'ru'
                    ? '💬 Начать чат'
                    : language === 'de'
                    ? '💬 Chat starten'
                    : '💬 Start Chat'}
                </button>
              </div>

              {/* Footer Info */}
              <p className="text-xs text-gray-500 text-center">
                {language === 'ru'
                  ? 'Powered by WhatsApp'
                  : language === 'de'
                  ? 'Powered by WhatsApp'
                  : 'Powered by WhatsApp'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Button - Always visible alternative */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 hidden">
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messages[language as keyof typeof messages] || messages.en)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-5 py-3 shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm"
          >
            <MessageCircle size={20} />
            <span>{buttonLabels[language as keyof typeof buttonLabels] || buttonLabels.en}</span>
          </a>
        </div>
      )}
    </>
  );
}
