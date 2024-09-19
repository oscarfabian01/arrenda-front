import { DrupalNode } from "next-drupal";

export interface DrupalNodeProperty extends DrupalNode {
  field_email: string;
}
