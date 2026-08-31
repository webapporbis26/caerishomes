import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/sections/before-after";
import { Materials } from "@/components/sections/materials";
import { SiteLayout } from "@/components/site/site-layout";
import { useMaterialsAnimations } from "@/hooks/use-materials-animations";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials — Caeris Homes" },
      { name: "description", content: "Premium materials sourced with a focus on quality, durability, and timeless elegance." },
    ],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  useMaterialsAnimations();

  return (
    <SiteLayout>
      <Materials />
      <BeforeAfter />
    </SiteLayout>
  );
}
