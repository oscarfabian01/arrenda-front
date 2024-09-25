import { DrupalNode } from "next-drupal";

export interface DrupalNodeProperty extends DrupalNode {
  field_email: string;
}

export interface DrupalNodePropertyProps {
  node: DrupalNodeProperty
  viewMode?: string
  className?: string
  locale?: string
}
