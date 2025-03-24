import Image from "next/image";


function Navbar() {

    return (
        <nav className="w-[90%] h-16 border-white/20 sticky top-2 z-50 bg-white/10 backdrop-blur-lg rounded-xl mt-4 mx-auto shadow-md px-6 py-3">
            <div className="pl-4">
                <Image src="/Logo.png" alt="logo"  width={48} height={48}/>
            </div>
            <div className="flex">
                <ul>Inicio</ul>
                <ul>Proyectos</ul>
                <ul>Tecnologías</ul>
                <ul>Sobre mí</ul>
                <ul>Contacto</ul>
            </div>
        </nav>
    )
}

export default Navbar;