
import React from 'react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { CheckCircleIcon } from '../components/Icons';

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-nexo-deep-blue mb-4">{title}</h2>
    <div className="text-lg text-nexo-dark-gray space-y-4">{children}</div>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <PageBanner
        title="Building Strong, Compliant & Scalable HR Foundations"
        subtitle="Backed by 10+ years of cross-industry expertise, NEXO HR Solutions helps organizations streamline HR processes and empower their workforce."
      />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <InfoSection title="Who We Are">
            <p>NEXO HR Solutions is a collaborative HR platform designed to support SMEs and emerging businesses across industries.</p>
            <p>Our goal is to make professional HR expertise accessible, affordable, and practical — helping organizations focus on growth while we manage the people processes that power it.</p>
          </InfoSection>

          <InfoSection title="Our Mission">
            <p>To deliver reliable and cost-effective HR services that enable businesses to build compliant, performance-driven, and people-focused workplaces.</p>
          </InfoSection>

          <InfoSection title="Our Expertise">
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-nexo-teal mr-3 mt-1 flex-shrink-0" /><span>Recruitment & Staffing</span></li>
              <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-nexo-teal mr-3 mt-1 flex-shrink-0" /><span>Payroll & Compensation Management</span></li>
              <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-nexo-teal mr-3 mt-1 flex-shrink-0" /><span>Statutory Compliance (PF, ESI, PT, Gratuity, LWF)</span></li>
              <li className="flex items-start"><CheckCircleIcon className="h-6 w-6 text-nexo-teal mr-3 mt-1 flex-shrink-0" /><span>HR Policy Design & Advisory</span></li>
            </ul>
            <p className="mt-4">Each service is delivered with a commitment to accuracy, confidentiality, and continuous improvement.</p>
          </InfoSection>

          <InfoSection title="Our Approach">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-nexo-teal">Professionalism</h3>
                <p>Delivering dependable HR solutions with precision.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-nexo-teal">Compliance</h3>
                <p>Ensuring every process meets legal and ethical standards.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-nexo-teal">Scalability</h3>
                <p>Building HR systems that grow with your business.</p>
              </div>
            </div>
          </InfoSection>

          <InfoSection title="Our Promise">
            <p>At NEXO HR Solutions, we’re not just service providers — we’re your extended HR arm.</p>
            <p>Whether you’re setting up HR from scratch or optimizing existing systems, we ensure smooth, compliant, and transparent operations that align with your goals.</p>
          </InfoSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default AboutPage;
