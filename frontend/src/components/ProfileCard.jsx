export default function ProfileCard({ id, nome, foto, cargo, softSkills, habilidadesTecnicas, onClick }) {

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100 overflow-hidden group flex flex-col h-full"
            onClick={onClick}
        >
            <div className="h-2 bg-linear-to-r from-[#f83f32] to-[#F97316]"></div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0">
                        <img
                            src={foto}
                            alt={nome}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-sm"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-lg leading-tight group-hover:text-[#0a1c52] transition-colors duration-300">
                            {nome}
                        </h3>
                        <p className="text-[#f83f32] font-medium text-sm mt-2 leading-relaxed">{cargo}</p>
                    </div>
                </div>
                <div className="mt-auto space-y-3">
                        {habilidadesTecnicas && habilidadesTecnicas.length > 0 && (
                            <div className="space-y-2">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Habilidades Técnicas
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {habilidadesTecnicas.slice(0, 3).map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1.5 rounded-lg border border-blue-100 font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {habilidadesTecnicas.length > 3 && (
                                        <span className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1.5 rounded-lg border border-blue-100 font-medium">
                                            +{habilidadesTecnicas.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {softSkills && softSkills.length > 0 && (
                            <div className="space-y-2">
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    Soft Skills
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {softSkills.slice(0, 2).map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-green-50 text-green-700 text-xs px-2.5 py-1.5 rounded-lg border border-green-100 font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {softSkills.length > 2 && (
                                        <span className="bg-green-50 text-green-600 text-xs px-2.5 py-1.5 rounded-lg border border-green-100 font-medium">
                                            +{softSkills.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    
                </div>

            </div>

        </div>
    )
}

