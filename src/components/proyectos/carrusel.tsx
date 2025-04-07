'use client'
import * as React from "react"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

type CarruselProps = {
    imagenes: string[]
}

export default function Carrusel({ imagenes }: CarruselProps) {
    const [posicionSlider, setPosicionSlider] = useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        slideChanged(s) {
            setPosicionSlider(s.track.details.rel)
        },
    })

    const esPrimera = posicionSlider === 0
    const esUltima = posicionSlider === imagenes.length - 1

    return (
        <div className="relative h-fit">
            <div ref={sliderRef} className="keen-slider">
                {imagenes.map((src, index) => (
                    <div key={index} className="keen-slider__slide flex justify-center items-center mx-1">
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

            {!esPrimera && (
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-black animate-bounce"
                    onClick={() => slider.current?.prev()}
                >
                    <ChevronLeft size={24} />
                </button>
            )}

            {!esUltima && (
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-black animate-bounce"
                    onClick={() => slider.current?.next()}
                >
                    <ChevronRight size={24} />
                </button>
            )}
        </div>
    )
}
