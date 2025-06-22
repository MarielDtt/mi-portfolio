'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

type ImagenTecnologia = {
  id: number;
  img: string;
};

const imagenes: ImagenTecnologia[] = [
  { id: 1, img: "/react.png" },
  { id: 2, img: "/mongo.png" },
  { id: 3, img: "/next.png" },
  { id: 4, img: "/js.png" },
  { id: 5, img: "/node-express.png" },
  { id: 6, img: "/postgreSQL.png" },
  { id: 7, img: "/tailwind.png" },
  { id: 8, img: "/ts.png" },
  { id: 9, img: "/vite.png" },
  { id: 10, img: "/css.png" },
  { id: 11, img: "/motion.png" },
  { id: 12, img: "/figma.png" },
];

function Tecnologias() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = 1;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollBy({ left: scrollStep, behavior: "smooth" });

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollTo({ left: 0, behavior: "auto" }); // reinicio invisible
      }
    }, 30); // más lento para que se deslice más natural

    return () => clearInterval(interval);
  }, []);

  const imagenesDuplicadas = [...imagenes, ...imagenes];

  return (
    <>
      <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">
        Tecnologías que hacen la magia
      </h1>
      <p className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify">
        Ya aprendí a manejar este panel de tecnologías sin provocar un desastre nuclear ☢️
      </p>
      <p className="font-poppins-custom mx-8 mt-2 text-base md:text-lg leading-relaxed text-justify">
        Pero ojo… ¡esto recién empieza!
      </p>
      <p className="font-poppins-custom mx-8 mt-2 text-base md:text-lg leading-relaxed text-justify">
        Estoy constantemente sumando nuevas habilidades.
      </p>

      <div className="relative flex items-center mt-8">
        <div
          ref={sliderRef}
          className="w-full max-w-[600px] mx-auto overflow-x-hidden whitespace-nowrap"
        >
          {imagenesDuplicadas.map((item, index) => (
            <Image
              key={`${item.id}-${index}`}
              src={item.img}
              alt={`logo ${item.id}`}
              width={100}
              height={64}
              className="inline-block m-3"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
