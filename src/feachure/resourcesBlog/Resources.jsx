import React from "react";

export default function Resources() {

    const resources = [
        {
            type: "ebook",
            title: "Free eBook",
            description: "Master the art of writing maintainable CSS and component-driven architecture.",
            label: "Download",
            visual: "Clean Code For UI"
        },
        {
            type: "video",
            title: "Latest Tutorial",
            description: "Building a responsive portfolio with Tailwind CSS and Framer Motion.",
            label: "Watch Now",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3FhYPQE8x8mQD_vCDznMe_jvhPzeq1_GRGA_5VPeNIEVCYCCucDCCf1oe1ApLryZTXg70lyroaBU5aVky0eBXU0b8CaEk9IDqOsDVcZTk965946WDiHxjqaYxCGWf_MhvnNX7G6shPaLO4JKwdn7TgaekQ0hhk_bSCLjobqiEEkCPWceW7OAgm9SDw3aeqx-pY1y-HmIQssr9SBQQjaj4xlM6KtJ1j7_yBjruL8Jze5BrXCOGfa7uYOzEyWSyBgH057pHJPQNfLU"
        }
    ];

    return (
        <section
            id="resources"
            className="py-[80px] px-6 max-w-[1120px] mx-auto"
        >
            <h2 className="font-h2 text-h2 text-center mb-12">
                Resources for Developers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {resources.map((res, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center"
                    >

                        {/* Visual */}
                        {res.type === "ebook" ? (
                            <div className="w-32 h-44 bg-primary-fixed rounded-lg shadow-lg flex items-center justify-center p-4 text-center">
                                <span className="font-h3 text-primary text-sm">
                                    {res.visual}
                                </span>
                            </div>
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-surface-container-highest flex items-center justify-center relative group cursor-pointer">
                                <img
                                    src={res.image}
                                    alt="Tutorial preview"
                                    className="absolute inset-0 w-full h-full object-cover rounded-full opacity-60"
                                />
                                <span className="material-symbols-outlined text-4xl text-primary relative z-10">
                                    play_circle
                                </span>
                            </div>
                        )}

                        {/* Content */}
                        <div>
                            <h3 className="font-h3 text-h3 mb-2">
                                {res.title}
                            </h3>

                            <p className="text-on-surface-variant font-body-md mb-4">
                                {res.description}
                            </p>

                            <a
                                href="#"
                                className={`font-label-sm flex items-center gap-2 ${
                                    res.type === "ebook"
                                        ? "bg-primary text-on-primary px-6 py-2 rounded-full"
                                        : "text-primary font-bold"
                                }`}
                            >
                                {res.label}

                                {res.type === "video" && (
                                    <span className="material-symbols-outlined">
                                        open_in_new
                                    </span>
                                )}
                            </a>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}