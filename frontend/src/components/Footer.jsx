import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-4 flex-1">
                        <h3 className="font-logo font-bold text-2xl text-[#f83f32] tracking-wide">TALENT HUB</h3>
                        <p className="text-[#334155] text-sm leading-relaxed max-w-md">
                            Conectando talentos, construindo oportunidades. Juntos por um futuro 
                            profissional mais justo, inclusivo e sustentável.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a 
                                href="#" 
                                className="bg-gray-200 hover:bg-[#f83f32] p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="bg-gray-200 hover:bg-[#f83f32] p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="bg-gray-200 hover:bg-[#f83f32] p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a 
                                href="#" 
                                className="bg-gray-200 hover:bg-[#f83f32] p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4 flex-1 max-w-md">
                        <h4 className="font-semibold text-lg">Newsletter</h4>
                        <p className="text-[#334155] text-sm">
                            Receba atualizações sobre novas oportunidades e recursos.
                        </p>
                        <div className="space-y-2">
                            <input 
                                type="email" 
                                placeholder="Seu e-mail"
                                className="w-full px-3 py-2 bg-gray-200 border border-gray-400 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#f83f32] transition-colors"
                            />
                            <button className="w-full bg-[#f83f32] hover:bg-[#e6352a] text-white py-2 rounded-lg transition-colors duration-300 font-medium">
                                Inscrever
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Talent Hub. Todos os direitos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a 
                            href="#" 
                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                            Termos de Uso
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                            Política de Privacidade
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}