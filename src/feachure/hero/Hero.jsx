import React from "react";
import fotoPerfil from "../../assets/foto-perfill.png";

export default function Hero() {

    const name = "Sofia";

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-surface-container-lowest to-background"
        >
            {/* Imagen */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary-fixed rounded-full blur-2xl opacity-30 animate-pulse"></div>

                <img
                    src={fotoPerfil}
                    alt={`Portrait of ${name}`}
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                />
            </div>

            {/* Texto */}
            <h1 className="font-h1 text-h1 text-on-surface mb-4">
                Hello, I'm {name}.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10">
                A software engineer crafting elegant solutions with a focus on human-centric design and technical precision.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">

                <a
                    href="/cv.pdf"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 rounded-full font-label-sm shadow-lg hover:shadow-primary-container/20 transition-all"
                >
                    <span className="material-symbols-outlined">download</span>
                    Download CV
                </a>

                <a
                    href="#projects"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-primary border border-primary-container py-4 px-6 rounded-full font-label-sm hover:bg-surface-container-low transition-all"
                >
                    <span className="material-symbols-outlined">work</span>
                    View Projects
                </a>

                <a
                    href="#stack"
                    className="flex-1 flex items-center justify-center gap-2 bg-surface-container-high text-on-primary-container py-4 px-6 rounded-full font-label-sm hover:bg-outline-variant transition-all"
                >
                    <span className="material-symbols-outlined">code</span>
                    My Stack
                </a>

            </div>
        </section>
    );
}