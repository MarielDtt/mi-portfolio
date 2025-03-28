import Image from "next/image";
function Tecnologias() {

    return (
        <>
            <h1>Tecnologías que hacen la magia</h1>
            <p>Ya aprendí a manejar este panel de tecnologías sin provocar un desastre nuclear ☢️
                Pero ojo… ¡esto recién empieza!
                Estoy constantemente sumando nuevas habilidades.</p>
            <Image src="/js.png" alt="logo javaScrip" width={24} height={24} />
            <Image src="/mongo.png" alt="logo mongo" width={24} height={24} />
            <Image src="/next.png" alt="logo next" width={24} height={24} />
            <Image src="/node-express.png" alt="logo node-express" width={24} height={24} />
            <Image src="/postgreSQL.png" alt="logo postgreSQL" width={24} height={24} />
            <Image src="/react.png" alt="logo react" width={24} height={24} />
            <Image src="/tailwind.png" alt="logo tailwind" width={24} height={24} />
            <Image src="/ts.png" alt="logo typeScript" width={24} height={24} />
        </>
    )
}

export default Tecnologias;