import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Separator } from "@/components/ui/separator";

export default function ExamplePage() {
  return (
    <main className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Example.</PageHeaderHeading>
        <PageHeaderDescription>Example of a page.</PageHeaderDescription>
      </PageHeader>
      <Separator />
    </main>
  );
}
