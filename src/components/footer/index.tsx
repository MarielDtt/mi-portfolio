import Image from "next/image";
import { Mail, Linkedin } from 'lucide-react';
import WhatsAppIcon from "../icons/whatsApp";
import GitHubIcon from "../icons/gitHub";



function Footer() {
    return (
        <footer className="flex flex-wrap justify-between items-center bg-[#b5ead7] w-[90%] rounded-xl py-2 mt-2 text-center">
            <div className="flex flex-col font-semibold pl-4">
                <h1 className="font-bold text-start">Secciones</h1>
                <div className="w-42 rounded-full border-t border-[#f7a35c] pt-2" />

                <div className="flex text-base text-start">
                    <div className="pr-4">
                        <p className="pb-2">
                            <a href="#inicio" className="transition-colors duration-300 hover:text-[#f7a35c]">Inicio</a>
                        </p>
                        <p className="pb-2">
                            <a href="#proyectos" className="transition-colors duration-300 hover:text-[#f7a35c]">Proyectos</a>
                        </p>
                        <p className="pb-2">
                            <a href="#tecnologias" className="transition-colors duration-300 hover:text-[#f7a35c]">Tecnologías</a>
                        </p>
                    </div>
                    <div>
                        <p className="pb-2">
                            <a href="#sobremi" className="transition-colors duration-300 hover:text-[#f7a35c]">Sobre mí</a>
                        </p>
                        <p className="pb-2">
                            <a href="#contacto" className="transition-colors duration-300 hover:text-[#f7a35c]">Contacto</a>
                        </p>
                    </div>

                </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <Image src="/Logo.png" alt="logo" width={92} height={92} />
            </div>



            <div className="flex flex-col font-semibold pr-4">

                <h1 className="font-bold text-start">¡Toc, Toc! Estoy acá</h1>
                <div className="w-42 rounded-full border-t border-[#f7a35c] pt-2" />

                <div className="flex flex-col text-center items-center gap-8 mt-2">
                    <div className=" flex gap-x-8">
                        <p className="hover:scale-150 transition-transform duration-300 ease-in-out" >
                            <a href="mailto:marieldruetta@gmail.com">
                                <Mail color="#ff99cc" strokeWidth={1.5} absoluteStrokeWidth />
                            </a>
                        </p>
                        <p className="hover:scale-150 transition-transform duration-300 ease-in-out" >
                            <a href="https://api.whatsapp.com/send?phone=5491166603916" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon className="text-[#25D366]" />
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-x-8">
                        <p className="hover:scale-150 transition-transform duration-300 ease-in-out">
                            <a href="https://github.com/MarielDtt" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="text-black" />
                            </a>
                        </p>
                        <p className="hover:scale-150 transition-transform duration-300 ease-in-out">
                            <a href="https://www.linkedin.com/in/mariel-druetta-dev/" target="_blank" rel="noopener noreferrer">
                                <Linkedin color="#0077b5" strokeWidth={1.5} absoluteStrokeWidth />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;