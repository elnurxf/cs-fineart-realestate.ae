import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ru' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const pathname = window.location.pathname;
    if (pathname.startsWith('/ru')) return 'ru';
    if (pathname.startsWith('/de')) return 'de';
    if (pathname.startsWith('/en')) return 'en';
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    const pathname = window.location.pathname;
    const newPath = `/${language}${pathname.replace(/^\/(en|ru|de)/, '')}`;
    window.history.replaceState({}, '', newPath);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.zoom': 'YOUR PERSONAL CALL',
    'nav.about': 'ABOUT US',
    'nav.services': 'SERVICES',
    'nav.whyDubai': 'WHY DUBAI?',
    'nav.partners': 'PARTNERS',
    'nav.properties': 'PROPERTIES',
    'nav.faq': 'FAQ',
    'nav.reviews': 'REVIEWS',
    
    // Hero Section
    'hero.title': 'Premium Real Estate in Dubai',
    'hero.subtitle': 'Discover Everything About Investing in Dubai',
    'hero.description': 'We provide you with a complete, step-by-step guide to investing in Dubai – fully customized to your individual goals.',
    'hero.coverage.title': 'During your exclusive consultation, we will cover every essential aspect:',
    'hero.coverage.visa': 'Visa procedures and residency options',
    'hero.coverage.escrow': 'Escrow accounts and secure transactions',
    'hero.coverage.handover': 'Property handover process',
    'hero.coverage.services': 'Post-purchase services, including rental management',
    'hero.closing': 'Whether you are a first-time investor or an experienced buyer, we take the time to understand your objectives and present the smartest, safest, and most profitable strategies for investing in Dubai real estate.',
    'hero.cta': 'Book your personal call today',
    
    // About Us
    'about.name': 'Rauf Najafov',
    'about.title': 'Founder and Managing Director',
    'about.bio.p1': 'My journey has taken me from Azerbaijan through Germany to Dubai, where I founded Fine Art Real Estate. From the very beginning, I learned that true value comes from dedication, transparency, and perseverance.',
    'about.bio.p2': 'As a development engineer at Volkswagen and through my travels around the world, I not only experienced different cultures but also discovered my passion for the real estate market. Precision, quality, and reliability define every transaction I handle.',
    'about.bio.p3': 'At Fine Art Real Estate, our mission is clear: to help our clients realize their property dreams in Dubai - whether buying, selling, or investing. Transparency, trust, and personalized guidance are at the heart of everything we do.',
    'about.stats.experience': 'Years Experience',
    'about.stats.clients': 'Happy Clients',
    'about.stats.transparency': 'Transparency',
    
    // Services
    'services.title': 'Full Range of Real Estate Services',
    'services.consultation.title': 'Free Consultation',
    'services.consultation.desc': 'We help you gain a clear understanding of the UAE real estate market and maximize the efficiency of your investment - whether for personal use or as an investment opportunity.',
    'services.selection.title': 'Property Selection',
    'services.selection.desc': 'We will find the most suitable property for you in the primary or secondary market, tailored to your budget, objectives, and preferences.',
    'services.purchase.title': 'Purchase and sale of all types of Real Estate',
    'services.purchase.desc': 'We provide professional services for acquiring and selling residential and commercial properties in Dubai, ensuring transparency and reliability at every stage.',
    'services.support.title': 'Comprehensive Transaction Support',
    'services.support.desc': 'We guide you through the entire process: from property selection to deal registration. Remote purchases from anywhere in the world are possible - convenient, safe, and transparent.',
    'services.legal.title': 'Legal Support',
    'services.legal.desc': 'We guarantee full protection of your interests: drafting agreements, verifying the legal status of properties, and ensuring complete legal security of the transaction.',
    'services.visa.title': 'Residency Visa Assistance',
    'services.visa.desc': 'We support you throughout the visa process: from initial consultation to document preparation, making the procedure as simple and efficient as possible.',
    
    // Why Dubai
    'whyDubai.title': 'Discover why Dubai is the ultimate destination for premium real estate investment',
    'whyDubai.cta': 'Ready to invest in Dubai\'s thriving real estate market?',
    'whyDubai.installments.title': '0% Installments',
    'whyDubai.installments.desc': 'Interest-free installments throughout the entire construction period.',
    'whyDubai.tax.title': 'Tax Benefits',
    'whyDubai.tax.desc': 'No income tax and an investor-friendly environment make Dubai particularly attractive for capital growth.',
    'whyDubai.market.title': 'Strong Real Estate Market',
    'whyDubai.market.desc': 'High returns of up to 12%, steady growth, and strong demand for residential and commercial properties provide long-term benefits for investors.',
    'whyDubai.location.title': 'Strategic Location',
    'whyDubai.location.desc': 'Dubai connects Europe, Asia, and Africa – a global hub for trade, travel, and business.',
    'whyDubai.infrastructure.title': 'Modern Infrastructure',
    'whyDubai.infrastructure.desc': 'From world-class airports to innovative smart city solutions, Dubai offers one of the most advanced infrastructures in the world.',
    'whyDubai.quality.title': 'Quality of Life',
    'whyDubai.quality.desc': 'A safe, multicultural, and dynamic lifestyle with world-class restaurants, beaches, events, and leisure opportunities.',
    'whyDubai.vision.title': 'Future-Oriented Vision',
    'whyDubai.vision.desc': 'With the "Dubai Vision 2040," the government focuses on sustainable development, innovation, and prosperity – perfect conditions for investors.',
    'whyDubai.stability.title': 'Political and Economic Stability',
    'whyDubai.stability.desc': 'The UAE offers a stable political and economic environment, ensuring security for investors.',
    
    // Partners
    'partners.title': 'Our Partners',
    
    // Properties
    'properties.title': 'Featured Properties',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.closing': 'Have more questions? Leave your contact details, and we will get in touch with you shortly to discuss all your questions and find the best solutions for you.',
    
    // Reviews
    'reviews.title': 'Client Reviews',
    'reviews.stats.success': 'Successful Deals',
    
    // Footer
    'footer.contact': 'Contact Us',
    'footer.name': 'Name',
    'footer.phone': 'Phone / Email',
    'footer.submit': 'Get Consultation',
    'footer.copyright': '© 2026 Fine Art Real Estate. All rights reserved.',
    'footer.email': 'Email',
    'footer.phoneLabel': 'Phone',
    'footer.location': 'Location',
    'footer.locationValue': 'Dubai, UAE',
    
    // Legal
    'legal.privacy': 'Privacy Policy',
    'legal.terms': 'Terms of Service',
  },
  ru: {
    // Navigation
    'nav.zoom': 'ВАША ПЕРСОНАЛЬНАЯ КОНСУЛЬТАЦИЯ',
    'nav.about': 'О НАС',
    'nav.services': 'УСЛУГИ',
    'nav.whyDubai': 'ПОЧЕМУ ДУБАЙ?',
    'nav.partners': 'ПАРТНЕРЫ',
    'nav.properties': 'НЕДВИЖИМОСТЬ',
    'nav.faq': 'FAQ',
    'nav.reviews': 'ОТЗЫВЫ',
    
    // Hero Section
    'hero.title': 'Премиум недвижимость в Дубае',
    'hero.subtitle': 'Узнайте всё о вложениях в недвижимость Дубая',
    'hero.description': 'Мы предоставляем вам полный пошаговый гид по инвестированию в Дубай — полностью адаптированный под ваши индивидуальные цели.',
    'hero.coverage.title': 'Во время вашей эксклюзивной консультации мы подробно разберём:',
    'hero.coverage.visa': 'Процедуры получения визы и варианты резидентства',
    'hero.coverage.escrow': 'Escrow-счета и безопасные транзакции',
    'hero.coverage.handover': 'Процесс передачи недвижимости',
    'hero.coverage.services': 'Постпродажные услуги, включая управление арендой',
    'hero.closing': 'Будь вы начинающим инвестором или опытным покупателем, мы уделим время вашим целям и предложим самые умные, безопасные и прибыльные стратегии инвестирования в недвижимость Дубая.',
    'hero.cta': 'Запишитесь на консультацию',
    
    // About Us
    'about.name': 'Рауф Наджафов',
    'about.title': 'Основатель и управляющий директор',
    'about.bio.p1': 'Мой путь прошёл из Азербайджана через Германию в Дубай, где я основал Fine Art Real Estate. С самого начала я понял, что настоящая ценность рождается из преданности делу, открытости и настойчивости.',
    'about.bio.p2': 'Работая инженером-разработчиком в Volkswagen и путешествуя по всему миру, я не только познакомился с различными культурами, но и открыл для себя страсть к рынку недвижимости. Точность, качество и надёжность - принципы, которыми я руководствуюсь в каждой сделке.',
    'about.bio.p3': 'В Fine Art Real Estate наша цель ясна: помогать нашим клиентам реализовывать их мечты о недвижимости в Дубае - будь то покупка, продажа или инвестиции. Прозрачность, доверие и персональное сопровождение для нас - это само собой разумеющееся.',
    'about.stats.experience': 'Лет опыта',
    'about.stats.clients': 'Довольных клиентов',
    'about.stats.transparency': 'Прозрачность',
    
    // Services
    'services.title': 'Полный спектр услуг в сфере недвижимости',
    'services.consultation.title': 'Бесплатная консультация',
    'services.consultation.desc': 'Поможем вам детально разобраться в особенностях рынка недвижимости ОАЭ и максимально эффективно использовать ваши вложения - будь то покупка для личного проживания или инвестиции.',
    'services.selection.title': 'Подбор недвижимости',
    'services.selection.desc': 'Подберем для вас оптимальный объект на первичном или вторичном рынке, учитывая ваш бюджет, цели и предпочтения.',
    'services.purchase.title': 'Покупка и продажа всех видов недвижимости',
    'services.purchase.desc': 'Оказывем профессиональные услуги по приобретению и реализации жилых и коммерческих объектов в Дубае.',
    'services.support.title': 'Комплексное сопровождение сделки',
    'services.support.desc': 'Полное сопровождение на каждом этапе: от подбора объекта до регистрации сделки. Возможна дистанционная покупка из любой точки мира - удобно, безопасно и прозрачно.',
    'services.legal.title': 'Юридическое сопровождение',
    'services.legal.desc': 'Гарантируюм защиту ваших интересов на всех стадиях сделки: подготовка договоров, проверка правового статуса недвижимости и обеспечение полной юридической безопасности.',
    'services.visa.title': 'Помощь в получении резидентских виз',
    'services.visa.desc': 'Сопровождаем вас в процессе оформления визы: от консультаций до подготовки документов, делая процедуру максимально простой и быстрой.',
    
    // Why Dubai
    'whyDubai.title': 'Узнайте, почему Дубай является идеальным местом для инвестиций в элитную недвижимость.',
    'whyDubai.cta': 'Готовы инвестировать в процветающий рынок недвижимости Дубая?',
    'whyDubai.installments.title': '0% рассрочка',
    'whyDubai.installments.desc': 'Беспроцентная рассрочка на весь срок строительства.',
    'whyDubai.tax.title': 'Налоговые преимущества',
    'whyDubai.tax.desc': 'Отсутствие подоходного налога и благоприятная среда для инвесторов делают Дубай особенно привлекательным для прироста капитала.',
    'whyDubai.market.title': 'Сильный рынок недвижимости',
    'whyDubai.market.desc': 'Высокая доходность до 12%, стабильный рост и высокий спрос на жилую и коммерческую недвижимость обеспечивают долгосрочные преимущества для инвесторов.',
    'whyDubai.location.title': 'Стратегическое расположение',
    'whyDubai.location.desc': 'Дубай соединяет Европу, Азию и Африку - глобальный центр торговли, путешествий и бизнеса.',
    'whyDubai.infrastructure.title': 'Современная инфраструктура',
    'whyDubai.infrastructure.desc': 'От мирового уровня аэропортов до инновационных решений «умного города» - Дубай предлагает одну из самых современных инфраструктур в мире.',
    'whyDubai.quality.title': 'Качество жизни',
    'whyDubai.quality.desc': 'Безопасный, мультикультурный и динамичный образ жизни с ресторанами мирового класса, пляжами, мероприятиями и возможностями для досуга.',
    'whyDubai.vision.title': 'Ориентация на будущее',
    'whyDubai.vision.desc': 'С «Dubai Vision 2040» правительство делает упор на устойчивое развитие, инновации и процветание - идеальные условия для инвесторов.',
    'whyDubai.stability.title': 'Политическая и экономическая стабильность',
    'whyDubai.stability.desc': 'ОАЭ предоставляют стабильную политическую и экономическую среду, что обеспечивает безопасность инвестиций.',
    
    // Partners
    'partners.title': 'Наши партнеры',
    
    // Properties
    'properties.title': 'Избранные объекты',
    
    // FAQ
    'faq.title': 'Вопросы и ответы',
    'faq.closing': 'Есть ли у вас ещё вопросы? Оставьте свои контакты, мы свяжусь с вами в ближайшее время, чтобы обсудить все вопросы и подобрать оптимальные решения для вас.',
    
    // Reviews
    'reviews.title': 'Отзывы клиентов',
    'reviews.stats.success': 'Успешных сделок',
    
    // Footer
    'footer.contact': 'Свяжитесь с нами',
    'footer.name': 'Имя',
    'footer.phone': 'Телефон / Email',
    'footer.submit': 'Получить консультацию',
    'footer.copyright': '© 2026 Fine Art Real Estate. Все права защищены.',
    'footer.email': 'Электронная почта',
    'footer.phoneLabel': 'Телефон',
    'footer.location': 'Местоположение',
    'footer.locationValue': 'Дубай, ОАЭ',
    
    // Legal
    'legal.privacy': 'Политика конфиденциальности',
    'legal.terms': 'Условия использования',
  },
  de: {
    // Navigation
    'nav.zoom': 'IHR PERSÖNLICHES GESPRÄCH',
    'nav.about': 'ÜBER UNS',
    'nav.services': 'LEISTUNGEN',
    'nav.whyDubai': 'WARUM DUBAI?',
    'nav.partners': 'PARTNER',
    'nav.properties': 'IMMOBILIEN',
    'nav.faq': 'FAQ',
    'nav.reviews': 'REZENSIONEN',
    
    // Hero Section
    'hero.title': 'Premium Immobilien in Dubai',
    'hero.subtitle': 'Erfahren Sie alles über Immobilieninvestitionen in Dubai',
    'hero.description': 'Wir bieten Ihnen eine vollständige Schritt-für-Schritt-Anleitung für Investitionen in Dubai – individuell auf Ihre persönlichen Ziele zugeschnitten.',
    'hero.coverage.title': 'In Ihrem exklusiven Gespräch besprechen wir alle wichtigen Aspekte:',
    'hero.coverage.visa': 'Visaverfahren und Aufenthaltsoptionen',
    'hero.coverage.escrow': 'Treuhandkonten (Escrow) und sichere Transaktionen',
    'hero.coverage.handover': 'Übergabeprozess der Immobilie',
    'hero.coverage.services': 'After-Sales-Services, einschließlich Mietmanagement',
    'hero.closing': 'Ganz gleich, ob Sie ein Erstanleger oder ein erfahrener Käufer sind – wir nehmen uns die Zeit, Ihre Ziele zu verstehen und zeigen Ihnen die intelligentesten, sichersten und profitabelsten Strategien für Investitionen in den Immobilienmarkt Dubais.',
    'hero.cta': 'Beratungsgespräch buchen',
    
    // About Us
    'about.name': 'Rauf Najafov',
    'about.title': 'Gründer und Geschäftsführer',
    'about.bio.p1': 'Meine Reise führte mich von Aserbaidschan über Deutschland nach Dubai, wo ich Fine Art Real Estate gegründet habe. Von Anfang an habe ich gelernt, dass echte Werte aus Hingabe, Offenheit und Durchhaltevermögen entstehen.',
    'about.bio.p2': 'Als Entwicklungsingenieur bei Volkswagen und durch meine Reisen rund um die Welt habe ich nicht nur verschiedene Kulturen kennengelernt, sondern auch meine Leidenschaft für den Immobilienmarkt entdeckt. Präzision, Qualität und Verlässlichkeit prägen jede meiner Transaktionen.',
    'about.bio.p3': 'Bei Fine Art Real Estate ist unser Ziel klar: unsere Kunden dabei zu unterstützen, ihre Immobilienwünsche in Dubai zu verwirklichen -sei es beim Kauf, Verkauf oder Investieren. Transparenz, Vertrauen und persönliche Begleitung sind für uns selbstverständlich.',
    'about.stats.experience': 'Jahre Erfahrung',
    'about.stats.clients': 'Zufriedene Kunden',
    'about.stats.transparency': 'Transparenz',
    
    // Services
    'services.title': 'Umfassende Immobilien-Dienstleistungen',
    'services.consultation.title': 'Kostenlose Beratung',
    'services.consultation.desc': 'Wir helfen Ihnen, den Immobilienmarkt der VAE im Detail zu verstehen und Ihr Investment maximal effizient zu gestalten - sei es für den Eigenbedarf oder als Kapitalanlage.',
    'services.selection.title': 'Immobilienauswahl',
    'services.selection.desc': 'Wir finden für Sie das passende Objekt auf dem Erst- oder Zweitmarkt, abgestimmt auf Ihr Budget, Ihre Ziele und individuellen Wünsche.',
    'services.purchase.title': 'Kauf und Verkauf aller Immobilienarten',
    'services.purchase.desc': 'Wir bieten professionelle Dienstleistungen beim Erwerb und Verkauf von Wohn- und Gewerbeimmobilien in Dubai und gewährleisten Transparenz und Zuverlässigkeit in jedem Schritt.',
    'services.support.title': 'Umfassende Transaktionsbegleitung',
    'services.support.desc': 'Wir begleiten Sie durch den gesamten Prozess: von der Objektauswahl bis zur Vertragsregistrierung. Auch ein Fernkauf von überall auf der Welt ist möglich - bequem, sicher und transparent.',
    'services.legal.title': 'Rechtliche Begleitung',
    'services.legal.desc': 'Wir garantieren den umfassenden Schutz Ihrer Interessen: Vertragserstellung, Überprüfung des Rechtsstatus der Immobilie und Sicherstellung vollständiger juristischer Sicherheit.',
    'services.visa.title': 'Unterstützung bei der Erlangung von Aufenthaltsvisa',
    'services.visa.desc': 'Wir begleiten Sie beim gesamten Visaprozess - von der Beratung bis zur Dokumentenvorbereitung - und machen das Verfahren so einfach und effizient wie möglich.',
    
    // Why Dubai
    'whyDubai.title': 'Entdecken Sie, warum Dubai das ultimative Ziel für Premium-Immobilieninvestitionen ist.',
    'whyDubai.cta': 'Sind Sie bereit, in den florierenden Immobilienmarkt Dubais zu investieren?',
    'whyDubai.installments.title': '0% Ratenzahlung',
    'whyDubai.installments.desc': 'Zinsfreie Ratenzahlung während der gesamten Bauphase.',
    'whyDubai.tax.title': 'Steuerfreiheit',
    'whyDubai.tax.desc': 'Keine Einkommensteuer und ein investorenfreundliches Umfeld machen Dubai besonders interessant für Kapitalanleger.',
    'whyDubai.market.title': 'Starker Immobilienmarkt',
    'whyDubai.market.desc': 'Hohe Renditen bis zu 12%, stetiges Wachstum und eine enorme Nachfrage nach Wohn- und Gewerbeimmobilien sichern Investoren langfristige Vorteile.',
    'whyDubai.location.title': 'Strategische Lage',
    'whyDubai.location.desc': 'Dubai verbindet Europa, Asien und Afrika - ein globaler Knotenpunkt für Handel, Reisen und Business.',
    'whyDubai.infrastructure.title': 'Moderne Infrastruktur',
    'whyDubai.infrastructure.desc': 'Von Weltklasse-Flughäfen bis zu innovativen Smart-City-Lösungen – Dubai bietet eine der modernsten Infrastrukturen der Welt.',
    'whyDubai.quality.title': 'Lebensqualität',
    'whyDubai.quality.desc': 'Ein sicherer, multikultureller und dynamischer Lifestyle mit erstklassigen Restaurants, Stränden, Events und Freizeitangeboten.',
    'whyDubai.vision.title': 'Zukunftsorientierte Vision',
    'whyDubai.vision.desc': 'Mit der „Dubai Vision 2040" setzt die Regierung auf nachhaltige Entwicklung, Innovation und Wohlstand - perfekte Voraussetzungen für Investoren.',
    'whyDubai.stability.title': 'Politische und wirtschaftliche Stabilität',
    'whyDubai.stability.desc': 'Die VAE bieten ein stabiles politisches und wirtschaftliches Umfeld, das Sicherheit für Investoren gewährleistet.',
    
    // Partners
    'partners.title': 'Unsere Partner',
    
    // Properties
    'properties.title': 'Ausgewählte Immobilien',
    
    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.closing': 'Haben Sie noch Fragen? Hinterlassen Sie Ihre Kontaktdaten, und wir werden uns in Kürze mit Ihnen in Verbindung setzen, um alle Fragen zu beantworten und die besten Lösungen für Sie zu finden.',
    
    // Reviews
    'reviews.title': 'Kundenbewertungen',
    'reviews.stats.success': 'Erfolgreiche Transaktionen',
    
    // Footer
    'footer.contact': 'Kontaktieren Sie uns',
    'footer.name': 'Name',
    'footer.phone': 'Telefon / E-Mail',
    'footer.submit': 'Beratung erhalten',
    'footer.copyright': '© 2026 Fine Art Real Estate. Alle Rechte vorbehalten.',
    'footer.email': 'E-Mail',
    'footer.phoneLabel': 'Telefon',
    'footer.location': 'Standort',
    'footer.locationValue': 'Dubai, VAE',
    
    // Legal
    'legal.privacy': 'Datenschutzrichtlinie',
    'legal.terms': 'Nutzungsbedingungen',
  },
};
