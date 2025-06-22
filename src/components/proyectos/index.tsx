import { UnderlineTabs } from "./tabs";

function Proyectos() {

    return (
        <>
            <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">Ideas que rebotan y toman forma</h1>
            <h3 className="font-poppins-custom mx-8 my-4 text-base md:text-lg leading-relaxed text-justify">Una evolución construida a base de pequeñas ideas y mucho código.</h3>
            <h3 className="font-poppins-custom mx-8 my-4 text-base md:text-lg leading-relaxed text-justify">
                En <strong>No es un Simulacro</strong> podés ver trabajos reales realizados fuera del entorno académico (sí, acá supimos encontrar la tecla <strong>Cualquiera</strong> T7 E7 😅).
                <br />En <strong>Desde el Aula</strong>, te muestro proyectos creados durante mi etapa de formación, donde todo comenzó con ideas, errores y mucho aprendizaje.
            </h3>


            <UnderlineTabs />

        </>
    )

}

export default Proyectos;