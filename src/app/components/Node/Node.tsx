import { createElement } from "react";

import { VIEW_MODE_FULL } from "@/app/content/constants";
import { permanentRedirect } from "next/navigation";
import { NODES } from "./constants";
import { NodeProps, NodeType } from "./types";
import { cn } from "@/app/lib/utils/tailwindcss";

const Node = ({ node, slug, className, locale, ...rest }: NodeProps) => {
  if (node.id === "missing") {
    console.error("Relacion rota en componente Node");
    return <></>;
  }
  const bundle = NODES[node.type as NodeType];
  const viewMode = node?.viewMode ?? VIEW_MODE_FULL;

  if (slug && node.path?.alias && node.path.alias !== `/${slug.join("/")}`) {
    permanentRedirect(node.path.alias);
  }

  if (slug && node.path?.alias === "/home") {
    permanentRedirect("/");
  }

  if (bundle === undefined) {
    /* throw new Error(
          `${node.type} is not defined in the project, please check src\\app\\_components\\Node\\constants.ts`
        ) */
    return (
      <div>
        {node.type} is not defined in the project, please check
        src\\app\\_components\\Node\\constants.ts
      </div>
    );
  }
  return (
    <div
      id={node.id}
      className={cn(`${node.type} view-mode-${viewMode}`, className)}
    >
      {createElement(bundle, {
        node: node,
        viewMode: viewMode,
        locale: locale,
        ...rest,
      })}
    </div>
  );
};

export { Node };
