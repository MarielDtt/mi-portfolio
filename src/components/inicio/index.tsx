"use client"
import { useState } from "react";
import { ButtonRounded } from "../buttons";
import SkillsIcons from "../skillsIcons";

const textoAnimado = ["Desarrollador FullStack", "Desarrollador Frontend", "Desarrollador Web"]
function Inicio() {

const [posicionFraseActual , setPosicionFraseActual ] = useState(0);
const [characterByCharacter , setCharacterByCharacter ] = useState("")
    return (
        <div className="w-full h-96 flex flex-col pt-24 pl-8">
            <h1 className="font-lilita-custom md:text-6xl text-4xl">
                MARIEL DRUETTA
            </h1>
            <div className="pt-8 ">
                <h2 className="text-rose-500 font-extrabold text-2xl text-center w-2/5 special-elite-text">{textoAnimado[posicionFraseActual]}</h2>
            </div>
            <div className="w-2/5 pt-8 flex justify-center">
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