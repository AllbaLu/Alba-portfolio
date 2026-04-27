export default function Navbar() {

    const links = [
        { href: "#hero", label: "Home", active: true },
        { href: "#projects", label: "Work" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className="max-w-[1120px] mx-auto flex justify-between items-center px-8 h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
                
                <span className="text-xl font-bold text-stone-900 dark:text-stone-50 tracking-tighter">
                    Portfolio
                </span>
            </div>

            {/* Links */}
            <div className="hidden md:flex gap-8 items-center">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`
                            font-medium transition-colors duration-300 cursor-pointer
                            ${link.active
                                ? "text-rose-400 dark:text-rose-300 border-b-2 border-rose-400 font-semibold"
                                : "text-stone-500 dark:text-stone-400 hover:text-rose-400 dark:hover:text-rose-300"
                            }
                        `}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* CTA */}
            <a
                href="#contact"
                className="btn btn-primary text-on-primary-container px-6 py-2 rounded-full active:scale-95 transition-transform"
            >
                Contact
            </a>
        </nav>
    );
}