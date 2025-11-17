import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SEO() {
  const { language } = useLanguage();

  const seoData = {
    en: {
      title: 'Fine Art Real Estate - Dubai Property Agency | Luxury Real Estate Investment',
      description: 'Your trusted partner in Dubai real estate. Expert guidance for buying, selling, and investing in Dubai properties. Free consultation, visa assistance, and full legal support.',
      keywords: 'Dubai real estate, Dubai property, invest in Dubai, Dubai apartments, Dubai villas, real estate agency Dubai, property investment UAE',
    },
    ru: {
      title: 'Fine Art Real Estate - Агентство недвижимости в Дубае | Инвестиции в элитную недвижимость',
      description: 'Ваш надёжный партнёр в мире недвижимости Дубая. Экспертное сопровождение при покупке, продаже и инвестировании в недвижимость Дубая. Бесплатная консультация, помощь с визой и полная юридическая поддержка.',
      keywords: 'недвижимость Дубай, купить квартиру Дубай, инвестиции в Дубай, недвижимость ОАЭ, агентство недвижимости Дубай, виллы в Дубае',
    },
    de: {
      title: 'Fine Art Real Estate - Immobilienagentur in Dubai | Luxus-Immobilieninvestitionen',
      description: 'Ihr zuverlässiger Partner für Immobilien in Dubai. Expertenberatung beim Kauf, Verkauf und Investieren in Dubai-Immobilien. Kostenlose Beratung, Visa-Unterstützung und vollständige rechtliche Betreuung.',
      keywords: 'Dubai Immobilien, Dubai Eigentum, in Dubai investieren, Dubai Wohnungen, Dubai Villen, Immobilienagentur Dubai, Immobilieninvestition VAE',
    },
  };

  const data = seoData[language] || seoData.en;

  useEffect(() => {
    // Update document title
    document.title = data.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', data.description);
    updateMetaTag('keywords', data.keywords);

    // Open Graph tags
    updateMetaTag('og:title', data.title, true);
    updateMetaTag('og:description', data.description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:image', '/hero-dubai.jpg', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', data.title);
    updateMetaTag('twitter:description', data.description);
    updateMetaTag('twitter:image', '/hero-dubai.jpg');

    // Language tag
    document.documentElement.lang = language;
  }, [language, data]);

  return null;
}
