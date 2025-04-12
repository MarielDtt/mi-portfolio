import { Circle, Music4 } from 'lucide-react';
import WhatsAppIcon from "../icons/whatsApp";
import Link from 'next/link';

function FloatingSidebar() {
    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 hidden sm:flex flex-col items-center gap-6 mr-4">

            <Link href="/">
                <div className="group relative">
                    <div className="bg-white/30 rounded-full p-2 backdrop-blur-sm shadow-[0_0_25px_rgba(255,182,193,0.8)] hover:scale-150 transition-transform duration-300 ease-in-out">
                        <Circle color="#000000" strokeWidth={1.5} size={15} />
                    </div>
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Burbujas de Inicio
                    </span>
                </div>
            </Link>

            {/* Playlist */}
            <a href="https://youtube.com/playlist?list=PLTQB9sNwVGZ_w-og1OMhgNrD3egeZYApC&si=MkK0nB11rRFYZcLq" target="_blank" rel="noopener noreferrer">
                <div className="group relative">
                    <div className="bg-white/30 rounded-full p-2 backdrop-blur-sm shadow-[0_0_25px_rgba(255,182,193,0.8)] hover:scale-150 transition-transform duration-300 ease-in-out">
                        <Music4 color="#000000" strokeWidth={1.5} size={15} />
                    </div>
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Mi Playlist
                    </span>
                </div>
            </a>

            {/* WhatsApp */}
            <a href="https://api.whatsapp.com/send?phone=5491166603916" target="_blank" rel="noopener noreferrer">
                <div className="group relative">
                    <div className="bg-white/30 rounded-full p-2 backdrop-blur-sm shadow-[0_0_25px_rgba(255,182,193,0.8)] hover:scale-150 transition-transform duration-300 ease-in-out">
                        <WhatsAppIcon className="text-black w-4 h-4" />
                    </div>
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Contactame
                    </span>
                </div>
            </a>
        </div>
    )
}

export default FloatingSidebar;
