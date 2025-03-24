import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { SquareMenu } from "lucide-react";
import { useState, useEffect } from "react";

export function MenuSandwich() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (open) {
                setOpen(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Limpiar el evento al desmontar
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open]); 

    return (
        <Menu
            placement="bottom-end"
            open={open}
            handler={setOpen}
        >
            <MenuHandler>
                <div className="cursor-pointer">
                    <SquareMenu />
                </div>
            </MenuHandler>
            <MenuList
                className="w-48 p-2 rounded-xl bg-white/20 backdrop-blur-md shadow-lg z-50 border border-black"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
            >
                <MenuItem
                    className="border-b border-black last:border-none hover:bg-white/30 transition-colors duration-200 rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    Inicio
                </MenuItem>
                <MenuItem
                    className="border-b border-black last:border-none hover:bg-white/30 transition-colors duration-200 rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    Proyectos
                </MenuItem>
                <MenuItem
                    className="border-b border-black last:border-none hover:bg-white/30 transition-colors duration-200 rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    Tecnologías
                </MenuItem>
                <MenuItem className="border-b border-black last:border-none hover:bg-white/30 transition-colors duration-200 rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    Sobre mí
                </MenuItem>
                <MenuItem className="border-b border-black last:border-none hover:bg-white/30 transition-colors duration-200 rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    Contacto
                </MenuItem>
            </MenuList>
        </Menu >
    );
}
