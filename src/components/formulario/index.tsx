import { Input, Select, Option, Textarea } from "@material-tailwind/react";
import { ButtonRounded } from "../buttons";

function Form() {

    return (
        <>
            <div className="w-72">
                <Input
                    label="Nombre"
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    crossOrigin
                />
                <Input
                    label="Correo Electronico"
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    crossOrigin
                />
            </div>
            <div className="flex w-72 flex-col gap-6">
                <Select
                    variant="outlined"
                    label="Select Version"
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
                >
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                </Select>
            </div>
            <div className="w-96">
                <Textarea
                    label="Message"
                    onPointerEnterCapture
                    onPointerLeaveCapture
                />
            </div>
            <ButtonRounded text="Enviar"/>
        </>
    )
}

export default Form;