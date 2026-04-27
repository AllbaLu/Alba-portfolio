export default function ContactForm() {
    return (

        <section className="py-[80px] px-6 bg-surface-container" id="contact">
            <div className="container">

                <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-label-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
                            <h2 className="font-h2 text-h2 mb-6">Let's build something beautiful.</h2>
                            <p className="font-body-md text-on-surface-variant mb-8">
                                Open for freelance opportunities, speaker invitations, or just a friendly chat about design systems.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-on-surface">
                                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <span className="font-body-md">hello@sofiamartinez.dev</span>
                            </div>
                            <div className="flex items-center gap-4 text-on-surface">
                                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <span className="font-body-md">San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                    <form className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="font-label-sm text-on-surface-variant ml-1">Name</label>
                            <input className="w-full bg-surface-container-low border-transparent focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 rounded-xl p-4 transition-all outline-none" placeholder="Your Name" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-sm text-on-surface-variant ml-1">Email</label>
                            <input className="w-full bg-surface-container-low border-transparent focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 rounded-xl p-4 transition-all outline-none" placeholder="your@email.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-sm text-on-surface-variant ml-1">Message</label>
                            <textarea className="w-full bg-surface-container-low border-transparent focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 rounded-xl p-4 transition-all outline-none resize-none" placeholder="How can I help?" rows="4"></textarea>
                        </div>
                        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-sm shadow-md hover:bg-primary/90 transition-all" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}