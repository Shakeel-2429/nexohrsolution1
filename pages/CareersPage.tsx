
import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';

const JobOpeningCard: React.FC<{ role: string; org: string; loc: string; exp: string }> = ({ role, org, loc, exp }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
    <div>
      <h3 className="text-xl font-bold text-nexo-deep-blue">{role}</h3>
      <p className="text-nexo-dark-gray">{org}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mt-2">
        <span>📍 {loc}</span>
        <span>|</span>
        <span>⏳ {exp}</span>
      </div>
    </div>
    <div className="w-full md:w-auto">
      <Button as="a" href="#" target="_blank" rel="noopener noreferrer" className="w-full">Apply Now</Button>
    </div>
  </div>
);


const CareersPage: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <>
            <PageBanner
                title="Join Our Talent Network"
                subtitle="Be part of our growing network of professionals and explore opportunities that match your skills and goals."
            />

            <section className="py-20 px-6">
                <div className="container mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Intro & Openings */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-nexo-deep-blue mb-4">Connecting Talent. Building Careers.</h2>
                            <p className="text-lg text-nexo-dark-gray">
                                At NEXO HR Solutions, we connect talented individuals with leading organizations across industries. Whether you’re seeking permanent, contractual, or project-based roles, share your profile with us. Our team will reach out when suitable opportunities arise that align with your expertise.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="text-3xl font-bold text-nexo-deep-blue mb-6">Current Openings</h2>
                            <div className="space-y-6">
                                <JobOpeningCard role="Senior React Developer" org="Tech Innovators Inc." loc="Remote" exp="5+ Years" />
                                <JobOpeningCard role="HR Manager" org="NEXO HR Solutions" loc="Chennai, India" exp="3-5 Years" />
                                <JobOpeningCard role="Marketing Specialist" org="Creative Minds Agency" loc="Bengaluru, India" exp="2-4 Years" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-nexo-light-gray p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-nexo-deep-blue mb-6 text-center">📋 Submit Your Profile</h2>
                        {formSubmitted ? (
                            <div className="text-center p-8 bg-teal-100 text-nexo-deep-blue rounded-lg">
                                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                                <p>Your profile has been submitted successfully. Our HR team will review your application and reach out if a suitable opportunity matches your background.</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-nexo-dark-gray mb-1">Full Name</label>
                                <input type="text" id="fullName" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-nexo-teal focus:border-nexo-teal" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="contact" className="block text-sm font-medium text-nexo-dark-gray mb-1">Contact Number</label>
                                    <input type="tel" id="contact" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-nexo-teal focus:border-nexo-teal" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-nexo-dark-gray mb-1">Email ID</label>
                                    <input type="email" id="email" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-nexo-teal focus:border-nexo-teal" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="skills" className="block text-sm font-medium text-nexo-dark-gray mb-1">Key Skills (comma separated)</label>
                                <input type="text" id="skills" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-nexo-teal focus:border-nexo-teal" placeholder="e.g., React, Talent Acquisition, Payroll" />
                            </div>
                             <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-nexo-dark-gray mb-1">Total Experience</label>
                                    <select id="experience" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-nexo-teal focus:border-nexo-teal bg-white">
                                        <option>0-2 years</option>
                                        <option>2-5 years</option>
                                        <option>5-10 years</option>
                                        <option>10+ years</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="noticePeriod" className="block text-sm font-medium text-nexo-dark-gray mb-1">Notice Period</label>
                                    <select id="noticePeriod" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-nexo-teal focus:border-nexo-teal bg-white">
                                        <option>Immediate</option>
                                        <option>15 days</option>
                                        <option>30 days</option>
                                        <option>60 days</option>
                                        <option>90 days</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-nexo-dark-gray mb-1">Upload Resume</label>
                                <input type="file" id="resume" required className="w-full text-sm text-nexo-dark-gray file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-nexo-teal/10 file:text-nexo-teal hover:file:bg-nexo-teal/20" />
                            </div>
                            <div className="flex items-start">
                                <input type="checkbox" id="declaration" required className="h-4 w-4 text-nexo-teal border-gray-300 rounded focus:ring-nexo-teal mt-1" />
                                <label htmlFor="declaration" className="ml-3 block text-sm text-nexo-dark-gray">
                                    I confirm that the above information is true to the best of my knowledge.
                                </label>
                            </div>
                            <div>
                                <Button type="submit" className="w-full">Submit My Profile</Button>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareersPage;
