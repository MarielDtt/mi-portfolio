/* eslint-disable @next/next/no-img-element */
"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    //Button,
    Tooltip,
    //IconButton,
} from "@material-tailwind/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { imagenesProyectos } from "@/utils/imagenesProyectos"
import Carrusel from "./carrusel"


export function BookingCard() {
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
            className="w-full max-w-[26rem] bg-transparent shadow-[0_0_25px_rgba(255,182,193,0.8)]"
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
        >
            <div className="flex items-center justify-between">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-lilita-custom font-thin w-full justify-center items-center flex mt-4"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    PetApp
                </Typography>

            </div>
            <CardHeader
                floated={false} color="blue-gray"
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
            >
               <Carrusel imagenes={imagenesProyectos.petApp} />

            </CardHeader>
            <CardBody
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
            >
                <div
                    className="relative max-h-[150px] overflow-y-auto hide-scrollbar mx-4 mt-4 pb-8"
                    onScroll={handleScrollDescripcion}
                >

                    <Typography
                        color="gray"
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                        className="mt-2 mx-4 text-justify"
                    >
                        Aplicación web orientada al bienestar animal. PetApp ofrece un espacio donde los usuarios pueden registrarse, iniciar sesión y solicitar turnos para servicios veterinarios o relacionados al cuidado de sus mascotas.
                        Participé tanto en el desarrollo del frontend como del backend, implementando interfaces responsivas y una experiencia de usuario simple y clara. También trabajé en la lógica de autenticación, gestión de usuarios y sistema de turnos.

                    </Typography>
                </div>
                <div>

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
                    <Tooltip content="Express">
                        <span className="cursor-pointer">
                            <img src="/express.png" alt="Express" className="w-10 h-10" />
                        </span>
                    </Tooltip>
                    <Tooltip content="TypeScript">
                        <span className="cursor-pointer">
                            <img src="/ts.png" alt="typescript" className="w-10 h-10" />
                        </span>

                    </Tooltip>
                    <Tooltip content="TypeOrm">
                        <span className="cursor-pointer">
                            <img src="/typeOrm.png" alt="typeorm" className="w-10 h-10" />
                        </span>
                    </Tooltip>
                    <Tooltip content="React">
                        <span className="cursor-pointer">
                            <img src="/react.png" alt="react" className="w-10 h-10" />
                        </span>
                    </Tooltip>
                    <Tooltip content="Vite">
                        <span className="cursor-pointer">
                            <img src="/vite.png" alt="vite" className="w-10 h-10" />
                        </span>
                    </Tooltip>
                </div>
            </CardBody>
            {/* <CardFooter
                className="pt-3"
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
            >
                <Button
                    size="lg"
                    fullWidth={true}
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    Ver Proyecto
                </Button>
            </CardFooter> */}
        </Card>
    );
}