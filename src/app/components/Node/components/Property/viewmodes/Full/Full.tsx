import { DrupalNodePropertyFullProps } from "./types";

const Full = async ({ node }: DrupalNodePropertyFullProps) => {
  return <div>{node.title}</div>;
};

export { Full };
