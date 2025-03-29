import Image from "next/image";

function Footer () {

    return(
        <div className="flex bg-[#b5ead7] h-24 w-[90%] rounded-xl mx-auto py-4 mt-4 text-center text-sm text-gray-700">
            <div className="flex ">
                Secciones
                <p>Inicio</p>
                <p>Proyectos</p>
                <p>Tecnologias</p>
                <p>Sobre Mi</p>
                <p>Contacto</p>
            </div>
            <div>
                <Image src="/Logo.png" alt="logo" width={48} height={48} />
             
            </div>
            <div>
                <p>Icono Mail</p>
                <p>Icono Telefono</p>
                <p>Icono GitHub </p>
                <p>Icono Linkedin </p>
            </div>

        </div>
    )
}

export default Footer;