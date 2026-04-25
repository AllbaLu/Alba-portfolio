
export default function Navbar() {
    return (

        <nav className="max-w-[1120px] mx-auto flex justify-between items-center px-8 h-16">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-400 dark:text-rose-300">terminal</span>
                <span className="text-xl font-bold text-stone-900 dark:text-stone-50 tracking-tighter">Portfolio</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
                <a className="text-rose-400 dark:text-rose-300 border-b-2 border-rose-400 font-semibold font-['Plus_Jakarta_Sans'] transition-colors duration-300 cursor-pointer" href="#hero">Home</a>
                <a className="text-stone-500 dark:text-stone-400 font-medium font-['Plus_Jakarta_Sans'] hover:text-rose-400 dark:hover:text-rose-300 transition-colors duration-300 cursor-pointer" href="#projects">Work</a>
                <a className="text-stone-500 dark:text-stone-400 font-medium font-['Plus_Jakarta_Sans'] hover:text-rose-400 dark:hover:text-rose-300 transition-colors duration-300 cursor-pointer" href="#contact">Contact</a>
            </div>
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-sm active:scale-95 transition-transform">
                Contact
            </button>
        </nav>
    )
}