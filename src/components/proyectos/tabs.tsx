'use client'
import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { BookingCard } from "./card";

export function UnderlineTabs() {
    const [activeTab, setActiveTab] = React.useState("Desde el Aula");
    const data = [
        {
            label: "Desde el Aula",
            value: "Desde el Aula",
            desc: <BookingCard/>,
        },
        // {
        //     label: "Desde la vida Real",
        //     value: "Desde la vida Real",
        //     desc: ``,
        // },

    ];
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
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "font-lilita-custom text-lg justify-start ml-4 " : "font-lilita-custom text-lg justify-start ml-4"} // cuando se agregue la solapa "desde la vida real" el color de fuente al estar activa es text-[#f7a35c]
                        placeholder=""
                        onPointerEnterCapture=""
                        onPointerLeaveCapture=""
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                placeholder=""
                onPointerEnterCapture=""
                onPointerLeaveCapture=""
            >
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className= "ml-8 mt-4">
                        {desc}
                    </TabPanel>
                ))}

            </TabsBody>
        </Tabs>
    );
}