import React from "react";

export default function Expertise() {

    const techStack = ["React", "TypeScript", "Node.js", "AWS"];
    const name = "Sofia Martinez";

    return (
        <section
            id="expertise"
            className="py-[80px] px-6 max-w-[1120px] mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Texto */}
                <div>
                    <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">
                        Expertise
                    </span>

                    <h2 className="font-h2 text-h2 mb-6">
                        Bridging Code and Creativity
                    </h2>

                    <p className="font-body-md text-on-surface-variant mb-6">
                        I specialize in building scalable web applications using React, Node.js, and Cloud architectures.
                        My approach blends rigorous engineering with a refined minimalist aesthetic.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-tertiary-container/30 text-on-tertiary-container rounded-full font-label-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Code Card */}
                <div className="rounded-xl overflow-hidden shadow-2xl bg-[#2d2424] p-6 border border-on-surface-variant/20">

                    {/* Header dots */}
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-error"></div>
                        <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                        <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                    </div>

                    {/* Code */}
                    <pre className="font-code text-code text-primary-fixed overflow-x-auto">
                        <code>
{`class DeveloperPortfolio {
  constructor() {
    this.name = '${name}';
    this.focus = ['Scalability', 'UX'];
  }

  async render() {
    return await design.refine(code);
  }
}`}
                        </code>
                    </pre>

                    {/* Cursor */}
                    <div className="mt-2 animate-pulse border-r-2 border-primary-container w-2 h-4"></div>

                </div>

            </div>
        </section>
    );
}