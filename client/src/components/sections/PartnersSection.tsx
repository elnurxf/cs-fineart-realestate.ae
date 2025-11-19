import { useLanguage } from '@/contexts/LanguageContext';

export default function PartnersSection() {
  const { language } = useLanguage();

  const partners = [
    { name: 'Emaar', logo: '/emaar-logo.jpg' },
    { name: 'DAMAC', logo: '/damac-logo.webp' },
    { name: 'Nakheel', logo: '/nakheel-logo.jpg' },
    { name: 'Azizi', logo: '/azizi-logo.jpg' },
    { name: 'Binghatti', logo: '/binghatti.png' },
    { name: 'Sobha', logo: '/sobha-logo.jpg' },
    { name: 'Samana', logo: '/samana.jpg' },
    { name: 'Ellington', logo: '/ellington.jpg' },
    { name: 'Dubai Properties', logo: '/dubai-properties.png' },
    { name: 'Imtiaz', logo: '/imtiaz.jpg' },
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {language === 'ru' ? 'Наши партнеры' : language === 'de' ? 'Unsere Partner' : 'Our Partners'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {language === 'ru' ? 'Ведущие застройщики Дубая' : language === 'de' ? 'Führende Entwickler in Dubai' : 'Leading Dubai Developers'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ru'
                ? 'Мы сотрудничаем с лучшими застройщиками, чтобы предоставить вам доступ к премиальным проектам'
                : language === 'de'
                ? 'Wir arbeiten mit den besten Entwicklern zusammen, um Ihnen Zugang zu Premium-Projekten zu bieten'
                : 'We partner with the best developers to provide you access to premium projects'}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl p-6 flex items-center justify-center min-h-[150px] border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Logo */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              {language === 'ru'
                ? 'Мы постоянно расширяем сеть партнеров, чтобы предложить вам лучшие возможности инвестирования'
                : language === 'de'
                ? 'Wir erweitern ständig unser Partnernetzwerk, um Ihnen die besten Investitionsmöglichkeiten zu bieten'
                : 'We continuously expand our partner network to offer you the best investment opportunities'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
