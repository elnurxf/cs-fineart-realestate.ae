import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bookingContent = {
    en: {
      title: 'Reserve Your Call',
      description: 'Book a personal consultation with our real estate experts',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      date: 'Preferred Date & Time',
      message: 'Message (Optional)',
      submit: 'Reserve Call',
      success: 'Thank you! We will contact you shortly.',
    },
    ru: {
      title: 'Забронировать звонок',
      description: 'Запишитесь на личную консультацию с нашими экспертами',
      name: 'Полное имя',
      email: 'Email адрес',
      phone: 'Номер телефона',
      date: 'Предпочитаемая дата и время',
      message: 'Сообщение (Опционально)',
      submit: 'Забронировать звонок',
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    },
    de: {
      title: 'Anruf reservieren',
      description: 'Buchen Sie eine persönliche Beratung mit unseren Immobilienexperten',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      date: 'Bevorzugtes Datum und Uhrzeit',
      message: 'Nachricht (Optional)',
      submit: 'Anruf reservieren',
      success: 'Danke! Wir werden uns bald mit Ihnen in Verbindung setzen.',
    },
  };

  const content = bookingContent[language] || bookingContent.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would send the data to your backend
      console.log('Booking data:', formData);

      // Show success message and close
      alert(content.success);
      setFormData({ name: '', email: '', phone: '', preferredDate: '', message: '' });
      onOpenChange(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal Content */}
      <div className="relative z-[9999] bg-background rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">{content.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{content.description}</p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {content.name}
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {content.email}
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {content.phone}
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+971 50 123 4567"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {content.date}
            </label>
            <Input
              type="datetime-local"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {content.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your property needs..."
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              {language === 'ru' ? 'Отмена' : language === 'de' ? 'Abbrechen' : 'Cancel'}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  {language === 'ru' ? 'Отправка...' : language === 'de' ? 'Wird gesendet...' : 'Booking...'}
                </>
              ) : (
                content.submit
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
