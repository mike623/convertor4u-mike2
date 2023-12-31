import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LengthTab } from "../components/LengthTab";
import { AreaTab } from "@/components/AreaTab";
import { LiquidTab } from "@/components/LiquidTab";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn([
        "flex justify-center items-center p-8 text-white h-[100dvh] ",
        "[&:has(.page-length)]:bg-slate-400",
        "[&:has(.page-liquid)]:bg-blue-400",
        "[&:has(.page-area)]:bg-orange-400",
      ])}
    >
      <Tabs defaultValue="length" className="max-w-[400px] w-full">
        <TabsList>
          <TabsTrigger className="flex items-center" value="length">
            Length
          </TabsTrigger>
          <TabsTrigger value="area">Area</TabsTrigger>
          <TabsTrigger value="liquid">Liquid</TabsTrigger>
        </TabsList>
        <div className="mt-8 [&_input]:text-stone-800 [&_input]:text-base">
          <TabsContent value="length">
            <LengthTab />
          </TabsContent>
          <TabsContent value="area">
            <AreaTab />
          </TabsContent>
          <TabsContent value="liquid">
            <LiquidTab />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
