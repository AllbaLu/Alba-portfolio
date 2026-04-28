export default function ContactForm() {
  return (
    <section id="contact" className="mt-28 py-24 px-4 sm:px-6 bg-[#faf7f7]">
      
      {/* CONTENEDOR CENTRADO REAL */}
      <div className="max-w-5xl mx-auto">

        {/* TITULO */}
        <div className="text-center mb-14">
          <span className="text-pink-400 text-xs uppercase tracking-[0.25em]">
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-3">
            Let's build something beautiful.
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Open for freelance opportunities, collaborations or just a friendly chat about design systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* INFO */}
          <div className="space-y-8">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-400">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </div>
                <span className="text-sm text-gray-700">
                  albaluccia@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-400">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                </div>
                <span className="text-sm text-gray-700">
                  España
                </span>
              </div>

            </div>

          </div>

          {/* FORM */}
          <form className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-5">

            <div>
              <label className="text-xs text-gray-500">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-100 focus:border-pink-300 outline-none text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-100 focus:border-pink-300 outline-none text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Message</label>
              <textarea
                rows="4"
                placeholder="How can I help?"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-100 focus:border-pink-300 outline-none text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-pink-400 text-white text-sm hover:bg-pink-300 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}