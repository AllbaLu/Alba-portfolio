import fotoPerfil from "../../assets/foto-perfill.png";

export default function Hero() {
    const name = "Alba Rodríguez";

    return (
        <section
            id="hero"
            className="py-20 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-surface-container-lowest to-background"
        >
            {/* Imagen */}
            <div className="relative mb-8">
                <div className="absolute inset-[-8px] bg-primary-fixed rounded-full blur-xl opacity-30"></div>

                <div className="w-[230px] sm:w-[250px] md:w-[260px] mx-auto p-1">
                    <img
                        src={fotoPerfil}
                        alt="profile"
                        className="w-full h-auto rounded-full object-cover border-4 border-white shadow-xl"
                    />
                </div>
            </div>

            {/* Texto */}
            <h1 className="text-h1 text-on-surface mt-4 mb-4 p-1">
                Hello, I'm {name}.
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-lg mt-4 mb-6">
                A software engineer crafting elegant solutions with a focus on human-centric design and technical precision.
            </p>

            {/* Botones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-1 text-sm max-w-md mx-auto w-full">

                <a href="/cv.pdf" className="btn btn-primary flex items-center justify-center w-full">
                    Download CV
                </a>
                <a href="#projects" className="btn btn-outline flex items-center justify-center w-full">
                    Projects
                </a>
                <a href="#stack" className="btn btn-outline flex items-center justify-center bg-surface-container-high w-full">
                    My Stack
                </a>

            </div>
        </section>
    );
}