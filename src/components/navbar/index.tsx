"use client";
import Image from "next/image";
import { MenuSandwich } from "../menuSandwich";


function Navbar() {



    return (

        <nav className="w-[90%] sticky top-4 z-50 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl mt-4 shadow-md ">
            <div className="mx-auto h-16 flex justify-between items-center px-4">
                <a href="#inicio" className="hover:text-white  hidden md:flex">
                    <Image src="/Logo.png" alt="logo" width={48} height={48} />
                </a>
                <ul className="gap-6 font-semibold hidden md:flex">
                    <li><a href="#inicio"  className="transition-colors duration-300 hover:text-[#f7a35c]">Inicio</a></li>
                    <li><a href="#proyectos"  className="transition-colors duration-300 hover:text-[#f7a35c]">Proyectos</a></li>
                    <li><a href="#tecnologias"  className="transition-colors duration-300 hover:text-[#f7a35c]">Tecnologías</a></li>
                    <li><a href="#sobremi"  className="transition-colors duration-300 hover:text-[#f7a35c]">Sobre mí</a></li>
                    <li><a href="#contacto"  className="transition-colors duration-300 hover:text-[#f7a35c]">Contacto</a></li>
                </ul>
                <div className="block md:hidden items-center relative">
                    <MenuSandwich />
                </div>
            </div>
        </nav>

    )
}

export default Navbar;