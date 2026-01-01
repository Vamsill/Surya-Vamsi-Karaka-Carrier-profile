
import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import SectionWrapper from './SectionWrapper';

interface Skill {
    name: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python (Pandas, NumPy, Scikit-learn)' },
            { name: 'SQL' },
            { name: 'PySpark' }
        ]
    },
    {
        title: 'Data Tools',
        skills: [
            { name: 'Databricks' },
            { name: 'Metabase' },
            { name: 'Power BI' },
            { name: 'Excel' }
        ]
    },
    {
        title: 'Technical Skills',
        skills: [
            { name: 'Data Structures & Algorithms' },
            { name: 'OOPs' },
            { name: 'DBMS' }
        ]
    },
    {
        title: 'Cloud',
        skills: [
            { name: 'AWS Cloud' }
        ]
    },
    {
        title: 'Relevant Coursework',
        skills: [
            { name: 'Data Engineering' },
            { name: 'Data Analytics' }
        ]
    }
];

const SkillTag: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-bg-secondary px-4 py-2 rounded-md border border-slate-700/50">
        <p className="font-mono text-sm text-text-muted">{name}</p>
    </div>
);

const Skills: React.FC = () => {
    const sectionRef = useFadeIn();

    return (
        <SectionWrapper id="skills" title="Technical Skills" ref={sectionRef}>
            <div className="space-y-8">
                {skillsData.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-xl font-semibold font-heading text-accent mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <SkillTag key={skill.name} name={skill.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
