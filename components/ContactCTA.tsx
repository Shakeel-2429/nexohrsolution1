
import React from 'react';
import Button from './Button';
import { CONTACT_INFO } from '../constants';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-nexo-light-gray">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nexo-deep-blue mb-4">Let’s Talk HR!</h2>
        <p className="text-lg text-nexo-dark-gray max-w-2xl mx-auto mb-8">
          Ready to simplify your HR operations and strengthen compliance? Book your free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <p className="text-lg font-semibold text-nexo-deep-blue">📞 {CONTACT_INFO.phone}</p>
          <p className="text-lg font-semibold text-nexo-deep-blue">📧 {CONTACT_INFO.email}</p>
        </div>
        <Button as="a" href={`mailto:${CONTACT_INFO.email}`} variant="primary">
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
