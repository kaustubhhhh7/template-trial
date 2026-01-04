import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { useState } from 'react';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

    const fallbackImage = "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="luxury-card browser-chrome relative">
                <div className="relative aspect-[16/10] overflow-hidden bg-luxury-surface">
                    {/* Skeleton/Placeholder */}
                    {status !== 'loaded' && (
                        <div className="absolute inset-0 bg-luxury-surface animate-pulse flex items-center justify-center">
                            <span className="text-[10px] text-luxury-text-muted uppercase tracking-widest font-bold opacity-30">
                                Establishing Connection...
                            </span>
                        </div>
                    )}

                    <img
                        src={project.image}
                        alt={project.name}
                        onLoad={() => setStatus('loaded')}
                        onError={(e) => {
                            if (status !== 'error') {
                                setStatus('error');
                                e.currentTarget.src = fallbackImage;
                            }
                        }}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Hover Overlay */}
                    <div className="luxury-image-overlay absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-2.5 bg-luxury-text-main text-white text-sm font-bold rounded shadow-lg hover:bg-black/80 transition-all uppercase tracking-widest"
                        >
                            View Live
                        </a>
                        <button className="px-8 py-2.5 bg-white text-luxury-text-main border border-luxury-border text-sm font-bold rounded shadow-sm hover:bg-luxury-surface transition-all uppercase tracking-widest">
                            Details
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4 px-1">
                <h3 className="text-[15px] font-medium text-luxury-text-main">
                    {project.name}
                </h3>
                <p className="text-[11px] text-luxury-text-muted mt-1 uppercase tracking-widest">
                    {project.tags.join(' / ')}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
