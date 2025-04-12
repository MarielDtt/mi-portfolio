'use client'
import { useState } from "react";
import { ButtonRounded } from "../buttons";
import { validateContacto } from "../helpers/validateContacto"
import { Icontacto, IContactoError } from "./interfaceContacto";
import { toast } from 'sonner';
import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Form() {
    const formRef = useRef<HTMLFormElement>(null);

    const [input, setInput] = useState<Icontacto>({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });
    const [errors, setErrors] = useState<IContactoError>({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const [touchInput, setTouchInput] = useState<{ nombre: boolean; email: boolean, asunto: boolean, mensaje: boolean }>({
        nombre: false,
        email: false,
        asunto: false,
        mensaje: false
    });

    const [loading, setLoading] = useState(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        const { name, value } = event.target;

        const actualizaInput = {
            ...input,
            [name]: value
        }

        setInput(actualizaInput);

        setErrors(validateContacto(actualizaInput));
    }

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormInvalid) return;

        if (!formRef.current) return;
        setLoading(true)

        try {
            await emailjs.sendForm(
                'service_yf7hsuh',
                'template_7or20cg',
                formRef.current,
                'wgZGVEu3gI1xnB0Qu'
            );

            toast.success('¡Mensaje enviado con éxito!', {
                style: {
                    background: '#f7a35c',
                    color: '#FFFFFF',
                    border: '2px solid #f7a35c',
                    fontFamily: 'var(--font-poppins)',
                    textAlign: 'center',
                    minWidth: '200px',
                },
            });

            setInput({
                nombre: "",
                email: "",
                asunto: "",
                mensaje: ""
            });

            setTouchInput({
                nombre: false,
                email: false,
                asunto: false,
                mensaje: false
            });
            setLoading(false)

        } catch (error) {
            toast.error('Ouch, algo salió mal. 😓 Intentá de nuevo más tarde.', {
                style: {
                    background: '#f87171',
                    color: '#fff',
                    border: '2px solid #dc2626',
                    fontFamily: 'var(--font-poppins)',
                    textAlign: 'center',
                    minWidth: '200px',
                },
            });
            console.log(error)
            setLoading(false)
        }
    };


    const handleBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = event.target

        setTouchInput({
            ...touchInput,
            [name]: true
        })
        setErrors(validateContacto(input));
    }
    const isFormInvalid = Object.values(errors).some(error => error !== "") || Object.values(input).some(value => value === "");

    return (
        <>
            <p className="font-poppins-custom mx-8 text-base md:text-lg leading-relaxed text-justify pb-4">¡Hable más fuerte que tengo una toalla! O mejor complete el formulario</p>
            <form ref={formRef} onSubmit={handleOnSubmit} className="flex flex-col w-3/4 justify-center items-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
                    <label className="flex flex-col font-poppins-custom text-base w-full">
                        Nombre
                        <input
                            type="text"
                            className="h-8 w-full pl-2 font-poppins-custom text-xs bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md"
                            name="nombre"
                            value={input.nombre}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {touchInput.nombre && <p className="ml-2 text-xs text-red-600">{errors.nombre}</p>}
                    </label>

                    <label className="flex flex-col font-poppins-custom text-base w-full">
                        Correo Electrónico
                        <input
                            type="email"
                            className="h-8 w-full pl-2 font-poppins-custom text-xs bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md"
                            name="email"
                            value={input.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {touchInput.email && <p className="ml-2 text-xs text-red-600">{errors.email}</p>}
                    </label>

                    <label className="flex flex-col font-poppins-custom text-base w-full md:col-span-2">
                        Asunto
                        <select
                            className="bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md font-poppins-custom text-base pl-2 w-full"
                            name="asunto"
                            value={input.asunto}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                        >
                            <option value="">Seleccioná una opción</option>
                            <option value="contacto">Contacto Laboral</option>
                            <option value="felicitaciones">Felicitaciones</option>
                            <option value="consejos">Consejos</option>
                            <option value="otros">Otros</option>
                        </select>
                        {touchInput.asunto && <p className="ml-2 text-xs text-red-600">{errors.asunto}</p>}
                    </label>

                    <label className="flex flex-col font-poppins-custom text-base w-full md:col-span-2">
                        Mensaje
                        <textarea
                            rows={4}
                            className="bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md w-full text-base leading-normal pl-2 focus:outline-none"
                            value={input.mensaje}
                            name="mensaje"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        ></textarea>
                        {touchInput.mensaje && <p className="ml-2 text-xs text-red-600">{errors.mensaje}</p>}
                    </label>
                </div>

                <div className="mt-4">
                    <ButtonRounded
                        text="Enviar"
                        disabled={isFormInvalid || loading}
                        className={`shadow-[0_0_25px_rgba(255,182,193,0.8)] ${isFormInvalid ? "opacity-50 cursor-not-allowed" : ""}`}
                        loading={loading}
                    />
                </div>
            </form>
        </>

    )
}

export default Form;