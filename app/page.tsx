import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LengthTab } from "../components/LengthTab";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { AreaTab } from "@/components/AreaTab";
import { useState } from "react";


export default function Home() {
  return (
    <main className="flex justify-center items-center p-8 bg-slate-500 text-white h-[100dvh]">
      <Tabs defaultValue="length" className="max-w-[400px] w-full">
        <TabsList >
          <TabsTrigger className='flex items-center' value="length">
            Length
          </TabsTrigger>
          <TabsTrigger value="area">
            Area
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
        <TabsContent value="length">
          <LengthTab />
        </TabsContent>
        <TabsContent value="area">
          <AreaTab/>
        </TabsContent>
        </div>

      </Tabs>
    </main>
  );
}


