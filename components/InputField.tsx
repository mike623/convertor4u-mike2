"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BiCopy } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useToast } from "@/components/ui/use-toast";

export const InputField: React.FC<{
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  placeholder?: string;
}> = ({ label, onChange, value, placeholder = "123.0" }) => {
  const [, copy] = useCopyToClipboard();
  const { toast } = useToast();
  return (
    <div className="relative">
      <Label>{label}</Label>
      <div className="flex justify-between">
        <Input
          value={value == 0 ? "" : value}
          onChange={onChange}
          type="text"
          inputMode="decimal"
          pattern="[0-9]+[\.,]([0-9]{1,2})"
          placeholder={placeholder}
        />
        <div className="absolute right-10 top-[53%]">
          <button
            onClick={(e) => {
              e.preventDefault();
              onChange({ target: { value: 0 } } as any);
            }}
            className="text-stone-500"
          >
            <FaTimes />
          </button>
        </div>
        <button
          onClick={() => {
            copy(value + "");
            toast({ title: "Copied", description: "Copied to clipboard" });
          }}
          className="ml-4"
        >
          <BiCopy />
        </button>
      </div>
    </div>
  );
};
