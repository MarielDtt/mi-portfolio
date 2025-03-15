"use client"
import { useEffect } from "react";
import { SnowParticles } from "../utils/SnowParticles"

export default function Page() {
    useEffect(() => {
        SnowParticles();
    }, []); // Se ejecuta solo una vez al montar la página

    return (
        <main>
      
        </main>
    );
}
