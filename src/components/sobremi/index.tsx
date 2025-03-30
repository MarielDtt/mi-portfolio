import Image from "next/image";

function SobreMi() {

    return (
        <>
            <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">¿Y quién lanza las pelotitas? Yo </h1>

            <div className="flex pl-4 mt-4 flex-col md:flex-row">
                <Image src="/perfil.jpg"
                    alt="foto perfil"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="hidden md:block w-64 h-64 rounded-full"
                />

                <Image src="/perfil.jpg"
                    alt="foto perfil"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="block md:hidden mx-auto w-40 h-40 rounded-full"
                />
                <div className="overflow-y-auto md:overflow-visible">
                    <p className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify">
                        Soy Mariel, desarrolladora web con formación en Frontend y una pasión enorme por crear experiencias únicas.
                        Aprendí a lanzar pelotitas de código en distintos proyectos, y cada una fue tomando forma: diseño, funcionalidad, interacción.
                        Vengo de otro mundo profesional, pero encontré en la tecnología un espacio donde mi creatividad puede explotar (¡con glitter pastel, por supuesto!).

                    </p>

                    <p className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify">
                        Me encantan los gatos, tengo dos: Galileo Galilei y Davinci, y soy muy fan de Los Simpsons.
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