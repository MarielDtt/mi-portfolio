import Image from "next/image";


function Footer() {
    return (
        <div className="flex justify-between bg-[#b5ead7] h-24 w-[90%] rounded-xl py-2 mt-2 text-center">
            <div className="flex flex-col font-semibold pl-4">
                <h1 className="font-bold text-start">Secciones</h1>
                <div className="w-32 rounded-full border-t border-[#f7a35c] pt-2" />

                <div className="flex text-xs text-start">
                    <div className="pr-4">
                        <p>
                            <a href="#inicio" className="transition-colors duration-300 hover:text-[#f7a35c]">Inicio</a>
                        </p>
                        <p>
                            <a href="#proyectos" className="transition-colors duration-300 hover:text-[#f7a35c]">Proyectos</a>
                        </p>
                        <p>
                            <a href="#tecnologias" className="transition-colors duration-300 hover:text-[#f7a35c]">Tecnologías</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a href="#sobremi" className="transition-colors duration-300 hover:text-[#f7a35c]">Sobre mí</a>
                        </p>
                        <p>
                            <a href="#contacto" className="transition-colors duration-300 hover:text-[#f7a35c]">Contacto</a>
                        </p>
                    </div>

                </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <Image src="/Logo.png" alt="logo" width={96} height={96} />
            </div>

            <div>
                <p>Icono Mail</p>
                <p>Icono Telefono</p>
                <p>Icono GitHub </p>
                <p>Icono pnkedin </p>
            </div>
        </div>
    );
}

export default Footer;