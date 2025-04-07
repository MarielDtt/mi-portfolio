'use client'
import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { proyectosData } from "@/utils/proyectosData";
import CardProyect from "./cardProyect";


export function UnderlineTabs() {
    const [activeTab, setActiveTab] = React.useState("Desde el Aula");
   
    return (
        <Tabs value={activeTab}>
        <TabsHeader
            className="rounded-none border-blue-gray-50 bg-transparent ml-4 w-2/5"
            indicatorProps={{
                className:
                    "bg-transparent border-b-2 border-[#f7a35c] shadow-none rounded-none",
            }}
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
        >
            <Tab
                value="Desde el Aula"
                onClick={() => setActiveTab("Desde el Aula")}
                className="font-lilita-custom text-lg justify-start ml-4"
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
            >
                Desde el Aula
            </Tab>

        </TabsHeader>

        <TabsBody
            placeholder=""
            onPointerEnterCapture=""
            onPointerLeaveCapture=""
        >
            <TabPanel value="Desde el Aula" className="ml-8 mt-4">
                <div className="flex flex-col md:flex-row items-center text-2xl justify-center gap-8">
                    {proyectosData.map((proyecto, index) => (
                        <CardProyect
                            key={index}
                            titulo={proyecto.titulo}
                            descripcion={proyecto.descripcion}
                            imagenes={proyecto.imagenes}
                            tecnologias={proyecto.tecnologias}
                        />
                    ))}
                </div>
            </TabPanel>
        </TabsBody>
    </Tabs>
    );
}