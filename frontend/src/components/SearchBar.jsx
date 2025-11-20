import { Search } from "lucide-react"
import { useState } from "react"

export default function SearchBar() {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="relative">
            <div className="hidden lg:block">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="pr-4 py-2 w-64 border-b border-gray-300 outline-none transition-all duration-300 focus:border-[#f83f32] dark:text-gray-100 dark:border-gray-600"
                />
            </div>
            <div className="lg:hidden">
                {isExpanded ? (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="pl-10 pr-4 py-2 w-fullborder-b border-gray-300 outline-none transition-all duration-300 focus:border-[#f83f32]"
                            onBlur={() => setIsExpanded(false)}
                            autoFocus
                        />
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
                    </div>
                ) : (
                    <button
                        onClick={() => setIsExpanded(true)}
                        className="p-2 text-gray-600 hover:text-[#f83f32] transition-colors"
                    >
                        <Search size={20} />
                    </button>
                )}
            </div>
        </div>
    )
}