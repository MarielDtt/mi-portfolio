import Image from "next/image";

function NotFound() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#D7F4F7] to-[#FDE8D7] dark:bg-[#1a1a1a] flex items-center justify-center">
            <div className="relative w-[320px] md:w-[500px]">
                {/* Imagen de la TV */}
                <Image src="/tv.png" alt="television" width={600} height={340} className="w-full h-auto" />

                {/* Video adentro */}
                <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute top-[33%] left-[21%] w-[55%] h-[42%] object-cover rounded-md"
                />
            </div>
        </div>
    );
}

export default NotFound;
