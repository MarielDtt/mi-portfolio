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
                <div className="cursor-pointer text-[#f7a35c]">
                    <SquareMenu />
                </div>
            </MenuHandler>
            <MenuList
                className="w-48 p-2 rounded-xl bg-white/20 backdrop-blur-md shadow-lg z-50 border border-[#f7a35c]"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
            >
                <MenuItem
                    className="border-b border-[#f7a35c] last:border-none rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <a href="#inicio"> Inicio </a>
                </MenuItem>
                <MenuItem
                    className="border-b border-[#f7a35c] last:border-none rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <a href="#proyectos">Proyectos</a>
                </MenuItem>
                <MenuItem
                    className="border-b border-[#f7a35c] last:border-none rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <a href="#tecnologias"> Tecnologías </a>
                </MenuItem>
                <MenuItem className="border-b border-[#f7a35c] last:border-none rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <a href="#sobremi"> Sobre mí </a>
                </MenuItem>
                <MenuItem className="border-b border-[#f7a35c] last:border-none rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                >
                    <a href="#contacto"> Contacto </a>
                </MenuItem>
            </MenuList>
        </Menu >
    );
}
