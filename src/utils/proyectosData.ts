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
        ]
    },
    {
        titulo: "ByteBox",
        descripcion: "E-commerce de tecnología con diseño moderno y funcional. ByteBox permite explorar productos, iniciar sesión, ver compras y gestionar el perfil del usuario. Me enfoqué en el desarrollo del frontend, creando una interfaz responsive, intuitiva y atractiva. Trabajé con rutas protegidas, manejo de tokens y carga de imagen de perfil.",
        imagenes: imagenesProyectos.byteBox,
        tecnologias: [
            { src: "/next.png", alt: "next", tooltip: "Next" },
            { src: "/react.png", alt: "React", tooltip: "React" },
            { src: "/ts.png", alt: "TypeScript", tooltip: "TypeScript" },
            { src: "/tailwind.png", alt: "tailwind", tooltip: "Tailwind" },
            { src: "/material.png", alt: "material", tooltip: "MaterialTailwind" },
            { src: "/lucide.png", alt: "lucide", tooltip: "Lucide" },
            { src: "/sonner.png", alt: "sonner", tooltip: "Sonner" },
        ]
    },

]
