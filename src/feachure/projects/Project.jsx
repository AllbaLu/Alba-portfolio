import React from "react";

export default function Projects() {

    const projects = [
        {
            title: "Serene Analytics",
            description: "A data visualization platform for small businesses with an emphasis on clarity and reduced cognitive load.",
            tech: ["Next.js", "Tailwind"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv22NVGEXQlS3_ZRFoGd2NBhRI6XlvnqJzzbSkhEOCGj07-NQegCSY3E1Ia30YJWnG22JC_fWbCxdFuoCZdn0hcLKUqot90xdiAPyUwm3lxI7AA5xGRyB4wM6hmPA4gxeKa79yklWJ-hmj1THd8k40WNtX1tElewldUGOyC-To8KUQ4XtAkPbfOv9MdzrB3_l-odR9ktGFXlwXTtCNKE9hEFp_dN9YjbHbOiS2qenfPSwMtvsH1xXICQoVVVuLhULsset2j50aoaU"
        }
    ];

    return (
        <section
            id="projects"
            className="py-[80px] px-6 bg-surface-container-low"
        >
            <div className="max-w-[1120px] mx-auto">

                {/* Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="font-h2 text-h2">
                            Selected Works
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-primary font-label-sm font-bold"
                    >
                        View All
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >

                            {/* Image */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">

                                {/* Tech */}
                                <div className="flex gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-surface-container text-primary font-label-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="font-h3 text-h3 mb-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-on-surface-variant font-body-md mb-6">
                                    {project.description}
                                </p>

                                {/* Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-primary font-bold group"
                                >
                                    Case Study
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                        east
                                    </span>
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}