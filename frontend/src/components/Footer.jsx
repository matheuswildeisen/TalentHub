import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="
            bg-white/80 dark:bg-gray-900/80 
            backdrop-blur-md shadow-sm 
            px-6 py-4 border-t border-gray-200 dark:border-gray-700
            transition-colors duration-300
        ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-4 flex-1">
                        <h3 className="font-logo font-bold text-2xl 
                            text-[#f83f32] dark:text-[#fb634f] tracking-wide">
                            TALENT HUB
                        </h3>

                        <p className="text-[#334155] dark:text-gray-300 text-sm leading-relaxed max-w-md">
                            Conectando talentos, construindo oportunidades. Juntos por um futuro 
                            profissional mais justo, inclusivo e sustentável.
                        </p>

                        <div className="flex space-x-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="
                                        bg-gray-200 dark:bg-gray-800 
                                        text-gray-700 dark:text-gray-300
                                        hover:bg-[#f83f32] dark:hover:bg-[#fb634f]
                                        hover:text-white p-2 rounded-lg 
                                        transition-all duration-300 hover:scale-110
                                    "
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 flex-1 max-w-md">
                        <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-200">
                            Newsletter
                        </h4>

                        <p className="text-[#334155] dark:text-gray-400 text-sm">
                            Receba atualizações sobre novas oportunidades e recursos.
                        </p>

                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="
                                    w-full px-3 py-2 
                                    bg-gray-200 dark:bg-gray-800 
                                    border border-gray-400 dark:border-gray-600
                                    text-gray-800 dark:text-gray-200 
                                    placeholder-gray-500 dark:placeholder-gray-400
                                    rounded-lg text-sm focus:outline-none 
                                    focus:border-[#f83f32] dark:focus:border-[#fb634f]
                                    transition-colors
                                "
                            />

                            <button className="
                                w-full 
                                bg-[#f83f32] dark:bg-[#fb634f]
                                hover:bg-[#e6352a] dark:hover:bg-[#ff846d]
                                text-white py-2 rounded-lg 
                                transition-colors duration-300 font-medium
                            ">
                                Inscrever
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 
                    flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © 2024 Talent Hub. Todos os direitos reservados.
                    </p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {["Termos de Uso", "Política de Privacidade", "Cookies"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="
                                    text-gray-600 dark:text-gray-400 
                                    hover:text-[#f83f32] dark:hover:text-[#fb634f]
                                    transition-colors duration-300 text-sm
                                "
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
