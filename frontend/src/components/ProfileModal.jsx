import { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import LanguageCard from "./LanguageCard";
import ProjectCard from "./ProjectCard";
import TrainingCard from "./TrainingCard";

export default function ProfileModal({
    profile,
    onClose = () => { },
    isOpen = false,
    showCloseButton = true
}) {
    if (!profile) return null
    console.log("perfil", profile);


    if (!isOpen) return null

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >


        </div>


    )
}