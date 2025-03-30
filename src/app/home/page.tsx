import Contacto from "@/components/contacto";
import Inicio from "@/components/inicio";
import Proyectos from "@/components/proyectos";
import SobreMi from "@/components/sobremi";
import Tecnologias from "@/components/tecnologias";

function Home() {

    return (

        <div className="w-[90%] mt-4">
            <section className="bg-radial-[at_50%_75%] from-[#D7F4F7] via-[#F8E0D7] to-[#FDE8D7] to-90%
             w-full h-96 rounded-xl" id="inicio">
                <Inicio/>
            </section>
            <section className="bg-radial-[at_50%_75%] from-[#FDE8D7] via-[#F8E0D7] to-[#D7F4F7] to-90%
             w-full h-96 mt-4 rounded-xl" id="proyectos">
                <Proyectos/>
            </section>
            <section className="bg-radial-[at_50%_75%] from-[#FDE8D7] via-[#FFE3F3] to-[#D7F4F7] to-90%
             w-full h-96 mt-4 rounded-xl" id="tecnologias">
                <Tecnologias/>
            </section>
            <section className="bg-radial-[at_50%_75%] from-[#D7F4F7] via-[#E6F4FA] to-[#FDE8D7] to-90%
            w-full md:h-96 h-auto mt-4 rounded-xl pb-4" id="sobremi">
               <SobreMi/>
            </section>
            <section className="bg-radial-[at_50%_75%] from-[#FDE8D7] via-[#ECE1F9] to-[#D7F4F7] to-90%gi w-full h-96 mt-4 mb-4 rounded-xl" id="contacto">
                <Contacto/>
            </section>
        </div>

    )
}

export default Home;