"use client"
import { useState, useEffect } from "react";
import { ButtonRounded } from "../buttons";


const textoAnimado = ["Desarrollador FullStack", "Desarrollador Frontend", "Desarrollador Web"]
function Inicio() {

    const [posicionFraseActual, setPosicionFraseActual] = useState(0);
    const [characterByCharacter, setCharacterByCharacter] = useState("")
    const [borrando, setBorrando] = useState(false);


    useEffect(() => {
        const frase = textoAnimado[posicionFraseActual];

        let timeoutId: ReturnType<typeof setTimeout>;

        if (!borrando) {
            if (characterByCharacter.length < frase.length) {
                timeoutId = setTimeout(() => {
                    setCharacterByCharacter(frase.slice(0, characterByCharacter.length + 1));
                }, 100);
            } else {
                timeoutId = setTimeout(() => {
                    setBorrando(true);
                }, 1000); // Espera antes de empezar a borrar
            }
        } else {
            if (characterByCharacter.length > 0) {
                timeoutId = setTimeout(() => {
                    setCharacterByCharacter(frase.slice(0, characterByCharacter.length - 1));
                }, 50); // Velocidad de borrado (puede ser más rápida)
            } else {
                setBorrando(false);
                setPosicionFraseActual((prev) =>
                    prev < textoAnimado.length - 1 ? prev + 1 : 0
                );
            }
        }

        return () => clearTimeout(timeoutId);
    }, [characterByCharacter, borrando, posicionFraseActual]);

    return (
        <>
            <div className="w-full h-96 flex flex-col pt-24 pl-8  hidden md:flex">
                <h1 className="font-lilita-custom md:text-6xl text-4xl">
                    MARIEL DRUETTA
                </h1>
                <div className="pt-8 ">
                    <h2
                        key={characterByCharacter}
                        className="text-[#f7a35c] text-2xl text-center w-2/5 special-elite-text"
                    >
                        {characterByCharacter}
                        <span className="ml-1 animate-pulse">|</span>
                    </h2>

                </div>
                <div className="w-2/5 pt-8 flex justify-center">
                    <ButtonRounded
                        href="/Mariel Druetta - CV - Front End.pdf"
                        download text="Descargar CV"
                    />
                </div>
              
            </div>
            <div className="w-full h-96 flex flex-col items-center justify-center  px-4 text-center md:hidden">
                <h1 className="font-lilita-custom text-4xl">MARIEL DRUETTA</h1>

                <div className="pt-6">
                    <h2 className="text-rose-500 text-base special-elite-text">
                        {characterByCharacter}<span className="ml-1 animate-pulse">|</span>
                    </h2>
                </div>

                <div className="pt-6">
                    <ButtonRounded href="/Mariel Druetta - CV - Front End.pdf" download text="Descargar CV" />
                </div>
            </div>
        </>
    )
}

export default Inicio;