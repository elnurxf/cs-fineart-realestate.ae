import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { APP_LOGO } from '@/const';
import BookingModal from './BookingModal';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: t('nav.aboutShort') },
    { id: 'services', label: t('nav.services') },
    { id: 'why-dubai', label: t('nav.whyDubai') },
    { id: 'partners', label: t('nav.partners') },
    { id: 'properties', label: t('nav.properties') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'reviews', label: t('nav.reviews') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/80'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/fa-logo.svg" alt="Fine Art Real Estate" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 whitespace-nowrap overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mx-2 my-2 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-foreground/90 hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side - Language & Contact */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className={`flex items-center space-x-1 rounded-md p-1 transition-colors ${
              isScrolled ? 'bg-secondary/50' : 'bg-white/20'
            }`}>
              {(['en', 'ru', 'de'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                    language === lang
                      ? 'bg-primary text-primary-foreground'
                      : isScrolled ? 'text-foreground hover:bg-secondary' : 'text-foreground/90 hover:text-foreground'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Contact Button & Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                onClick={() => setBookingModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
              >
                {t('footer.contact')}
              </Button>
              <a
                href="tel:+971589559060"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'bg-primary/10 hover:bg-primary/20' : 'bg-white/20 hover:bg-white/30'
                }`}
                aria-label="Phone"
              >
                <Phone className={`h-4 w-4 ${isScrolled ? 'text-primary' : 'text-foreground'}`} />
              </a>
              <a
                href="mailto:info@fineart-realestate.ae"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'bg-primary/10 hover:bg-primary/20' : 'bg-white/20 hover:bg-white/30'
                }`}
                aria-label="Email"
              >
                <Mail className={`h-4 w-4 ${isScrolled ? 'text-primary' : 'text-foreground'}`} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'hover:bg-secondary' : 'hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 bg-white/95">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-left text-sm font-medium text-foreground/90 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </header>
  );
}
