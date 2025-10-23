
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ContactCTA from '../components/ContactCTA';
import { RecruitmentIcon, PayrollIcon, ComplianceIcon, AdvisoryIcon, CheckCircleIcon } from '../components/Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="text-nexo-teal mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-nexo-deep-blue mb-2">{title}</h3>
    <p className="text-nexo-dark-gray">{description}</p>
  </div>
);

const WhyChooseUsItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3">
    <CheckCircleIcon className="h-6 w-6 text-nexo-teal" />
    <span className="text-lg text-nexo-dark-gray">{text}</span>
  </div>
);


const HomePage: React.FC = () => {
    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-nexo-deep-blue text-white min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Where People & Workplaces Meet</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-gray-200">
            Empowering SMEs and emerging businesses through professional, reliable, and affordable HR solutions.
          </p>
          <p className="text-md md:text-lg font-semibold tracking-wider text-nexo-teal mb-8">
            Recruitment • Payroll • Statutory Compliance • HR Advisory
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="primary" onClick={scrollToServices}>Explore Services</Button>
            <Button variant="secondary" onClick={scrollToContact}>Talk to Us</Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexo-deep-blue mb-6">About NEXO HR Solutions</h2>
          <p className="max-w-3xl mx-auto text-lg text-nexo-dark-gray mb-8">
            With over 10 years of cross-industry HR experience, NEXO HR Solutions specializes in supporting SMEs and emerging businesses. Our mission is to deliver professional, reliable, and affordable HR services that enable organizations to build strong, compliant, and scalable foundations through Recruitment, Payroll, Statutory Compliance, and HR Advisory.
          </p>
          <Button as={Link} to="/about" variant="secondary">Learn More About Us</Button>
        </div>
      </section>

      {/* Services Snapshot */}
      <section id="services" className="bg-nexo-light-gray py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nexo-deep-blue mb-4">Our Core HR Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<RecruitmentIcon className="h-12 w-12"/>}
              title="Recruitment"
              description="End-to-end hiring support — from sourcing and screening to coordination, negotiation, and closure."
            />
            <ServiceCard 
              icon={<PayrollIcon className="h-12 w-12"/>}
              title="Payroll"
              description="Complete payroll management including salary registers, payslip generation, and compliance with PF, ESI, PT, and TDS."
            />
            <ServiceCard 
              icon={<ComplianceIcon className="h-12 w-12"/>}
              title="Statutory Compliance"
              description="Comprehensive support with PF, ESI, PT, LWF, and Gratuity challans and returns, plus audit and inspection handling."
            />
            <ServiceCard 
              icon={<AdvisoryIcon className="h-12 w-12"/>}
              title="HR Advisory"
              description="Drafting HR policies, employee handbooks, SOPs, and grievance frameworks that build transparent, efficient workplaces."
            />
          </div>
           <div className="text-center mt-12">
             <Button as={Link} to="/services" variant="primary">View All Services</Button>
           </div>
        </div>
      </section>

      {/* Why Choose NEXO */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nexo-deep-blue mb-4">Why Partner with Us</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <WhyChooseUsItem text="10+ Years of HR Expertise" />
            <WhyChooseUsItem text="Tailored Solutions for SMEs" />
            <WhyChooseUsItem text="End-to-End HR Coverage" />
            <WhyChooseUsItem text="Compliance-Driven Approach" />
            <WhyChooseUsItem text="Cost-Effective, Reliable Support" />
            <WhyChooseUsItem text="Dedicated Consultation & Response" />
          </div>
        </div>
      </section>
      
      <div id="contact">
        <ContactCTA />
      </div>
    </>
  );
};

export default HomePage;
