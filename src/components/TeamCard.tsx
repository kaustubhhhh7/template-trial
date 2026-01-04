import { motion } from 'framer-motion';
import type { TeamMember } from '../data/team';
import { useState } from 'react';

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.a
            href={member.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block"
        >
            <div className="luxury-card p-4 flex items-center gap-4 bg-luxury-surface/20 border border-luxury-border/50">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-luxury-border bg-luxury-surface">
                    {!imageLoaded && (
                        <div className="absolute inset-0 animate-pulse flex items-center justify-center text-[10px] font-bold text-luxury-text-muted">
                            {member.name.charAt(0)}
                        </div>
                    )}
                    <img
                        src={member.image}
                        alt={member.name}
                        onLoad={() => setImageLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-luxury-text-main group-hover:text-black transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-[9px] uppercase font-bold tracking-widest text-luxury-text-muted group-hover:text-luxury-text-main transition-colors">
                        View Signature Portfolio
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

export default TeamCard;
