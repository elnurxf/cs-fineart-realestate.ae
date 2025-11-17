import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  onOpenBookingModal?: () => void;
}

export default function FAQSection({ onOpenBookingModal }: FAQSectionProps) {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = {
    en: [
      {
        question: 'Is it possible to purchase remotely?',
        answer: 'Yes, it is fully possible. You can purchase real estate in Dubai from anywhere in the world. We will organize an online meeting with developer representatives via Zoom or another convenient platform. You will be able to choose a suitable property, book an apartment, and sign all documents electronically. The original purchase agreement will be sent to you by mail.',
      },
      {
        question: 'What is the broker commission?',
        answer: 'Off-plan projects: The broker commission is paid by the developer. Secondary real estate: The standard agent commission is 2% of the property value.',
      },
      {
        question: 'What documents are required?',
        answer: '1. Passport - copy of all pages with personal data. 2. Visa or proof of residency status - if available. 3. Proof of source of funds - bank statements or certificates (AML/KYC). 4. Electronic signature - for secure online document signing. 5. Power of attorney - provided if document processing is carried out by a representative on your behalf. The developer may request additional documents in individual cases.',
      },
      {
        question: 'What is the return on investment?',
        answer: 'Dubai remains one of the most sought-after destinations for investors. Stable rental demand ensures high returns: last year, apartments and townhouses showed returns of 7.11% and 6.38% respectively. Capital appreciation in the Dubai real estate market is around 30%, making it particularly attractive for long-term investments.',
      },
      {
        question: 'Residency and Golden Visa',
        answer: 'Investor visa (3 years): when purchasing real estate worth from 750,000 AED (≈$240,000). Golden Visa (10 years): when purchasing real estate from 2,000,000 AED (≈$544,000).',
      },
      {
        question: 'Can I purchase property with a mortgage?',
        answer: 'Yes, purchasing property with a mortgage in Dubai is fully possible. The average interest rate is about 4.5%, and the minimum down payment is 30%. Our team is ready to support you at every stage: from choosing a suitable apartment to processing all necessary documents, ensuring transparency and legal security of the transaction.',
      },
      {
        question: 'Step-by-step transaction process',
        answer: 'First, determine your budget taking into account all additional costs. Then the broker will help you choose the appropriate type of property and optimal area. After that, property viewings are organized, and the transaction is processed with full legal support.',
      },
      {
        question: 'Do I need agency services to invest in UAE real estate?',
        answer: 'Working with a real estate agency significantly simplifies the purchase process and brings many advantages: Market expertise - profitable and diverse offers. Legal support - transactions proceed without complications. Time savings - we take care of all organizational and bureaucratic processes. Negotiations - we achieve optimal conditions with developers and sellers. After-sales support - support after the transaction is completed.',
      },
      {
        question: 'Full support',
        answer: 'We ensure maximum comfort, security and efficiency of investments, supporting you at every stage: from property selection to receiving keys and visa processing.',
      },
      {
        question: 'Taxes and fees when purchasing real estate',
        answer: 'The only mandatory tax when purchasing real estate is the registration fee at the Dubai Land Department (DLD). It is 4% of the transaction amount and is paid once upon property registration. This fee ensures official property registration and protection of your rights as an investor.',
      },
    ],
    ru: [
      {
        question: 'Возможность покупки дистанционно',
        answer: 'Да, это полностью возможно. Вы можете приобрести недвижимость в Дубае, находясь в любой точке мира. Мы организуем для вас онлайн-встречу с представителями застройщика через Zoom или другую удобную платформу. Вы сможете выбрать подходящий объект, забронировать квартиру и подписать все документы в электронном виде. Оригинал договора купли-продажи будет отправлен вам по почте.',
      },
      {
        question: 'Какова комиссия за работу брокера',
        answer: 'Off-plan проекты: комиссия брокеру оплачивается застройщиком. Вторичная недвижимость: стандартная комиссия агента составляет 2% от стоимости объекта.',
      },
      {
        question: 'Необходимые документы',
        answer: '1. Паспорт - копия всех страниц с личными данными. 2. Виза или подтверждение резидентского статуса - если есть. 3. Подтверждение источника средств - банковские выписки или справки (AML/KYC). 4. Электронная подпись - для безопасного онлайн-подписания документов. 5. Доверенность – предоставляется в случае, если оформление документов осуществляется представителем от вашего имени. Застройщик может запросить дополнительные документы в отдельных случаях.',
      },
      {
        question: 'Доходность инвестиций',
        answer: 'Дубай остаётся одним из самых востребованных направлений для инвесторов. Стабильный спрос на аренду обеспечивает высокую доходность: за последний год квартиры и таунхаусы показали доходность 7,11 % и 6,38 % соответственно. Прирост капитала на рынке недвижимости Дубая составляет порядка 30 %, что делает его особенно привлекательным для долгосрочных инвестиций.',
      },
      {
        question: 'Резидентская и Золотая виза',
        answer: 'Инвесторская виза (3 года): при покупке недвижимости стоимостью от 750,000 AED (≈240,000 USD). «Золотая виза» (10 лет): при покупке недвижимости от 2,000,000 AED (≈544,000 USD).',
      },
      {
        question: 'Могу ли я приобрести недвижимость в ипотеку?',
        answer: 'Да, покупка недвижимости в ипотеку в Дубае полностью возможна. Средняя процентная ставка составляет около 4,5 %, а минимальный первоначальный взнос - 30 %. Наша команда готова сопровождать вас на каждом этапе: от выбора подходящей квартиры до оформления всех необходимых документов, обеспечивая прозрачность и юридическую безопасность сделки.',
      },
      {
        question: 'Пошаговое оформление сделки',
        answer: 'Сначала определите бюджет с учётом всех дополнительных расходов. Далее брокер поможет подобрать подходящий тип недвижимости и оптимальный район. После этого организуются просмотры объектов, и происходит оформление сделки с полным юридическим сопровождением.',
      },
      {
        question: 'Я хочу инвестировать в недвижимость в ОАЭ, нужны ли мне услуги агентства?',
        answer: 'Обращение к агентству недвижимости значительно упрощает процесс покупки и приносит множество преимуществ: Экспертиза рынка - выгодные и разнообразные предложения. Юридическая поддержка - сделки проходят без осложнений. Экономия времени - все организационные и бюрократические процессы берём на себя. Переговоры - добиваемся оптимальных условий с застройщиками и продавцами. Послепродажное сопровождение - поддержка после завершения сделки.',
      },
      {
        question: 'Полное сопровождение',
        answer: 'Мы обеспечиваем максимальный комфорт, безопасность и эффективность инвестиций, сопровождая вас на каждом этапе: от выбора объекта до получения ключей и оформления визы.',
      },
      {
        question: 'Налоги и сборы при покупке недвижимости',
        answer: 'Единственный обязательный налог при покупке недвижимости - это регистрационный сбор в Dubai Land Department (DLD). Он составляет 4 % от суммы сделки и оплачивается единовременно при регистрации объекта. Этот сбор обеспечивает официальную регистрацию собственности и защиту ваших прав как инвестора.',
      },
    ],
    de: [
      {
        question: 'Ist ein Kauf aus der Ferne möglich?',
        answer: 'Ja, das ist vollständig möglich. Sie können Immobilien in Dubai erwerben, egal wo auf der Welt Sie sich befinden. Wir organisieren für Sie ein Online-Meeting mit Vertretern des Bauträgers über Zoom oder eine andere geeignete Plattform. Sie können das passende Objekt auswählen, die Wohnung reservieren und alle Dokumente elektronisch unterzeichnen. Das Original des Kaufvertrags wird Ihnen per Post zugesandt.',
      },
      {
        question: 'Wie hoch ist die Maklerprovision?',
        answer: 'Off-Plan-Projekte: Die Provision wird vom Bauträger übernommen. Bestandsimmobilien: Die Standardprovision beträgt 2 % des Kaufpreises.',
      },
      {
        question: 'Erforderliche Dokumente',
        answer: '1. Pass - Kopie aller Seiten mit persönlichen Daten. 2. Visum oder Nachweis des Aufenthaltsstatus - falls vorhanden. 3. Nachweis der Mittelherkunft - Kontoauszüge oder Bescheinigungen (AML/KYC). 4. Elektronische Signatur - für die sichere Online-Unterzeichnung von Dokumenten. 5. Vollmacht - falls ein Vertreter die Dokumente in Ihrem Namen abwickelt. In Einzelfällen kann der Bauträger zusätzliche Dokumente anfordern.',
      },
      {
        question: 'Rendite der Investition',
        answer: 'Dubai bleibt eines der gefragtesten Ziele für Investoren. Die stabile Mietnachfrage sorgt für hohe Renditen: Im letzten Jahr erzielten Wohnungen und Townhouses eine Rendite von 7,11 % bzw. 6,38 %. Die Wertsteigerung auf dem Immobilienmarkt Dubais beträgt rund 30 %, was langfristige Investitionen besonders attraktiv macht.',
      },
      {
        question: 'Aufenthalts- und „Golden Visa"',
        answer: 'Investor-Visum (3 Jahre): ab einem Immobilienkaufwert von 750.000 AED (≈240.000 USD). „Golden Visa" (10 Jahre): ab einem Immobilienkaufwert von 2.000.000 AED (≈544.000 USD).',
      },
      {
        question: 'Kann ich eine Immobilie mit Hypothek kaufen?',
        answer: 'Ja, ein Immobilienkauf mit Hypothek in Dubai ist vollständig möglich. Der durchschnittliche Zinssatz beträgt etwa 4,5 %, und die Mindestanzahlung liegt bei 30 %. Unser Team begleitet Sie bei jedem Schritt: von der Auswahl der Wohnung bis zur vollständigen Dokumentation, um Transparenz und rechtliche Sicherheit zu gewährleisten.',
      },
      {
        question: 'Schrittweise Abwicklung der Transaktion',
        answer: 'Zuerst legen Sie Ihr Budget unter Berücksichtigung aller Nebenkosten fest. Dann hilft Ihnen der Makler, den passenden Immobilientyp und das optimale Gebiet auszuwählen. Anschließend erfolgen Besichtigungen, gefolgt von der Vertragsabwicklung mit vollständiger juristischer Begleitung.',
      },
      {
        question: 'Brauche ich die Dienste einer Agentur?',
        answer: 'Die Zusammenarbeit mit einem Immobilienbüro vereinfacht den Kaufprozess erheblich und bietet zahlreiche Vorteile: Marktexpertise - profitable und vielfältige Angebote. Juristische Unterstützung - reibungslose Abwicklung der Transaktionen. Zeitersparnis - alle organisatorischen und bürokratischen Aufgaben werden übernommen. Verhandlungen - optimale Konditionen mit Bauträgern und Verkäufern. After-Sales-Service - Unterstützung auch nach Abschluss der Transaktion.',
      },
      {
        question: 'Vollständige Begleitung',
        answer: 'Wir gewährleisten maximalen Komfort, Sicherheit und Effizienz Ihrer Investitionen und begleiten Sie bei jedem Schritt: von der Objektauswahl bis zur Schlüsselübergabe und Visumsabwicklung.',
      },
      {
        question: 'Steuern und Gebühren beim Immobilienkauf',
        answer: 'Die einzige obligatorische Steuer beim Immobilienkauf ist die Registrierungsgebühr beim Dubai Land Department (DLD). Sie beträgt 4 % des Kaufpreises und wird einmalig bei der Registrierung fällig. Diese Gebühr stellt die offizielle Eigentumsregistrierung sicher und schützt Ihre Rechte als Investor.',
      },
    ],
  };

  const faqs = faqData[language] || faqData.en;

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {language === 'ru' ? 'Вопросы и ответы' : language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-primary/10 rounded-2xl p-8">
            <p className="text-lg text-foreground mb-4">
              {language === 'ru' 
                ? 'Есть ли у вас ещё вопросы? Оставьте свои контакты, мы свяжусь с вами в ближайшее время.'
                : language === 'de'
                ? 'Haben Sie noch Fragen? Hinterlassen Sie Ihre Kontaktdaten.'
                : 'Have more questions? Leave your contact details and we will get in touch with you shortly.'}
            </p>
            <button 
              onClick={onOpenBookingModal}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              {language === 'ru' ? 'Связаться с нами' : language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
