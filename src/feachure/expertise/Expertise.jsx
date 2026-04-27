import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

export default function Expertise() {

  const name = "Alba Rodríguez";

  const techStack = [
    "React",
    "Node.js",
    "Tailwind",
    "AWS",
    "Docker"
  ];

  const codeString = `class DeveloperPortfolio {
  constructor() {
    this.name = '${name}';
    this.focus = ['Scalability', 'UX'];
  }

  async render() {
    return await design.refine(code);
  }
}`;

  const [code, setCode] = useState("");

  // ✨ typing effect
  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setCode(codeString.slice(0, i));
      i++;
      if (i > codeString.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="expertise"
      className="py-[10px] px-2 max-w-[1100px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-primary uppercase tracking-widest mb-4 block text-sm">
            Expertise
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-on-surface">
            Bridging Code and Creativity
          </h2>

          <p className="text-on-surface-variant mb-6">
            I specialize in building scalable web applications using React, Node.js, and Cloud architectures.
            My approach blends rigorous engineering with a refined minimalist aesthetic.
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-pink-100 text-pink-500 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 💻 CODE BLOCK */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">

          {/* header */}
          <div className="flex gap-2 p-4 border-b border-gray-100 bg-gray-50">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* code */}
          <pre className="p-2 text-sm overflow-x-auto">
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  code,
                  Prism.languages.javascript,
                  "javascript"
                ),
              }}
            />
          </pre>

        </div>

      </div>
    </section>
  );
}