import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,

} from "@material-tailwind/react";

import { SquareMenu } from 'lucide-react';


export function MenuSandwich() {
    return (
        <Menu>
            <MenuHandler>
                <div>
                    <SquareMenu />
                </div>
            </MenuHandler>
            <MenuList
                className="absolute w-42 p-2 rounded-xl bg-white/20 backdrop-blur-md shadow-lg z-50 border border-black"
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            >
                <MenuItem
                    className="border-b border-black last:border-none"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    Inicio
                </MenuItem>
                <MenuItem
                    className="border-b border-black last:border-none"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    Proyectos
                </MenuItem>
                <MenuItem
                    className="border-b border-black last:border-none"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    Tecnologías
                </MenuItem>
                <MenuItem
                    className="border-b border-black last:border-none"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    Sobre mí
                </MenuItem>
                <MenuItem
                    className="border-b border-black last:border-none"
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    Contacto
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
