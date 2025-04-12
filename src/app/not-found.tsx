import { ButtonRounded } from "@/components/buttons";
import Image from "next/image";

function NotFound() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#D7F4F7] to-[#FDE8D7] dark:bg-[#1a1a1a] flex flex-col items-center justify-center text-center px-4">
            
            {/* Televisor con video */}
            <div className="relative w-[320px] md:w-[500px]">
                <Image src="/tv.png" alt="television" width={600} height={340} className="w-full h-auto" />
                <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute top-[33%] left-[21%] w-[55%] h-[42%] object-cover rounded-md"
                />
            </div>

            <ButtonRounded text="Volver al inicio"  target="_self" rel="" className="shadow-[0_0_25px_rgba(255,182,193,0.8)]"href="/" />
        </div>
    );
}

export default NotFound;
