import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const { t, language } = useLanguage();

  const reviews = [
    {
      name: 'Alexander Schmidt',
      country: 'Germany',
      rating: 5,
      text: {
        en: 'Working with Fine Art Real Estate was an exceptional experience. Rauf guided us through every step of purchasing our apartment in Downtown Dubai. His professionalism and attention to detail made the entire process smooth and transparent.',
        ru: 'Работа с Fine Art Real Estate была исключительным опытом. Рауф провёл нас через каждый этап покупки нашей квартиры в Downtown Dubai. Его профессионализм и внимание к деталям сделали весь процесс гладким и прозрачным.',
        de: 'Die Zusammenarbeit mit Fine Art Real Estate war eine außergewöhnliche Erfahrung. Rauf hat uns durch jeden Schritt beim Kauf unserer Wohnung in Downtown Dubai begleitet. Seine Professionalität und Liebe zum Detail machten den gesamten Prozess reibungslos und transparent.',
      },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Elena Petrova',
      country: 'Russia',
      rating: 5,
      text: {
        en: 'I invested in Dubai real estate from Moscow, and Rauf made everything incredibly easy. The remote purchase process was seamless, and I received excellent ROI within the first year. Highly recommend!',
        ru: 'Я инвестировала в недвижимость Дубая из Москвы, и Рауф сделал всё невероятно легко. Процесс дистанционной покупки прошёл без проблем, и я получила отличную доходность в первый же год. Очень рекомендую!',
        de: 'Ich habe von Moskau aus in Immobilien in Dubai investiert, und Rauf hat alles unglaublich einfach gemacht. Der Fernkaufprozess verlief reibungslos, und ich erhielt im ersten Jahr eine hervorragende Rendite. Sehr zu empfehlen!',
      },
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Michael Weber',
      country: 'Austria',
      rating: 5,
      text: {
        en: 'As a first-time investor in Dubai, I was nervous about the process. Rauf provided comprehensive guidance, from property selection to visa assistance. His engineering background really shows in his precise and methodical approach.',
        ru: 'Как начинающий инвестор в Дубае, я нервничал по поводу процесса. Рауф предоставил всестороннее руководство, от выбора недвижимости до помощи с визой. Его инженерное образование действительно проявляется в его точном и методичном подходе.',
        de: 'Als Erstinvestor in Dubai war ich nervös wegen des Prozesses. Rauf bot umfassende Beratung, von der Immobilienauswahl bis zur Visa-Unterstützung. Sein ingenieurtechnischer Hintergrund zeigt sich wirklich in seinem präzisen und methodischen Ansatz.',
      },
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {t('nav.reviews')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'ru' 
                ? 'Что говорят наши клиенты'
                : language === 'de'
                ? 'Was unsere Kunden sagen'
                : 'What our clients say'}
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-16 w-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{review.text[language] || review.text.en}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-background rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ru' ? 'Довольных клиентов' : language === 'de' ? 'Zufriedene Kunden' : 'Happy Clients'}
              </div>
            </div>
            <div className="p-6 bg-background rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ru' ? 'Лет опыта' : language === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}
              </div>
            </div>
            <div className="p-6 bg-background rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'ru' ? 'Успешных сделок' : language === 'de' ? 'Erfolgreiche Transaktionen' : 'Successful Deals'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
