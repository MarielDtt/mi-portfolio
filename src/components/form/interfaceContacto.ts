export interface Icontacto {
    nombre: string
    email: string,
    asunto:"" | "contacto" | "felicitaciones" | "consejos" | "otros";
    mensaje: string,
}

export interface IContactoError {
    nombre?: string;
    email?: string;
    asunto?: string;
    mensaje?: string;
  }