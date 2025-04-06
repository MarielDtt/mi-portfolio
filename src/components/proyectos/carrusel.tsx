import * as React from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"


const animation = { duration: 35000, easing: (t: number) => t }
type CarruselProps = {
    imagenes: string[]
}

export default function Carrusel({ imagenes }: CarruselProps) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
        <div ref={sliderRef} className="keen-slider">
            {imagenes.map((src, index) => (
                <div key={index} className="keen-slider__slide flex justify-center items-center">
                    <Image
                        src={src}
                        alt={`Imagen del carrusel ${index + 1}`}
                        width={500}
                        height={500}
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>
            ))}

        </div>
    )
}
