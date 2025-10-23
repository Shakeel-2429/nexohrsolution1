
import React from 'react';
import PageBanner from '../components/PageBanner';
import ContactCTA from '../components/ContactCTA';
import { CheckCircleIcon } from '../components/Icons';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <CheckCircleIcon className="h-8 w-8 text-nexo-teal mr-4 flex-shrink-0" />
      <h3 className="text-xl font-bold text-nexo-deep-blue">{title}</h3>
    </div>
    <p className="text-nexo-dark-gray">{description}</p>
  </div>
);

const WhyChooseUsPage: React.FC = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "Our team brings over a decade of cross-industry HR expertise, ensuring you receive knowledgeable and practical advice."
    },
    {
      title: "Customized Solutions",
      description: "We don't believe in one-size-fits-all. Our services are tailored to meet the unique needs and scale of your business."
    },
    {
      title: "Compliance & Accuracy",
      description: "Stay ahead of regulatory changes. We ensure your HR practices are fully compliant, minimizing risks and ensuring accuracy."
    },
    {
      title: "Employee-Centric Approach",
      description: "We help you build a positive work environment that fosters engagement, satisfaction, and productivity."
    },
    {
      title: "Reliable Support",
      description: "Consider us your extended HR arm. We provide dedicated, responsive support whenever you need it."
    },
    {
        title: "Cost-Effective Partnership",
        description: "Access expert HR services at a fraction of the cost of an in-house team, allowing you to invest more in your core business."
    },
  ];

  return (
    <>
      <PageBanner
        title="Why Partner with NEXO HR Solutions"
        subtitle="Discover the advantages of having a dedicated, expert HR partner committed to your business success."
      />

      <section className="py-20 px-6 bg-nexo-light-gray">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-nexo-deep-blue mb-4">Ready to Elevate Your HR?</h2>
          <p className="text-lg text-nexo-dark-gray">
            Partner with us for seamless HR management and effective solutions that drive organizational efficiency and employee satisfaction.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default WhyChooseUsPage;
