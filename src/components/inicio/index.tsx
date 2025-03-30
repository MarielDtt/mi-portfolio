"use client"
import { ButtonRounded } from "../buttons";
import SkillsIcons from "../skillsIcons";


function Inicio() {


    return (
        <div className="w-full h-96 flex flex-col pt-24 pl-8">
            <h1 className="font-lilita-custom md:text-6xl text-4xl">
                MARIEL DRUETTA
            </h1>
            <div className="pt-8 ">
                <h2>Desarrollador FullStack</h2>
            </div>
            <div className="pt-8 flex justify-items-start">
                <ButtonRounded
                    href="/Mariel Druetta - CV - Front End.pdf"
                    download text="Descargar CV"
                />
            </div>
            <div className="flex justify-end">
                <SkillsIcons></SkillsIcons>
            </div>
        </div>
    )

}

export default Inicio;