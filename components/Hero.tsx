
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { DownloadIcon, MailIcon } from './icons/ActionIcons';

const Hero: React.FC = () => {
    const sectionRef = useFadeIn();

    return (
        <section ref={sectionRef} id="home" className="flex items-center justify-center min-h-screen pt-20 pb-10">
            <div className="text-center max-w-3xl">
                <h1 className="text-5xl font-bold font-heading text-text-primary sm:text-6xl lg:text-7xl">
                    Surya Vamsi Karaka
                </h1>
                <p className="mt-4 text-2xl font-semibold text-accent font-heading sm:text-3xl">
                    Data Analyst
                </p>
                <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
                    Data Analyst with 1+ years of experience in building data-driven solutions using Python, SQL, Power BI, PySpark, Databricks, and AWS. Skilled in creating scalable data pipelines, dashboards, and actionable insights to improve business decision-making.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/assets/resume.pdf"
                        download="Surya_Vamsi_Karaka_Resume.pdf"
                        className="group relative inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-bg-secondary w-full sm:w-auto"
                    >
                        <span className="absolute inset-0 bg-accent w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                        <DownloadIcon />
                        <span className="relative">Download Resume</span>
                    </a>
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center px-6 py-3 bg-accent-2 text-bg-secondary font-semibold rounded-lg overflow-hidden shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:bg-accent-2 hover:shadow-indigo-500/40 w-full sm:w-auto"
                    >
                        <MailIcon />
                        <span className="relative">Contact Me</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
