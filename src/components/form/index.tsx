'use client'
import { ButtonRounded } from "../buttons";

function Form() {

    return (
        <>
            <p className="font-poppins-custom mx-8 text-base md:text-lg leading-relaxed text-justify pb-4">¡Hable más fuerte que tengo una toalla! O mejor complete el formulario</p>
            <form className="flex flex-col w-full justify-center items-center">
                <div className="flex w-1/2">
                    <label className="font-poppins-custom text-base pr-4"> Nombre
                        <input type="nombre" name="nombre" id="nombre" className="h-8 w-3/4 pl-2 font-poppins-custom text-xs bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md" />
                    </label>
                    <label className="font-poppins-custom text-base pr-4"> Correo Electronico
                        <input type="correo" name="correo" id="correo" className="h-8 w-3/4 pl-2 font-poppins-custom text-xs bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md" />
                    </label>
                </div>
                <div className=" mt-4 w-1/2 text-base">
                    <label className="flex flex-col font-poppins-custom text-base"> Asunto
                        <select className="bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-mdfont-poppins-custom text-base rounded-md pl-2 w-1/2">
                            <option value="valor1" ></option>
                            <option value="valor1">Contacto Laboral</option>
                            <option value="valor2">Felicitaciones</option>
                            <option value="valor3">Consejos</option>
                            <option value="valor3">Otros</option>
                        </select>
                    </label>
                </div>
                <div className="flex mt-4 w-1/2 text-base">
                    <label className="font-poppins-custom text-base"> Mensaje
                        <textarea  rows={3} className="bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] border-2 border-[#f7a35c] rounded-md w-full text-base leading-normal pl-2"></textarea>
                    </label>
                </div>
                <ButtonRounded text="Enviar" className="mt-4" />
            </form>
        </>

    )
}

export default Form;