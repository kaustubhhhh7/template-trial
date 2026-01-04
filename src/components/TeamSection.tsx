import { motion } from 'framer-motion';
import TeamCard from './TeamCard';
import { teamMembers } from '../data/team';

const TeamSection = () => {
    return (
        <section id="team" className="py-8 px-6 sm:px-12 lg:px-20 bg-white border-b border-luxury-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-8">
                    <span className="text-[10px] uppercase tracking-[0.6em] font-black text-luxury-text-muted">
                        STUDIO
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={member.id} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
