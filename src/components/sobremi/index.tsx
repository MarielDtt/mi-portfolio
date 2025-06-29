"use client"

import Image from "next/image";
import { useState, useEffect } from "react";


const imagenes: string[] = [
    "/perfil.jpg",
    "/simpsons.png",
    "/lapiz.png",
    "/manga.png",
    "/ghibli.png"
]
function SobreMi() {
    const [imagenEnPantalla, setImagenEnPantalla] = useState(0)
    const [imagenGirando, setImagenGirando] = useState(false)

    useEffect(() => {
        if (imagenEnPantalla !== 0) {
            const timeoutId = setTimeout(() => {
                setImagenEnPantalla(0)
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [imagenEnPantalla]);

    const handleChangeImagenClick = () => {

        setImagenEnPantalla((prev) =>
            prev === imagenes.length - 1 ? 0 : prev + 1
        );
    }
    const handleGiroImagenClick = () => {

        setImagenGirando(true)
        setTimeout(() => {
            handleChangeImagenClick()
            setImagenGirando(false);
        }, 500);
    }
    return (
        <>
            <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">¿Y quién lanza las pelotitas? Yo </h1>

            <div
                className="flex pl-4 mt-4 flex-col md:flex-row cursor-pointer"
            >

                <div
                    className={`relative group rounded-full w-132 h-48 hidden md:block shadow-[0_0_15px_rgba(255,182,193,0.4)] hover:shadow-[0_0_25px_rgba(255,182,193,0.8)] transition-shadow duration-300 ${imagenGirando ? "animate-flip" : ""
                        }`}
                    onClick={handleGiroImagenClick}>

                    <Image src={imagenes[imagenEnPantalla]}
                        alt="foto perfil"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" w-full h-full rounded-full"

                    />
                    <Image
                        src="/brillo-uno.png"
                        alt="brillos decorativos"
                        width={92}
                        height={92}
                        className="absolute top-0 left-0  w-24 h-24 animate-pulse pointer-events-none"
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <Image
                            src="/brillo-dos.png"
                            alt="brillos decorativos"
                            width={92}
                            height={92}
                            className="absolute bottom-2 left-2  w-18 h-18 animate-pulse"
                        />
                        <Image
                            src="/brillo-tres.png"
                            alt="brillos decorativos"
                            width={92}
                            height={92}
                            className="absolute top-20 right-0  w-16 h-16 animate-pulse"
                        />
                    </div>

                </div>
                <div
                    className={`rounded-full w-40 h-40 md:hidden mx-auto shadow-[0_0_15px_rgba(255,182,193,0.4)] hover:shadow-[0_0_25px_rgba(255,182,193,0.8)] transition-shadow duration-300 relative ${imagenGirando ? "animate-flip" : ""
                        }`}
                    onClick={handleGiroImagenClick}
                    onTouchStart={handleGiroImagenClick}>
                    <Image src={imagenes[imagenEnPantalla]}
                        alt="foto perfil"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" w-full h-full rounded-full z-0"

                    />

                    <Image
                        src="/brillo-uno.png"
                        alt="brillos decorativos"
                        width={92}
                        height={92}
                        className="absolute top-0 left-0  w-12 h-12 animate-pulse"
                    />
                </div>


                <div className="overflow-y-auto md:overflow-visible">
                    <p className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify">
                        Soy Mariel, desarrolladora web con formación en Frontend y una pasión enorme por crear experiencias únicas.
                        Aprendí a lanzar pelotitas de código en distintos proyectos, y cada una fue tomando forma: diseño, funcionalidad, interacción.
                        Vengo de otro mundo profesional, pero encontré en la tecnología un espacio donde mi creatividad puede explotar (¡con glitter pastel, por supuesto!).

                    </p>

                    <p className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify">
                        Me encantan los gatos, tengo dos: Galileo Galilei y Da Vinci, y soy muy fan de Los Simpsons.
                        Me entusiasma resolver problemas, trabajar en equipo y seguir aprendiendo.
                    </p>
                    <p className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify">
                        ¿Vamos a lanzar algunas ideas juntos?
                    </p>

                </div>

            </div>
        </>
    )
}

export default SobreMi