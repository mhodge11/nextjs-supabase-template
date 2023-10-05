import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export interface FormSubmitProps {
  className?: string;
  children?: React.ReactNode;
}

export function FormSubmit({ className, children }: FormSubmitProps) {
  const { formState } = useFormContext();
  const { isSubmitting, isLoading } = formState;

  return (
    <Button
      type="submit"
      className={cn(className)}
      disabled={isSubmitting || isLoading}
    >
      {(isSubmitting || isLoading) && (
        <Icons.spinner className="mr-2 animate-spin" />
      )}
      {children ?? "Submit"}
    </Button>
  );
}
