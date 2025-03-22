"use client"
import { useEffect } from "react";
import { SnowParticles } from "../utils/SnowParticles"
import { ButtonRounded } from "@/components/buttons";

export default function Page() {
    useEffect(() => {
        SnowParticles();
    }, []); // Se ejecuta solo una vez al montar la página

    return (
        <main>
            <div className="flex flex-col items-center justify-center h-screen text-center gap-6">
                <h1 className="animate-fade text-2xl font-bold">
                    Todo gran proyecto comienza con una pequeña idea... Explorá mi mundo de código y creatividad
                </h1>
                <ButtonRounded className="animate-fade-delay"  text="Descubrilo..." id="magic-button"/>
            </div>
        </main>
      
    );
}
