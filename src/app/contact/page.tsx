import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with All is Well Entertainment to discuss your next video production project.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-red font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Let&apos;s start your next{' '}
              <span className="text-brand-red">project</span>.
            </h1>
            <p className="text-xl text-brand-silver leading-relaxed">
              Tell us about your vision and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2 bg-brand-charcoal rounded-2xl p-8 md:p-12 border border-brand-gray/20">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-brand-charcoal rounded-2xl p-8 border border-brand-gray/20">
                <h3 className="text-xl font-display font-bold mb-6">
                  Get in Touch
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Mail className="text-brand-red mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:hayden.mauk@alliswellent.com"
                        className="text-brand-silver hover:text-brand-red transition-colors text-sm"
                      >
                        hayden.mauk@alliswellent.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="text-brand-red mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+13232056447"
                        className="text-brand-silver hover:text-brand-red transition-colors text-sm"
                      >
                        (323) 205-6447
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="text-brand-red mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Based In</p>
                      <p className="text-brand-silver text-sm">
                        Madison, Wisconsin
                        <br />
                        Filming nationwide
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-charcoal rounded-2xl p-8 border border-brand-gray/20">
                <h3 className="text-xl font-display font-bold mb-4">
                  Response Time
                </h3>
                <p className="text-brand-silver text-sm leading-relaxed">
                  We typically respond within 24 hours. For urgent production
                  inquiries, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
