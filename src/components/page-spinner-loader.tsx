import { Icons } from "@/components/icons";

export function PageSpinnerLoader() {
  return (
    <main className="container relative flex items-center justify-center pt-8 md:pt-12">
      <Icons.spinner className="mx-auto h-8 w-8 animate-spin" />
    </main>
  );
}
