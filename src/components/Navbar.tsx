const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-luxury-border">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className="text-base font-display font-semibold tracking-tight text-luxury-text-main">
                            Core3
                        </span>
                    </a>

                    <div className="flex items-center gap-6">
                        <a href="#templates" className="text-xs font-semibold text-luxury-text-main hover:opacity-70 transition-opacity uppercase tracking-widest">
                            Templates
                        </a>
                        <a href="#team" className="text-xs font-semibold text-luxury-text-main hover:opacity-70 transition-opacity uppercase tracking-widest">
                            Team
                        </a>
                        <button className="hidden sm:block px-5 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
