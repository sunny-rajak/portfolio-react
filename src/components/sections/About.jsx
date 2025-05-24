import { RevealOnScroll } from "../RevealOnScroll";

const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TailwindCSS",
    ];

    const backendSkills = ["Node.js", "Express.js", "MongoDB", "REST APIs"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll direction="left" delay={0.3}>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                        About me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a MERN Stack developer passionate about building
                            end-to-end web applications. I love solving
                            real-world problems through clean and scalable code,
                            from crafting intuitive frontends to designing
                            efficient backend systems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend Skills
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl mb-4 font-bold">
                                    Backend Skills
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border  border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🏫 Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>
                                        Btech in Information Technology
                                    </strong>
                                    - Technocrats Institute of Technology
                                    (TIT),Bhopal
                                    <br />
                                    <span className="text-sm text-gray-400">
                                        (Aug 2022 – Apr 2026)
                                    </span>
                                </li>
                                <li>
                                    Current CGPA: <strong>7.5</strong>
                                </li>
                                <li>
                                    Relevant Subjects: Data Structures,
                                    Operating Systems, DBMS, Web Development
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border  border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <p className="text-gray-300">
                                        Currently seeking internship
                                        opportunities to apply and enhance my
                                        MERN Stack skills.
                                    </p>
                                </div>

                                {/* <div>
                                <h4 className="font-semibold">
                                    {" "}
                                    Intern at DEF Startups (2019){" "}
                                </h4>
                                <p>
                                    Assisted in building front-end components
                                    and integration REST APIs
                                </p>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;
