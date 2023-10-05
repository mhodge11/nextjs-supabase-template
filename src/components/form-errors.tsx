import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";
import { titleCase } from "moderndash";
import { useFormContext } from "react-hook-form";

export function FormErrors() {
  const { formState } = useFormContext();

  if (Object.keys(formState.errors).length > 0) {
    return (
      <Popover>
        <PopoverTrigger className="flex items-center gap-1 text-sm text-destructive">
          ⚠️ Oops, there's an error in the form
          <Info className="h-4 w-4" />
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex flex-col gap-2">
            {Object.keys(formState.errors).map((name) => (
              <li key={name} className="text-destructive">
                {titleCase(name)}:{" "}
                {formState.errors[name]?.message?.toString() ?? "Unknown error"}
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    );
  }

  return null;
}
