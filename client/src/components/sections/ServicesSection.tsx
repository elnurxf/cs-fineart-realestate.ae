import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Search, Home, FileCheck, Scale, Plane } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: MessageSquare,
      title: t('services.consultation.title'),
      description: t('services.consultation.desc'),
    },
    {
      icon: Search,
      title: t('services.selection.title'),
      description: t('services.selection.desc'),
    },
    {
      icon: Home,
      title: t('services.purchase.title'),
      description: t('services.purchase.desc'),
    },
    {
      icon: FileCheck,
      title: t('services.support.title'),
      description: t('services.support.desc'),
    },
    {
      icon: Scale,
      title: t('services.legal.title'),
      description: t('services.legal.desc'),
    },
    {
      icon: Plane,
      title: t('services.visa.title'),
      description: t('services.visa.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {t('nav.services')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
