/* eslint-disable @next/next/no-img-element */
"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Carrusel from "./carrusel"
import { ButtonRounded } from "../buttons";

type CardProps = {
    titulo: string;
    descripcion: string;
    tecnologias: {
        src: string;
        alt: string;
        tooltip: string;
    }[];
    imagenes: string[];
    deploy?: string;
    figma?: string
};

function CardProyect({ titulo, descripcion, tecnologias, imagenes, deploy, figma }: CardProps) {
    const [estaEnElFinal, setEstaEnElFinal] = useState(false);

    const handleScrollDescripcion = (event: React.UIEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        if (target.scrollTop + target.clientHeight >= target.scrollHeight - 10) {
            setEstaEnElFinal(true);
        } else {
            setEstaEnElFinal(false);
        }
    };

    return (
        <Card
            className="min-w-[18rem] max-w-[20rem] flex-shrink-0 bg-transparent shadow-[0_0_25px_rgba(255,182,193,0.8)]"
            placeholder
            onPointerEnterCapture
            onPointerLeaveCapture
        >
            <div className="flex items-center justify-between">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-lilita-custom font-thin w-full justify-center items-center flex mt-4"
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
                >
                    {titulo}
                </Typography>
            </div>

            <CardHeader
                floated={false}
                color="blue-gray"
                placeholder
                onPointerEnterCapture
                onPointerLeaveCapture
            >
                <Carrusel imagenes={imagenes} />
            </CardHeader>

            <CardBody
                placeholder
                onPointerEnterCapture
                onPointerLeaveCapture
            >
                <div
                    className="relative max-h-[150px] overflow-y-auto hide-scrollbar mx-4 mt-4 pb-8"
                    onScroll={handleScrollDescripcion}
                >
                    <Typography
                        color="gray"
                        className="mt-2 mx-4 text-justify"
                        placeholder
                        onPointerEnterCapture
                        onPointerLeaveCapture
                    >
                        {descripcion}
                    </Typography>
                    {deploy ? (
                        <div className="mt-2">
                            <ButtonRounded text="Ver Proyecto" href={deploy} className="w-28 h-10 text-base"   target="_blank"rel= "noopener noreferrer"/>
                        </div>
                    ) : null}
                     {figma ? (
                        <div className="mt-2">
                            <ButtonRounded text="Ver Figma" href={figma} className="w-28 h-10 text-base"   target="_blank"rel= "noopener noreferrer"/>
                        </div>
                    ) : null}
                </div>

                <div className="w-3/4 mx-auto h-6 bg-gradient-to-t from-[rgba(255,182,193,0.8)] to-transparent pointer-events-none mt-[-1rem]"></div>

                {estaEnElFinal ? (
                    <ChevronUp
                        size={20}
                        className="mx-auto mt-[-1rem] text-black opacity-75 animate-bounce pointer-events-none"
                    />
                ) : (
                    <ChevronDown
                        size={20}
                        className="mx-auto mt-[-1rem] text-black opacity-75 animate-bounce pointer-events-none"
                    />
                )}


                <div className="group mt-8 inline-flex flex-wrap items-center justify-center w-full gap-3">
                    {tecnologias.map((tech, index) => (
                        <Tooltip key={index} content={tech.tooltip}>
                            <span className="cursor-pointer">
                                <img src={tech.src} alt={tech.alt} className="w-10 h-10" />
                            </span>
                        </Tooltip>
                    ))}
                </div>


            </CardBody>

        </Card>
    );
}

export default CardProyect;
