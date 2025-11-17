import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import BookingModal from '../BookingModal';

export default function PropertiesSection() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const { t, language } = useLanguage();

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      title: 'Luxury Apartment in Downtown Dubai',
      location: 'Downtown Dubai',
      price: 'AED 2,500,000',
      beds: 2,
      baths: 2,
      sqft: '1,200',
      type: 'Off-Plan',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      title: 'Modern Villa in Dubai Hills',
      location: 'Dubai Hills Estate',
      price: 'AED 5,800,000',
      beds: 4,
      baths: 5,
      sqft: '3,500',
      type: 'Secondary',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      title: 'Penthouse in Dubai Marina',
      location: 'Dubai Marina',
      price: 'AED 8,200,000',
      beds: 3,
      baths: 4,
      sqft: '2,800',
      type: 'Off-Plan',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      title: 'Townhouse in Arabian Ranches',
      location: 'Arabian Ranches',
      price: 'AED 3,200,000',
      beds: 3,
      baths: 3,
      sqft: '2,100',
      type: 'Secondary',
    },
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                {t('nav.properties')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('properties.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'ru' 
                ? 'Эксклюзивная подборка недвижимости в Дубае'
                : language === 'de'
                ? 'Exklusive Immobilienauswahl in Dubai'
                : 'Exclusive selection of properties in Dubai'}
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {property.title}
                  </h3>

                  {/* Features */}
                  <div className="flex items-center space-x-4 mb-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-sm">{property.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-sm">{property.sqft} sq ft</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ru' ? 'Цена' : language === 'de' ? 'Preis' : 'Price'}
                      </p>
                      <p className="text-2xl font-bold text-primary">{property.price}</p>
                    </div>
                    <button onClick={() => setBookingModalOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300">
                      {language === 'ru' ? 'Забронировать звонок' : language === 'de' ? 'Anruf reservieren' : 'Reserve a Call'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </section>
  );
}
