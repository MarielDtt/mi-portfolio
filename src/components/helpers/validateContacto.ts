import { IContactoError } from "../form/interfaceContacto"

export const validateContacto = (input: IContactoError) => {
    const errors: IContactoError = {nombre: "", email:"", asunto: "", mensaje:""};

    const nameRegex = /^[A-Za-z]{1,29}\s[A-Za-z]{1,29}$/;   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const messageRegex = /^.{10,}$/;


    if(!input.nombre) {
        errors.nombre = "Campo Requerido"
    }else if(!nameRegex.test(input.nombre)){
        errors.nombre = "Nombre y Apellido Invalido, Formato Esperado: Solo Letras Nombre y Apellido"
    }

    if(!input.email) {
        errors.email = "Campo Requerido"
    }else if(!emailRegex.test(input.email)){
        errors.email = "Email Invalido, Formato Esperado: xxxx@xxxx.com.ar"
    }

    if (!input.asunto) {
        errors.asunto = "Debe seleccionar un motivo de contacto";
      }

      if (!input.mensaje) {
        errors.mensaje = "Campo Requerido";
      } else if (!messageRegex.test(input.mensaje.trim())) {
        errors.mensaje = "El mensaje debe tener al menos 10 caracteres";
      }

    return errors;
}