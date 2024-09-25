import { drupal } from "@/app/lib/drupal";
import { PageProps } from "./types";
import { DrupalNodeBundle } from "@/app/components/Node/types";
import { notFound } from "next/navigation";
import { NODE } from "@/app/components/Node/constants";
import { Node } from "@/app/components/Node";

export default async function Page({ params: { slug, locale } }: PageProps) {
  try {
    const path = await drupal.translatePathFromContext({
      params: { slug },
    });

    if (!path?.jsonapi?.resourceName) {
      return notFound();
    }

    const entity = await drupal.getResourceFromContext<DrupalNodeBundle>(path, {
      locale,
      defaultLocale: "es",
    });

    if (!entity || entity?.status === false) {
      return notFound();
    }

    switch (path.entity.type) {
      case NODE:
        return <Node node={entity}/>;
      default:
        return notFound();
    }
  } catch (error) {
    console.error("🚀 ~ error:", error);
    return notFound();
  }
}
