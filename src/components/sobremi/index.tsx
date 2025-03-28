import Image from "next/image";

function SobreMi() {

    return (
        <>
            <h1>¿Y quién lanza las bolitas? Yo </h1>
            <Image src="/perfil.jpg" alt="foto perfil" width={64} height={64} className="rounded-full" />
            <p>Soy Mariel, desarrolladora web con formación en Frontend y una pasión enorme por crear experiencias únicas.
                Aprendí a lanzar bolitas de código en distintos proyectos, y cada una fue tomando forma: diseño, funcionalidad, interacción.
                Vengo de otro mundo profesional, pero encontré en la tecnología un espacio donde mi creatividad puede explotar (¡con glitter pastel, por supuesto!).

                Me encantan los gatos —tengo dos: Galileo Galilei y Davinci— y soy muy fan de Los Simpsons.
                Me entusiasma resolver problemas, trabajar en equipo y seguir aprendiendo.
                ¿Vamos a lanzar algunas ideas juntos?</p>
            <Image src="/gatos.jpeg" alt="foto gatos" width={72} height={72} />
            <Image src="/simpsons.webp" alt="foto simpsons" width={72} height={72} />
        </>
    )
}

export default SobreMi