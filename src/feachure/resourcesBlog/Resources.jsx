export default function Resources() {

  const resources = [
    {
      type: "ebook",
      title: "Free eBook",
      description: "Master the art of writing maintainable CSS and component-driven architecture.",
      label: "Download",
      visual: "Clean Code UI",
      url: "#"
    },
    {
      type: "video",
      title: "Latest Tutorial",
      description: "Building a responsive portfolio with Tailwind CSS and smooth animations.",
      label: "Watch",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3FhYPQE8x8mQD_vCDznMe_jvhPzeq1_GRGA_5VPeNIEVCYCCucDCCf1oe1ApLryZTXg70lyroaBU5aVky0eBXU0b8CaEk9IDqOsDVcZTk965946WDiHxjqaYxCGWf_MhvnNX7G6shPaLO4JKwdn7TgaekQ0hhk_bSCLjobqiEEkCPWceW7OAgm9SDw3aeqx-pY1y-HmIQssr9SBQQjaj4xlM6KtJ1j7_yBjruL8Jze5BrXCOGfa7uYOzEyWSyBgH057pHJPQNfLU",
      url: "#"
    }
  ];

  return (
    <section id="resources" className="mt-24 py-20 px-6 bg-[#faf7f7]">


      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-pink-400 uppercase tracking-[0.2em] text-xs block mb-2">
            Resources
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Learning & Content
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {resources.map((res, index) => (
            <a
              key={index}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block no-underline"
            >

              <div className="bg-white border border-gray-200 hover:border-pink-300 rounded-2xl p-4 flex gap-4 items-center transition-all duration-300">

                {/* VISUAL MÁS PEQUEÑO */}
                {res.type === "ebook" ? (
                  <div className="w-16 h-24 bg-pink-50 border border-pink-200 rounded-lg flex items-center justify-center text-center px-2">
                    <span className="text-[10px] text-pink-400 font-medium leading-tight">
                      {res.visual}
                    </span>
                  </div>
                ) : (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-300 group-hover:border-pink-300 transition">

                    <img
                      src={res.image}
                      alt="Video preview"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                    />

                    {/* Play icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xs bg-black/50 rounded-full px-2 py-1">
                        ▶
                      </span>
                    </div>

                  </div>
                )}

                {/* CONTENT */}
                <div className="flex-1">

                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-pink-400 transition">
                    {res.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {res.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-2 text-xs text-pink-400 opacity-80 group-hover:opacity-100 transition">
                    {res.label} →
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