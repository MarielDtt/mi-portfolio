import { Globe, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import WhatsAppIcon from "../icons/whatsApp";
import GitHubIcon from "../icons/gitHub";

function Contacto() {

    return (
        <>
            <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">Contacto</h1>

            <h2 className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify pb-4">Una chispa, una idea, una charla. Todo empieza con un mensaje.</h2>

            <div className="flex flex-col md:flex-row gap-8 pb-8 md:pb-12 ">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center items-center w-full md:w-1/2 mx-auto ">
                    <div className="flex flex-col items-center">
                        <MapPin size={48} color="#f7a35c" absoluteStrokeWidth />
                        <p className="font-bold pt-2">Ubicacion</p>
                        <p>Argentina - C.A.B.A</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Mail size={48} color="#f7a35c" absoluteStrokeWidth />
                        <p className="font-bold pt-2">Email</p>
                        <p>marieldruetta@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <PhoneCall size={48} color="#f7a35c" absoluteStrokeWidth />
                        <p className="font-bold pt-2">Teléfonos</p>
                        <p>54-11-66603916</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Globe size={48} color="#f7a35c" absoluteStrokeWidth />
                        <p className="font-bold pt-2">Contacto</p>
                        <div className="flex gap-4">
                            <a href="https://api.whatsapp.com/send?phone=5491166603916" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon className="text-black mt-2 hover:scale-150 transition-transform duration-300 ease-in-out" />
                            </a>
                            <a href="https://github.com/MarielDtt" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="text-black mt-2 hover:scale-150 transition-transform duration-300 ease-in-out" />
                            </a>
                            <a href="https://www.linkedin.com/in/mariel-druetta-dev/" target="_blank" rel="noopener noreferrer">
                                <Linkedin color="#000000" strokeWidth={1.5} absoluteStrokeWidth className="mt-2 hover:scale-150 transition-transform duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 hidden md:block">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.2747114119!2d-58.51587114103547!3d-34.615795932890286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1743395541646!5m2!1ses!2sar"
                        className="w-[90%] h-[200px] md:h-[250px] rounded-2xl shadow-[0_0_25px_rgba(255,182,193,0.8)] mx-auto"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Contacto;