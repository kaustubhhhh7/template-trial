import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
    return (
        <section id="templates" className="py-12 px-6 sm:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-10 pb-4 border-b border-luxury-border">
                    <h2 className="text-lg font-medium text-luxury-text-main">
                        All Website Templates
                    </h2>

                    <div className="flex items-center gap-2 text-xs text-luxury-text-muted">
                        <span>Sort by:</span>
                        <button className="font-semibold text-luxury-text-main flex items-center gap-1">
                            Recommended
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
