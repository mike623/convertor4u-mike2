"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BiCopy } from "react-icons/bi";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useToast } from "@/components/ui/use-toast";

export const InputField: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  placeholder?: string;
}> = ({ label, onChange, value, placeholder = "123.0" }) => {
  const [, copy] = useCopyToClipboard();
  const { toast } = useToast();
  return (
    <div>
      <Label>{label}</Label>
      <div className="flex justify-between">
        <Input
          value={value}
          onChange={onChange}
          type="number"
          placeholder={placeholder}
        />
        <button
          onClick={() => {
            copy(value);
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
