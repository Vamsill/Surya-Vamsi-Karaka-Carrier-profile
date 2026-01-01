
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import SectionWrapper from './SectionWrapper';

const experience = {
    company: 'KRISHNAS Digital and Soft Labs',
    role: 'Data Analyst',
    duration: 'Aug 2024 – Present',
    responsibilities: [
        'Designed scalable data pipelines using PySpark & Databricks',
        'Built ETL workflows for large call center datasets',
        'Generated analytical reports to support business decisions',
        'Optimized data ingestion from CSV to DBFS',
        'Used Python & SQL for transformations and analysis'
    ]
};

const Experience: React.FC = () => {
    const sectionRef = useFadeIn();

    return (
        <SectionWrapper id="experience" title="Professional Experience" ref={sectionRef}>
            <div className="relative border-l-2 border-accent/20 pl-8">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-bg-primary"></div>
                <div className="mb-4">
                    <h3 className="text-2xl font-bold font-heading text-text-primary">{experience.role}</h3>
                    <p className="text-lg font-semibold text-accent">{experience.company}</p>
                    <p className="text-sm text-text-muted mt-1">{experience.duration}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-text-primary mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-2 text-text-muted">
                        {experience.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
