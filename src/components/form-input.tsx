import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { type Control } from "react-hook-form";

export interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  label?: string;
  placeholder?: string;
  description?: string;
  labelClassName?: string;
}

export function FormInput({
  name,
  control,
  label,
  placeholder,
  description,
  labelClassName,
  ...props
}: FormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          )}

          <FormControl>
            <Input
              placeholder={placeholder ?? `Enter ${name}...`}
              {...props}
              {...field}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
