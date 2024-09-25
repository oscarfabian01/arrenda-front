import { VIEW_MODE_FULL } from "@/app/content/constants";
import dynamic from "next/dynamic";

export const VIEW_MODES = {
  [VIEW_MODE_FULL]: {
    Component: dynamic(
      () => import("./viewmodes/Full").then((component) => component.Full),
      {
        loading: () => null,
      }
    ),
  },
};
