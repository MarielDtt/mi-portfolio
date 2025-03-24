import Image from "next/image";


function Navbar() {

    return (
        <nav className="w-[90%] h-16 border-white/20 sticky top-2 z-50 bg-white/10 backdrop-blur-lg rounded-xl mt-4 mx-auto shadow-md px-6 py-3">
            <div className="flex justify-between w-full">
                <div>
                    <a href="#inicio" className="hover:text-white">
                        <Image src="/Logo.png" alt="logo" width={48} height={48} />
                    </a>
                </div>
                <div className="flex">
                    <ul className="flex gap-4 font-semibold self-center ">
                        <li>
                            <a href="#inicio" className="hover:text-white">Inicio</a>
                        </li>
                        <li>
                            <a href="#proyectos" className="hover:text-white">Proyectos</a>
                        </li>
                        <li>
                            <a href="#tecnologias" className="hover:text-white">Tecnologías</a>
                        </li>
                        <li>
                            <a href="#sobremi" className="hover:text-white">Sosbre mí</a>
                        </li>
                        <li>
                            <a href="#contacto" className="hover:text-white">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;