import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/rauf-najafov.jpg"
                  alt={t('about.name')}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                  {t('nav.about')}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('about.name')}
              </h2>
              <p className="text-xl text-primary font-semibold mb-6">
                {t('about.title')}
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.bio.p1')}</p>
                <p>{t('about.bio.p2')}</p>
                <p>{t('about.bio.p3')}</p>
              </div>

              {/* Key Values */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.experience')}</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.clients')}</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.transparency')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
