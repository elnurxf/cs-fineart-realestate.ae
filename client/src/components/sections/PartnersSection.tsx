import { useLanguage } from '@/contexts/LanguageContext';

export default function PartnersSection() {
  const { t, language } = useLanguage();

  // Partner logos with luxury styling
  const partners = [
    { name: 'Emaar Properties', initials: 'EM', color: 'from-primary to-primary/70' },
    { name: 'DAMAC Properties', initials: 'DA', color: 'from-primary/80 to-primary/50' },
    { name: 'Nakheel', initials: 'NK', color: 'from-primary/70 to-primary/40' },
    { name: 'Meraas', initials: 'MR', color: 'from-primary/60 to-primary/30' },
    { name: 'Dubai Properties', initials: 'DP', color: 'from-primary/50 to-primary/20' },
    { name: 'Sobha Realty', initials: 'SR', color: 'from-primary/40 to-primary/10' },
  ];

  return (
    <section id="partners" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {t('nav.partners')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('partners.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'ru'
                ? 'Мы сотрудничаем с ведущими застройщиками Дубая'
                : language === 'de'
                ? 'Wir arbeiten mit den führenden Entwicklern Dubais zusammen'
                : "We work with Dubai's leading developers"}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border min-h-[200px]"
              >
                {/* Logo Placeholder with Gradient */}
                <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <span className="text-2xl font-bold text-white">
                    {partner.initials}
                  </span>
                </div>

                {/* Partner Name */}
                <h3 className="text-lg font-bold text-foreground text-center">
                  {partner.name}
                </h3>

                {/* Accent Line */}
                <div className="mt-4 h-1 w-8 bg-primary rounded-full group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-6 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-lg text-foreground font-semibold">
                {language === 'ru'
                  ? 'Мы гордимся сотрудничеством с самыми престижными застройщиками Дубая'
                  : language === 'de'
                  ? 'Wir sind stolz auf die Zusammenarbeit mit den renommiertesten Entwicklern Dubais'
                  : 'We are proud to work with the most prestigious developers in Dubai'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
