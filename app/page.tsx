import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  // const
  return (
    <main className="p-8">
      <div>
        <Label>meter, m</Label>
        <Input type="number" placeholder="123.0" />
      </div>
      <div className="mt-4">
        <Label>meter, m</Label>
        <Input type="number" placeholder="123.0" />
      </div>
    </main>
  );
}
