
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-nexo-deep-blue text-white">
      <div className="container mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageBanner;
