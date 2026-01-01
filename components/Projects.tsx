
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import SectionWrapper from './SectionWrapper';
import { GithubIcon } from './icons/SocialIcons';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    links: { github?: string };
    details?: string[];
}

const projects: Project[] = [
    {
        title: 'Python Call Center Logging Data Engineering',
        description: 'Developed a data management system for call center operations, enabling efficient data ingestion, transformation, and reporting.',
        techStack: ['Python', 'PySpark', 'SQL', 'Databricks'],
        links: { github: '#' }
    },
    {
        title: '1930 CSB Dashboard Analytics',
        description: 'Built analytical dashboards for TGCSB data to track agent performance, trends, and operational metrics.',
        techStack: ['Python', 'SQL', 'Metabase', 'Power BI'],
        links: {},
        details: ['Agent Analysis', 'Trends', 'Bar Charts']
    }
];

const ProjectCard: React.FC<Project & { index: number }> = ({ title, description, techStack, links, details, index }) => {
    const isPrimaryAccent = index % 2 === 0;

    return (
        <div className="bg-bg-secondary border border-slate-800/50 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full hover:border-accent-2/50">
            <div className="flex-grow">
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2">{title}</h3>
                <p className="text-text-muted mb-4">{description}</p>
                {details && (
                     <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Dashboards:</h4>
                        <p className="text-text-muted text-sm">{details.join(', ')}</p>
                    </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map(tech => (
                        <span key={tech} className={`text-xs font-mono px-2 py-1 rounded ${isPrimaryAccent ? 'bg-accent-soft text-accent' : 'bg-accent-2-soft text-accent-2'}`}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-auto pt-4 flex items-center justify-end">
                {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub link for project">
                        <GithubIcon />
                    </a>
                )}
            </div>
        </div>
    )
};

const Projects: React.FC = () => {
    const sectionRef = useFadeIn();

    return (
        <SectionWrapper id="projects" title="Projects" ref={sectionRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
