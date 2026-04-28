import horseTrust from "../../assets/horseTrust.png";
import ecoShop from "../../assets/ecoShop.png";

export default function Projects() {

  const projects = [
    {
      title: "Horse Trust",
      description: "Platform to manage horse care and adoption with a calm and intuitive user experience.",
      tech: ["React", "Vite", "Java", "Docker"],
      image: horseTrust,
      url: "https://horsetrust.vercel.app/"
    },
    {
      title: "Eco Shop",
      description: "Sustainable e-commerce experience with a focus on simplicity and clarity.",
      tech: ["React", "Bootstrap", "Node.js", "AWS", "Python"],
      image: ecoShop,
      url: "https://eco-shop-theta.vercel.app/"
    },
    {
      title: "BeautyFitness",
      description: "A fitness and beauty e-commerce platform designed with a clean, user-friendly interface.",
      tech: ["JavaScript", "Python", "React", "REST API", "Redux"],
      image: "BeautyFitness",
      url: "https://github.com/AllbaLu/BeautyFitness/tree/main/src"
    }
  ];

  return (
    <section id="projects" className="mt-28 py-20 px-4 sm:px-6 bg-[#faf7f7]">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 mt-4 text-center">
          <span className="text-pink-400 uppercase tracking-[0.2em] text-xs mb-3 block">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Selected Works
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block no-underline rounded-3xl overflow-hidden"
            >

              <div className="bg-white/80 backdrop-blur-sm border border-pink-100 hover:border-pink-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 gap-x-10">

                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden rounded-3xl mx-auto gap-10">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay suave */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* Tech */}
                  <div className="flex flex-wrap gap-4 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] bg-pink-50 text-pink-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-gray-800 mb-1 group-hover:text-pink-400 transition">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Link sutil */}
                  <div className="mt-4 text-xs text-pink-400 opacity-0 group-hover:opacity-100 transition">
                    View project →
                  </div>

                </div>

              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}