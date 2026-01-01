
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import SectionWrapper from './SectionWrapper';

const strengths = [
    'Strong Python & SQL expertise',
    'Dashboard development & BI reporting',
    'ETL & data pipeline design',
    'Analytical problem-solving',
    'Cloud & big data exposure'
];

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const About: React.FC = () => {
    const sectionRef = useFadeIn();

    return (
        <SectionWrapper id="about" title="About Me" ref={sectionRef}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold font-heading text-text-primary mb-4">Introduction</h3>
                    <p className="text-text-muted mb-6">
                        I am a Data Analyst with hands-on experience in analytics, data engineering workflows, and business intelligence systems. I enjoy transforming raw data into meaningful insights that drive operational efficiency.
                    </p>
                    <h3 className="text-2xl font-semibold font-heading text-text-primary mb-4">Career Objective</h3>
                    <p className="text-text-muted">
                        To contribute as a data professional by leveraging analytics, scalable data pipelines, and visualization to solve real-world business problems.
                    </p>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-semibold font-heading text-text-primary mb-4">Key Strengths</h3>
                    <ul className="space-y-3">
                        {strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3 text-text-muted">{strength}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
