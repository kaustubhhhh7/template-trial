import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-32 pb-16 px-6 sm:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-display font-medium text-luxury-text-main mb-6 tracking-tight">
                        Design. Develop. Deploy.
                    </h1>
                    <p className="text-lg text-luxury-text-muted max-w-2xl mx-auto font-light leading-relaxed">
                        Curated premium templates crafted for high-performance
                        digital experiences. Explore our laboratory of modern design.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
