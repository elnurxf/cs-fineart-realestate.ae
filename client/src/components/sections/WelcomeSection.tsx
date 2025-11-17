import { useLanguage } from '@/contexts/LanguageContext';

export default function WelcomeSection() {
  const { language } = useLanguage();

  const welcomeContent = {
    en: {
      title: 'Welcome to Fine Art Real Estate',
      description: 'At Fine Art Real Estate, we make your property dreams in Dubai a reality. Our multilingual agency provides personalized guidance at every stage, ensuring a seamless, stress-free experience.\n\nWe specialize in exclusive off-plan and ready-to-move-in properties directly from developers, giving you access to premium opportunities, transparent advice, and maximum investment security.\n\nWith Fine Art Real Estate, your Dubai property journey is simple, efficient, and tailored to your goals.',
    },
    ru: {
      title: 'Добро пожаловать в Fine Art Real Estate',
      description: 'В Fine Art Real Estate мы превращаем ваши мечты о недвижимости в Дубае в реальность. Наше многоязычное агентство предоставляет персонализированное сопровождение на каждом этапе, обеспечивая плавный и безстрессовый процесс.\n\nМы специализируемся на эксклюзивных объектах на стадии строительства (off-plan) и готовых к заселению недвижимости напрямую от застройщиков, предоставляя вам доступ к премиальным возможностям, прозрачной консультации и максимальной безопасности инвестиций.\n\nС Fine Art Real Estate ваша недвижимость в Дубае становится простым, эффективным и полностью соответствующим вашим целям процессом.',
    },
    de: {
      title: 'Willkommen bei Fine Art Real Estate',
      description: 'Bei Fine Art Real Estate machen wir Ihre Immobilienträume in Dubai wahr. Unsere mehrsprachige Agentur bietet persönliche Beratung in jeder Phase und sorgt für ein nahtloses, stressfreies Erlebnis.\n\nWir spezialisieren uns auf exklusive Off-Plan- und bezugsfertige Immobilien direkt von Bauträgern, sodass Sie Zugang zu erstklassigen Möglichkeiten, transparenter Beratung und maximaler Investitionssicherheit erhalten.\n\nMit Fine Art Real Estate wird Ihre Immobilienreise in Dubai einfach, effizient und genau auf Ihre Ziele zugeschnitten.',
    },
  };

  const content = welcomeContent[language] || welcomeContent.en;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {content.title}
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {content.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <div className="h-2 w-2 bg-primary rounded-full" />
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
