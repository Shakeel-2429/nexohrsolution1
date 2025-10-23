
import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { RecruitmentIcon, PayrollIcon, ComplianceIcon, AdvisoryIcon } from '../components/Icons';

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  outcome: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ icon, title, description, features, outcome }) => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <div className="flex items-start md:items-center mb-6">
      <div className="text-nexo-teal mr-6">{icon}</div>
      <div>
        <h3 className="text-2xl font-bold text-nexo-deep-blue">{title}</h3>
        <p className="text-lg text-nexo-dark-gray mt-1">{description}</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-bold text-lg text-nexo-deep-blue mb-3">Service Includes:</h4>
        <ul className="space-y-2 list-disc list-inside text-nexo-dark-gray">
          {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </div>
      <div className="bg-nexo-light-gray p-6 rounded-md">
        <h4 className="font-bold text-lg text-nexo-deep-blue mb-2">Outcome:</h4>
        <p className="text-nexo-dark-gray">{outcome}</p>
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <RecruitmentIcon className="h-12 w-12"/>,
      title: "Recruitment",
      description: "Finding the right talent is critical to your company’s success. We provide end-to-end hiring support — from understanding your manpower needs to onboarding the ideal candidate.",
      features: [
        "Sourcing through job portals, professional networks, and in-house databases",
        "Candidate screening and shortlisting",
        "Interview coordination and feedback management",
        "Offer negotiation and closure support",
      ],
      outcome: "Streamlined hiring with faster turnaround time and better candidate fit."
    },
    {
      icon: <PayrollIcon className="h-12 w-12"/>,
      title: "Payroll Management",
      description: "Simplify payroll operations while staying fully compliant.",
      features: [
        "Salary computation and register maintenance",
        "Payslip generation and distribution",
        "Statutory deductions (PF, ESI, PT, TDS)",
        "Reimbursement and leave integration",
      ],
      outcome: "Hassle-free payroll cycles with zero compliance risk."
    },
    {
        icon: <ComplianceIcon className="h-12 w-12"/>,
        title: "Statutory Compliance",
        description: "Complete management for all applicable labour laws and employee benefit acts.",
        features: [
          "PF, ESI, PT, LWF, TDS and Gratuity challans & returns",
          "Monthly and annual compliance filings",
          "Audit and inspection coordination",
          "Record keeping and documentation",
        ],
        outcome: "Peace of mind with error-free compliance and timely submissions."
    },
    {
        icon: <AdvisoryIcon className="h-12 w-12"/>,
        title: "HR Advisory & Policy Frameworks",
        description: "Strengthen organization with robust HR structures and employee policies.",
        features: [
          "Drafting HR policies, employee handbooks, SOPs",
          "Designing process frameworks and workflows",
          "Grievance redressal and employee relations support",
          "HR audits and system improvement planning",
        ],
        outcome: "A compliant, transparent, and people-centric work environment."
    },
  ];

  return (
    <>
      <PageBanner
        title="Comprehensive HR Solutions, Tailored for Your Business"
        subtitle="From recruitment to compliance, we provide end-to-end HR support designed for small and medium enterprises."
      />

      <section className="py-20 px-6 bg-nexo-light-gray">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-nexo-deep-blue mb-4">Our Service Suite</h2>
            <p className="text-lg text-nexo-dark-gray">
              At NEXO HR Solutions, we understand that each organization’s HR needs are unique. Our service suite covers the entire employee lifecycle — ensuring operational efficiency, compliance, and a better people experience.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {services.map((service, index) => <ServiceDetail key={index} {...service} />)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default ServicesPage;
