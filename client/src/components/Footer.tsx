import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin } from 'lucide-react';
import { APP_LOGO } from '@/const';
import { useState } from 'react';
import { toast } from 'sonner';
import BookingModal from './BookingModal';
import LegalModal from './LegalModal';

export default function Footer() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const contactValue = formData.contact.trim();
    const isEmail = contactValue.includes('@');

    const payload = {
      name: formData.name.trim(),
      email: isEmail ? contactValue : 'no-reply@fineart-realestate.ae',
      phone: isEmail ? 'Not provided' : contactValue,
      preferredDate: new Date().toISOString(),
      message: `Footer contact request. Provided contact: ${contactValue}`,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      toast.success(
        language === 'ru'
          ? 'Спасибо! Мы свяжемся с вами в ближайшее время.'
          : language === 'de'
          ? 'Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.'
          : 'Thank you! We will contact you shortly.'
      );
      setFormData({ name: '', contact: '' });
    } catch (error) {
      console.error('Footer contact form submission failed', error);
      toast.error(
        language === 'ru'
          ? 'Не удалось отправить запрос. Попробуйте позже.'
          : language === 'de'
          ? 'Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen.'
          : 'We could not send your request. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/*<img src={APP_LOGO} alt="Fine Art Real Estate" className="h-12 mb-4" />*/}
              <h3 className="text-xl font-bold mb-4">Fine Art Real Estate</h3>
              <p className="text-background/70 mb-4">
                {language === 'ru' 
                  ? 'Ваш надёжный партнёр в мире недвижимости Дубая'
                  : language === 'de'
                  ? 'Ihr zuverlässiger Partner in der Welt der Immobilien in Dubai'
                  : 'Your trusted partner in Dubai real estate'}
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://wa.me/971589559060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </a>
                <a
                  href="mailto:info@fineart-realestate.ae"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                {language === 'ru' ? 'Контакты' : language === 'de' ? 'Kontaktinformation' : 'Contact Info'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-background/70 text-sm">Email</p>
                    <a href="mailto:info@fineart-realestate.ae" className="text-background/90 hover:text-primary transition-colors">
                      info@fineart-realestate.ae
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-background/70 text-sm">Phone</p>
                    <a href="tel:+971589559060" className="text-background/90 hover:text-primary transition-colors">
                      +971 58 955 9060
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-background/70 text-sm">Location</p>
                    <p className="text-background/90">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                {language === 'ru' ? 'Быстрые ссылки' : language === 'de' ? 'Schnelllinks' : 'Quick Links'}
              </h4>
              <ul className="space-y-2">
                {['about', 'services', 'why-dubai', 'properties', 'faq'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(section);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-background/90 hover:text-primary transition-colors"
                    >
                      {t(`nav.${section === 'why-dubai' ? 'whyDubai' : section}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="text-lg font-bold mb-4">
                {language === 'ru' ? 'Связаться' : language === 'de' ? 'Kontakt' : 'Get in Touch'}
              </h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="text"
                  placeholder={t('footer.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Input
                  type="text"
                  placeholder={t('footer.phone')}
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {t('footer.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button 
                onClick={() => setPrivacyModalOpen(true)}
                className="text-background/70 hover:text-primary transition-colors"
              >
                {t('legal.privacy')}
              </button>
              <button 
                onClick={() => setTermsModalOpen(true)}
                className="text-background/70 hover:text-primary transition-colors"
              >
                {t('legal.terms')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
      <LegalModal type="privacy" open={privacyModalOpen} onOpenChange={setPrivacyModalOpen} />
      <LegalModal type="terms" open={termsModalOpen} onOpenChange={setTermsModalOpen} />
    </footer>
  );
}
