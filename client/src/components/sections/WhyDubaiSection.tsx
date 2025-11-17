import { useState } from 'react';
import { Percent, TrendingUp, MapPin, Building2, Award, Palmtree, Rocket, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import BookingModal from '@/components/BookingModal';

export default function WhyDubaiSection() {
  const { t } = useLanguage();
  const [showBooking, setShowBooking] = useState(false);

  const benefits = [
    {
      icon: Percent,
      number: '0%',
      title: t('whyDubai.installments.title'),
      description: t('whyDubai.installments.desc'),
    },
    {
      icon: TrendingUp,
      number: '12%',
      title: t('whyDubai.market.title'),
      description: t('whyDubai.market.desc'),
    },
    {
      icon: Award,
      number: '0%',
      title: t('whyDubai.tax.title'),
      description: t('whyDubai.tax.desc'),
    },
    {
      icon: MapPin,
      number: '#1',
      title: t('whyDubai.location.title'),
      description: t('whyDubai.location.desc'),
    },
    {
      icon: Building2,
      number: '5★',
      title: t('whyDubai.infrastructure.title'),
      description: t('whyDubai.infrastructure.desc'),
    },
    {
      icon: Palmtree,
      number: '100%',
      title: t('whyDubai.quality.title'),
      description: t('whyDubai.quality.desc'),
    },
    {
      icon: Rocket,
      number: '2040',
      title: t('whyDubai.vision.title'),
      description: t('whyDubai.vision.desc'),
    },
    {
      icon: Shield,
      number: '#2',
      title: t('whyDubai.stability.title'),
      description: t('whyDubai.stability.desc'),
    },
  ];

  return (
    <section id="why-dubai" className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {t('nav.whyDubai')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('whyDubai.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why Dubai is the perfect destination for your real estate investment
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-background rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary"
                >
                  {/* Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {benefit.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-primary/10 rounded-2xl p-8 max-w-2xl">
              <p className="text-lg text-foreground mb-4">
                {t('whyDubai.cta')}
              </p>
              <button onClick={() => setShowBooking(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal open={showBooking} onOpenChange={setShowBooking} />
    </section>
  );
}
