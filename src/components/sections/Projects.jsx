import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 overflow-x-hidden"
        >
            <RevealOnScroll direction="right" delay={0.3}>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Movie Booking Website
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A responsive web app to book movie tickets, view
                                showtimes, and explore offers. Built with
                                dynamic routing and API data fetching.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "React",
                                    "TailwindCSS",
                                    "Node.js",
                                    "Express",
                                    "MongoDB",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://movie-booking-mern-frontend.vercel.app/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Todo List App
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A simple yet functional to-do list app to manage
                                tasks. Features CRUD operations, filters, and
                                local storage support.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "CSS"].map(
                                    (tech, key) => (
                                        <span
                                            key={key}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://sunny-rajak.github.io/todo-list-react/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Expense Tracker
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Track your expenses and income with this
                                real-time app. Includes category-based filtering
                                and persistent state.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Context API", "Chart.js"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://sunny-rajak.github.io/expense-tracker-react/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Weather App
                            </h3>
                            <p className="text-gray-400 mb-4">
                                A clean, responsive weather forecast app that
                                fetches live weather data using OpenWeatherMap
                                API.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "React",
                                    "API Integration",
                                    "TailwindCSS",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://sunny-rajak.github.io/weather-app-react/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Projects;
