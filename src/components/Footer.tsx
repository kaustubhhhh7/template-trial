const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-luxury-border bg-luxury-surface/20">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-sm font-display font-bold tracking-tight text-luxury-text-main">
                        Core3
                    </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-text-muted font-bold">
                    © Core3 Templates — Crafted with Precision
                </p>
            </div>
        </footer>
    );
};

export default Footer;
