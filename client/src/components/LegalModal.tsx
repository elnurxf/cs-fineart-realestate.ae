import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LegalModal({ type, open, onOpenChange }: LegalModalProps) {
  const { language } = useLanguage();

  const content = {
    privacy: {
      en: {
        title: 'Privacy Policy',
        sections: [
          {
            heading: '1. Introduction',
            text: 'Fine Art Real Estate ("we", "us", "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.',
          },
          {
            heading: '2. Information Collection and Use',
            text: 'We collect several different types of information for various purposes to provide and improve our Service to you.',
          },
          {
            heading: '3. Types of Data Collected',
            text: 'Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data.',
          },
          {
            heading: '4. Use of Data',
            text: 'Fine Art Real Estate uses the collected data for various purposes: To provide and maintain our Service, To notify you about changes to our Service, To allow you to participate in interactive features of our Service, To provide customer support, To gather analysis or valuable information so that we can improve our Service, To monitor the usage of our Service, To detect, prevent and address technical issues.',
          },
          {
            heading: '5. Security of Data',
            text: 'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.',
          },
          {
            heading: '6. Contact Us',
            text: 'If you have any questions about this Privacy Policy, please contact us at info@fineart-realestate.ae',
          },
        ],
      },
      ru: {
        title: 'Политика конфиденциальности',
        sections: [
          {
            heading: '1. Введение',
            text: 'Fine Art Real Estate ("мы", "нас", "наш") управляет веб-сайтом. Эта страница информирует вас о наших политиках в отношении сбора, использования и раскрытия личных данных при использовании вами нашего Сервиса.',
          },
          {
            heading: '2. Сбор и использование информации',
            text: 'Мы собираем различные типы информации в различных целях для предоставления и улучшения нашего Сервиса.',
          },
          {
            heading: '3. Типы собираемых данных',
            text: 'Личные данные: При использовании нашего Сервиса мы можем попросить вас предоставить нам определенную личную информацию, которая может быть использована для связи с вами или вашей идентификации ("Личные данные"). Это может включать: адрес электронной почты, имя и фамилию, номер телефона, адрес, регион, почтовый индекс, город, файлы cookie и данные об использовании.',
          },
          {
            heading: '4. Использование данных',
            text: 'Fine Art Real Estate использует собранные данные для различных целей: предоставления и поддержки нашего Сервиса, уведомления вас об изменениях нашего Сервиса, позволения вам участвовать в интерактивных функциях нашего Сервиса, предоставления поддержки клиентов, сбора анализа для улучшения нашего Сервиса.',
          },
          {
            heading: '5. Безопасность данных',
            text: 'Безопасность ваших данных важна для нас, но помните, что ни один метод передачи через Интернет не является 100% безопасным. Хотя мы стремимся использовать коммерчески приемлемые средства защиты ваших личных данных, мы не можем гарантировать их абсолютную безопасность.',
          },
          {
            heading: '6. Свяжитесь с нами',
            text: 'Если у вас есть вопросы об этой Политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу info@fineart-realestate.ae',
          },
        ],
      },
      de: {
        title: 'Datenschutzrichtlinie',
        sections: [
          {
            heading: '1. Einführung',
            text: 'Fine Art Real Estate ("wir", "uns", "unser") betreibt die Website. Diese Seite informiert Sie über unsere Richtlinien bezüglich der Erfassung, Verwendung und Offenlegung personenbezogener Daten bei der Nutzung unseres Dienstes.',
          },
          {
            heading: '2. Informationserfassung und -verwendung',
            text: 'Wir erfassen verschiedene Arten von Informationen für verschiedene Zwecke, um unseren Dienst bereitzustellen und zu verbessern.',
          },
          {
            heading: '3. Arten erfasster Daten',
            text: 'Personenbezogene Daten: Bei der Nutzung unseres Dienstes können wir Sie bitten, uns bestimmte persönlich identifizierbare Informationen zur Verfügung zu stellen ("Personenbezogene Daten"). Dies kann Folgendes umfassen: E-Mail-Adresse, Vor- und Nachname, Telefonnummer, Adresse, Bundesland, Postleitzahl, Stadt, Cookies und Nutzungsdaten.',
          },
          {
            heading: '4. Datennutzung',
            text: 'Fine Art Real Estate nutzt die erfassten Daten für verschiedene Zwecke: Bereitstellung und Wartung unseres Dienstes, Benachrichtigung über Änderungen an unserem Dienst, Ermöglichung der Teilnahme an interaktiven Funktionen, Kundensupport, Analyse zur Verbesserung unseres Dienstes.',
          },
          {
            heading: '5. Datensicherheit',
            text: 'Die Sicherheit Ihrer Daten ist uns wichtig, aber denken Sie daran, dass keine Übertragungsmethode über das Internet 100% sicher ist. Obwohl wir kommerziell akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten verwenden, können wir ihre absolute Sicherheit nicht garantieren.',
          },
          {
            heading: '6. Kontaktieren Sie uns',
            text: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter info@fineart-realestate.ae',
          },
        ],
      },
    },
    terms: {
      en: {
        title: 'Terms of Service',
        sections: [
          {
            heading: '1. Agreement to Terms',
            text: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
          },
          {
            heading: '2. Use License',
            text: 'Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials.',
          },
          {
            heading: '3. Disclaimer',
            text: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
          },
          {
            heading: '4. Limitations',
            text: 'In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.',
          },
          {
            heading: '5. Accuracy of Materials',
            text: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.',
          },
          {
            heading: '6. Contact Information',
            text: 'If you have any questions about these Terms of Service, please contact us at info@fineart-realestate.ae',
          },
        ],
      },
      ru: {
        title: 'Условия использования',
        sections: [
          {
            heading: '1. Согласие с условиями',
            text: 'Получая доступ к этому веб-сайту и используя его, вы принимаете и соглашаетесь соблюдать условия этого соглашения. Если вы не согласны соблюдать вышеуказанное, пожалуйста, не используйте этот сервис.',
          },
          {
            heading: '2. Лицензия на использование',
            text: 'Разрешается временно загружать одну копию материалов на нашем веб-сайте для личного, некоммерческого просмотра. Это предоставление лицензии, а не передача прав собственности. Под этой лицензией вы не можете: изменять или копировать материалы; использовать материалы в коммерческих целях; пытаться декомпилировать или реконструировать программное обеспечение; удалять авторские права или другие уведомления о правах собственности.',
          },
          {
            heading: '3. Отказ от ответственности',
            text: 'Материалы на нашем веб-сайте предоставляются в том виде, в котором они есть. Мы не даем никаких гарантий и отказываемся от всех других гарантий, включая подразумеваемые гарантии товарного состояния или пригодности для определенной цели.',
          },
          {
            heading: '4. Ограничения',
            text: 'Ни при каких обстоятельствах наша компания или ее поставщики не несут ответственности за убытки, возникшие в результате использования или невозможности использования материалов на нашем веб-сайте.',
          },
          {
            heading: '5. Точность материалов',
            text: 'Материалы на нашем веб-сайте могут содержать технические, типографические или фотографические ошибки. Мы не гарантируем точность, полноту или актуальность материалов. Мы можем вносить изменения в материалы на нашем веб-сайте в любое время без уведомления.',
          },
          {
            heading: '6. Контактная информация',
            text: 'Если у вас есть вопросы об этих Условиях использования, пожалуйста, свяжитесь с нами по адресу info@fineart-realestate.ae',
          },
        ],
      },
      de: {
        title: 'Nutzungsbedingungen',
        sections: [
          {
            heading: '1. Vereinbarung zu den Bedingungen',
            text: 'Durch den Zugriff auf und die Nutzung dieser Website akzeptieren Sie die Bedingungen dieser Vereinbarung. Wenn Sie diesen nicht zustimmen, verwenden Sie bitte diesen Dienst nicht.',
          },
          {
            heading: '2. Nutzungslizenz',
            text: 'Die Genehmigung wird erteilt, eine Kopie der Materialien auf unserer Website vorübergehend für den persönlichen, nicht kommerziellen Gebrauch herunterzuladen. Dies ist die Gewährung einer Lizenz, keine Eigentumsübertragung. Unter dieser Lizenz dürfen Sie nicht: Materialien ändern oder kopieren; Materialien für kommerzielle Zwecke verwenden; versuchen, Software zu dekompilieren oder umzukehren; Urheberrechte oder andere Eigentumshinweise entfernen.',
          },
          {
            heading: '3. Haftungsausschluss',
            text: 'Die Materialien auf unserer Website werden "wie besehen" bereitgestellt. Wir geben keine Garantien und lehnen alle anderen Garantien ab, einschließlich der Gewährleistung der Marktgängigkeit oder der Eignung für einen bestimmten Zweck.',
          },
          {
            heading: '4. Beschränkungen',
            text: 'Unter keinen Umständen haften unser Unternehmen oder seine Lieferanten für Schäden, die sich aus der Nutzung oder Unmöglichkeit der Nutzung der Materialien auf unserer Website ergeben.',
          },
          {
            heading: '5. Genauigkeit der Materialien',
            text: 'Die Materialien auf unserer Website können technische, typografische oder fotografische Fehler enthalten. Wir garantieren nicht die Genauigkeit, Vollständigkeit oder Aktualität der Materialien. Wir können jederzeit Änderungen an den Materialien vornehmen.',
          },
          {
            heading: '6. Kontaktinformation',
            text: 'Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter info@fineart-realestate.ae',
          },
        ],
      },
    },
  };

  const legalContent = content[type][language] || content[type].en;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8 sm:py-12">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[999]"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal Content */}
      <div className="relative z-[1000] bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">{legalContent.title}</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {legalContent.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-2">{section.heading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4">
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full bg-primary hover:bg-primary/90"
          >
            {language === 'ru' ? 'Закрыть' : language === 'de' ? 'Schließen' : 'Close'}
          </Button>
        </div>
      </div>
    </div>
  );
}
