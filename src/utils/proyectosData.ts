import { imagenesProyectos } from "./imagenesProyectos";

export const proyectosData = [
    {
        titulo: "PetApp",
        descripcion: "Aplicación web orientada al bienestar animal. PetApp ofrece un espacio donde los usuarios pueden registrarse, iniciar sesión y solicitar turnos para servicios veterinarios o relacionados al cuidado de sus mascotas. Participé tanto en el desarrollo del frontend como del backend, implementando interfaces responsivas y una experiencia de usuario simple y clara. También trabajé en la lógica de autenticación, gestión de usuarios y sistema de turnos.",
        imagenes: imagenesProyectos.petApp,
        tecnologias: [
            { src: "/express.png", alt: "Express", tooltip: "Express" },
            { src: "/ts.png", alt: "TypeScript", tooltip: "TypeScript" },
            { src: "/typeOrm.png", alt: "TypeOrm", tooltip: "TypeOrm" },
            { src: "/react.png", alt: "React", tooltip: "React" },
            { src: "/vite.png", alt: "Vite", tooltip: "Vite" },
        ],
        deploy: ""
    },
    {
        titulo: "ByteBox",
        descripcion: "E-commerce de tecnología con diseño moderno y funcional. ByteBox permite explorar productos, iniciar sesión, ver compras y gestionar el perfil del usuario. Me enfoqué en el desarrollo del frontend, creando una interfaz responsive, intuitiva y atractiva. Trabajé con rutas protegidas, manejo de tokens y carga de imagen de perfil.",
        imagenes: imagenesProyectos.byteBox,
        tecnologias: [
            { src: "/next.png", alt: "next", tooltip: "Next" },
            { src: "/ts.png", alt: "TypeScript", tooltip: "TypeScript" },
            { src: "/tailwind.png", alt: "tailwind", tooltip: "Tailwind" },
            { src: "/material.png", alt: "material", tooltip: "MaterialTailwind" },
            { src: "/lucide.png", alt: "lucide", tooltip: "Lucide" },
            { src: "/sonner.png", alt: "sonner", tooltip: "Sonner" },
        ],
        deploy: ""
    },
    {
        titulo: "MobileCer",
        descripcion: "Aplicación web para gestión de arreglos de celulares. Mobile CER permite a técnicos visualizar órdenes, actualizar estados y ver detalles de cada reparación. Me enfoqué en el desarrollo del dashboard responsive, carga de imágenes y experiencia de usuario. Aprendí a trabajar en equipo, adaptándome a diseños existentes y aportando ideas para mejorar la interfaz.",
        imagenes: imagenesProyectos.mobileCer,
        tecnologias: [
            { src: "/next.png", alt: "next", tooltip: "Next" },
            { src: "/ts.png", alt: "TypeScript", tooltip: "TypeScript" },
            { src: "/tailwind.png", alt: "tailwind", tooltip: "Tailwind" },
            { src: "/lucide.png", alt: "lucide", tooltip: "Lucide" },
            { src: "/sonner.png", alt: "sonner", tooltip: "Sonner" },
            { src: "/zustand.png", alt: "zustand", tooltip: "Zustand" },
        ],
        deploy: "https://pffront-fawn.vercel.app/"

    },
]


export const proyectosRealesData = [
    {
        titulo: "Seguros Camporino",
        descripcion: "Landing page institucional creada para una empresa productora de seguros . El proyecto incluye una interfaz responsive, secciones informativas, formulario de contacto y estética personalizada según los valores de la marca. Fue desarrollado a medida en colaboración con el cliente, priorizando la claridad y la experiencia del usuario.",
        imagenes: imagenesProyectos.segurosCamporino,
        tecnologias: [
            { src: "/ts.png", alt: "TypeScript", tooltip: "TypeScript" },
            { src: "/next.png", alt: "next", tooltip: "Next" },
            { src: "/lucide.png", alt: "lucide", tooltip: "Lucide" },
            { src: "/motion.png", alt: "framer-motion", tooltip: "Motion" },
            { src: "/vercel.png", alt: "vercel", tooltip: "Vercel" },
        ],
        deploy: "https://www.seguroscamporino.com.ar",
        figma: "https://www.figma.com/design/YqE0PW8brpavCjUwOvXmRB/Seguros-Camporino?node-id=77-36&t=x2Sgp0VU6GVoRQo5-1"
    },

]
