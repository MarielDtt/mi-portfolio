import Image from "next/image";
type ImagenTecnologia = {
    id: number;
    img: string;
};

const imagenes: ImagenTecnologia[] = [
    {
        id: 1,
        img: "/react.png"
    },
    {
        id: 2,
        img: "/mongo.png"
    },
    {
        id: 3,
        img: "/next.png"
    },
    {
        id: 4,
        img: "/js.png"
    },
    {
        id: 5,
        img: "/node-express.png"
    },
    {
        id: 6,
        img: "/postgreSQL.png"

    },
    {
        id: 7,
        img: "/tailwind.png"
    },
    {
        id: 8,
        img: "/ts.png"
    }
]

function Tecnologias() {

    return (
        <>
            <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">Tecnologías que hacen la magia</h1>
            <p className="font-poppins-custom mx-8 mt-2 text-base md:text-lg leading-relaxed text-justify">Ya aprendí a manejar este panel de tecnologías sin provocar un desastre nuclear ☢️</p>
            <p className="font-poppins-custom mx-8 mt-2 text-base md:text-lg leading-relaxed text-justify">Pero ojo… ¡esto recién empieza!</p>
            <p className="font-poppins-custom mx-8 mt-2 text-base md:text-lg leading-relaxed text-justify">Estoy constantemente sumando nuevas habilidades.</p>

            <div className="relative flex items-center mt-8">
                <div id="Slider" className="mx-auto">
                    {imagenes.map((item) => (
                        <Image className="w-[100px] inline-block p-2 cursor-pointer hover:scale-150 ease-in-out duration-300" key={item.id} src={item.img} alt="/" width={100} height={64} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tecnologias;