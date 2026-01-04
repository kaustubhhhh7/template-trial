import { motion } from 'framer-motion';
import { Code2, Palette, Users, Rocket } from 'lucide-react';

const features = [
    {
        icon: Code2,
        title: '100% Scratch Built',
        description: 'Every line of code written from the ground up'
    },
    {
        icon: Palette,
        title: 'No Copy-Paste Templates',
        description: 'Original, custom-designed user interfaces'
    },
    {
        icon: Users,
        title: 'Client-First UI/UX',
        description: 'Designs crafted with your users in mind'
    },
    {
        icon: Rocket,
        title: 'Scalable & Clean Code',
        description: 'Production-ready, maintainable codebases'
    }
];

const WhyCore3Section = () => {
    return (
        <section id="why-core3" className="py-24 bg-gradient-to-br from-luxury-50 via-white to-gold-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Why Choose <span className="text-gradient">Core3</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We deliver exceptional quality through dedication to craftsmanship
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-luxury-100 to-gold-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8 text-luxury-600" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-luxury-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600">
                                    {feature.description}
                                </p>

                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-luxury-600/5 to-gold-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional feature badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-luxury-600 to-gold-600 text-white font-semibold rounded-full shadow-lg">
                        <Rocket className="w-5 h-5" />
                        <span>Live Hosted Projects</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyCore3Section;
