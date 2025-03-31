
function Contacto() {

    return (
        <>
            <h1 className="font-lilita-custom text-center pt-4 md:text-4xl text-2xl">Contacto</h1>

            <h2 className="font-poppins-custom mx-8 mt-4 text-base md:text-lg leading-relaxed text-justify pb-4">Una chispa, una idea, una charla. Todo empieza con un mensaje.</h2>

            <div className="flex flex-col md:flex-row gap-8 pb-8 md:pb-12">
                <div className="w-full md:w-1/2 space-y-4">

                    <div className="flex">
                        <p>Ciudad</p>

                        <p>Email</p>
                    </div>

                    <div>
                        <p>Telefonos</p>
                        <div>
                            <p>Links Redes</p>
                            <p>Hable mas Fuerte que tengo una toalla, o mejor hace click para escribirme</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.2747114119!2d-58.51587114103547!3d-34.615795932890286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1743395541646!5m2!1ses!2sar"
                        className="w-92 h-[250px] md:h-[250px] rounded-2xl shadow-lg mx-auto"
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