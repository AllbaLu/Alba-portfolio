export default function ContactForm() {
    return (

        <section class="py-[80px] px-6 bg-surface-container" id="contact">
            <div class="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-8">
                    <div>
                        <span class="text-primary font-label-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
                        <h2 class="font-h2 text-h2 mb-6">Let's build something beautiful.</h2>
                        <p class="font-body-md text-on-surface-variant mb-8">
                            Open for freelance opportunities, speaker invitations, or just a friendly chat about design systems.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center gap-4 text-on-surface">
                            <div class="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined">mail</span>
                            </div>
                            <span class="font-body-md">hello@sofiamartinez.dev</span>
                        </div>
                        <div class="flex items-center gap-4 text-on-surface">
                            <div class="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined">location_on</span>
                            </div>
                            <span class="font-body-md">San Francisco, CA</span>
                        </div>
                    </div>
                </div>
                <form class="bg-white p-8 rounded-3xl shadow-sm space-y-6">
                    <div class="space-y-2">
                        <label class="font-label-sm text-on-surface-variant ml-1">Name</label>
                        <input class="w-full bg-surface-container-low border-transparent focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 rounded-xl p-4 transition-all outline-none" placeholder="Your Name" type="text" />
                    </div>
                    <div class="space-y-2">
                        <label class="font-label-sm text-on-surface-variant ml-1">Email</label>
                        <input class="w-full bg-surface-container-low border-transparent focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 rounded-xl p-4 transition-all outline-none" placeholder="your@email.com" type="email" />
                    </div>
                    <div class="space-y-2">
                        <label class="font-label-sm text-on-surface-variant ml-1">Message</label>
                        <textarea class="w-full bg-surface-container-low border-transparent focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 rounded-xl p-4 transition-all outline-none resize-none" placeholder="How can I help?" rows="4"></textarea>
                    </div>
                    <button class="w-full bg-primary text-on-primary py-4 rounded-xl font-label-sm shadow-md hover:bg-primary/90 transition-all" type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>

    )
}