import { HTMLAttributes } from "react";
import { DrupalNodeProperty } from "./components/Property/types";
import { NODE_PROPERTY } from "./constants";

export type DrupalNodeBundle = DrupalNodeProperty;

export interface NodeProps extends HTMLAttributes<HTMLDivElement> {
  node: DrupalNodeBundle;
  slug?: string[];
  locale?: string;
  searchParams?: Record<string, string>;
}

export type NodeType = typeof NODE_PROPERTY;
