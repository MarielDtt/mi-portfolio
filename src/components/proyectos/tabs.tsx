'use client'
import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { proyectosData, proyectosRealesData } from "@/utils/proyectosData";
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
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
            >

                <Tab
                    value="No es un simulacro"
                    onClick={() => setActiveTab("No es un simulacro")}
                    className={`font-lilita-custom text-lg px-4 py-2 ml-4 rounded-t-xl transition-all border-2 border-b-0 ${activeTab === "No es un simulacro"
                        ? "bg-white border-[#f7a35c]"
                        : "bg-[#fde8d7] border-[#f7a35c]"
                        }`}
                    placeholder=""
                    onPointerEnterCapture=""
                    onPointerLeaveCapture=""
                >
                    No es un Simulacro
                </Tab>
                <Tab
                    value="Desde el Aula"
                    onClick={() => setActiveTab("Desde el Aula")}
                    className={`font-lilita-custom text-lg px-4 py-2 ml-4 rounded-t-xl transition-all border-2 border-b-0 ${activeTab === "Desde el Aula"
                            ? "bg-white border-[#f7a35c]"
                            : "bg-[#fde8d7] border-[#f7a35c]"
                        }`}
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
                <TabPanel value="Desde el Aula" className="scroll-pl-4 mt-4">
                    <div className="flex overflow-x-auto md:overflow-x-visible md:flex-row flex-nowrap gap-8 pl-4 pr-4 snap-x snap-mandatory justify-start md:justify-center">
                        {proyectosData.map((proyecto, index) => (
                            <CardProyect
                                key={index}
                                titulo={proyecto.titulo}
                                descripcion={proyecto.descripcion}
                                imagenes={proyecto.imagenes}
                                tecnologias={proyecto.tecnologias}
                                deploy={proyecto.deploy}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value="No es un simulacro" className="scroll-pl-4 mt-4">
                    <div className="flex overflow-x-auto md:overflow-x-visible md:flex-row flex-nowrap gap-8 pl-4 pr-4 snap-x snap-mandatory justify-start md:justify-center">
                        {proyectosRealesData.map((proyecto, index) => (
                            <CardProyect
                                key={index}
                                titulo={proyecto.titulo}
                                descripcion={proyecto.descripcion}
                                imagenes={proyecto.imagenes}
                                tecnologias={proyecto.tecnologias}
                                deploy={proyecto.deploy}
                                figma={proyecto.figma}
                            />
                        ))}
                    </div>
                </TabPanel>
            </TabsBody>

        </Tabs>
    );
}