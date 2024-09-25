import { VIEW_MODE_DEFAULT } from "@/app/content/constants";

import { VIEW_MODES } from "./constants";
import { DrupalNodePropertyProps } from "./types";

const Property = ({
  viewMode = VIEW_MODE_DEFAULT,
  ...rest
}: DrupalNodePropertyProps) => {
  const ViewMode = VIEW_MODES[viewMode as keyof typeof VIEW_MODES];
  if (!ViewMode) {
    return null;
  }
  return <ViewMode.Component {...rest} />;
};

export { Property };
