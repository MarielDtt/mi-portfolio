"use client"
import { useEffect, useState } from "react";
import { SnowParticles } from "../utils/SnowParticles"
import { ButtonRounded } from "@/components/buttons";
import { useRouter } from "next/navigation";




export default function Page() {
    const [loading, setLoading] = useState(false)

    const router = useRouter();
    useEffect(() => {
        const cleanup = SnowParticles(); 
        return () => {
            cleanup();
        };
    }, []);

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            router.push("/home");      
        }, 1500);
       
      };

    return (
        <main>
            <div className="flex flex-col items-center justify-center h-screen text-center gap-6">
                <h1 className="animate-fade text-2xl font-bold">
                    Todo gran proyecto comienza con una pequeña idea... Explorá mi mundo de código y creatividad
                </h1>
             
                    <ButtonRounded className="animate-fade-delay" text="Descubrilo" id="magic-button"  loading={loading} onClick={handleClick} />
                
            </div>
        </main>

    );
}
