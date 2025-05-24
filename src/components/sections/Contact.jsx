import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = "service_j691q49";
    const TEMPLATE_ID = "template_es5zq2w";
    const PUBLIC_KEY = "04c9dK0yRpCTvxY-o";

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Public Key:", import.meta.env.VITE_PUBLIC_KEY);

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((res) => {
                console.log(res);
                alert("Message sent!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.log(err);
                alert("Oops! Something went wrong. Please try again.");
            });
    };
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll direction="up" delay={0.3}>
                <div className="w-full px-4 min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="to_name"
                            value="Sunny Rajak"
                        />
                        <div className="relative">
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                placeholder="Name..."
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                placeholder="example@gmail.com"
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                placeholder="Your Meassage..."
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0_10px_rgba(59,130,246,0.4)] "
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Contact;
