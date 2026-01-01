
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import SectionWrapper from './SectionWrapper';
import { CertificateIcon, GraduationCapIcon } from './icons/InfoIcons';

const education = {
    degree: 'B.Tech – Computer Science and Engineering',
    institution: 'Lendi Institute of Engineering & Technology',
    year: '2024',
    cgpa: '7.6'
};

const certifications = [
    'Databricks Certified Associate Developer – Lakehouse Fundamentals',
    'Salesforce Certified Developer'
];

const Education: React.FC = () => {
    const sectionRef = useFadeIn();

    return (
        <SectionWrapper id="education" title="Education & Certifications" ref={sectionRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 className="flex items-center text-xl font-semibold font-heading text-accent mb-4">
                        <GraduationCapIcon />
                        <span className="ml-2">Education</span>
                    </h3>
                    <div className="bg-bg-secondary p-6 rounded-lg border border-slate-800/50">
                        <h4 className="text-lg font-bold text-text-primary">{education.degree}</h4>
                        <p className="text-text-muted mt-1">{education.institution}</p>
                        <p className="text-sm text-text-muted mt-2">{education.year} | CGPA: {education.cgpa}</p>
                    </div>
                </div>
                <div>
                    <h3 className="flex items-center text-xl font-semibold font-heading text-accent mb-4">
                        <CertificateIcon />
                        <span className="ml-2">Certifications</span>
                    </h3>
                    <div className="bg-bg-secondary p-6 rounded-lg border border-slate-800/50">
                        <ul className="space-y-3">
                            {certifications.map(cert => (
                                <li key={cert} className="text-text-muted">{cert}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
