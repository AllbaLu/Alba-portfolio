import React, { useEffect } from "react";

export default function Footer() {

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const options = {
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.classList.remove('grayscale-[30%]');
                } else {
                    entry.target.style.opacity = "0.5";
                    entry.target.classList.add('grayscale-[30%]');
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        
        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center group active:scale-95 transition-all z-40">
                <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">
                    smart_toy
                </span>
            </button>
        </>
    );
}