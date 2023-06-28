import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SaveForm } from "./SaveForm";

export const AddDialog = ({
  trigger = "Save",
  state,
}: {
  trigger: React.ReactNode;
  state: object;
}) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save the convert</DialogTitle>
          <DialogDescription>
            <div className="mt-2">
              <SaveForm state={state} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
