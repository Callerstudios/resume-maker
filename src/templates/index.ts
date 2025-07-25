// src/templates/index.ts

import FrontendTemplate from "./FrontendTemplate";
import BackendTemplate from "./BackendTemplate";
import DataScientistTemplate from "./DataScientistTemplate";
import UXDesignerTemplate from "./UXDesignerTemplate";
import type { FormData } from "../utils/types";

export type TemplateType =
  | "frontend"
  | "backend"
  | "data-scientist"
  | "ux-designer";

export const renderTemplate = (type: TemplateType, data: FormData) => {
  switch (type) {
    case "frontend":
      return <FrontendTemplate data={data} />;
    case "backend":
      return <BackendTemplate data={data} />;
    case "data-scientist":
      return <DataScientistTemplate data={data} />;
    case "ux-designer":
      return <UXDesignerTemplate data={data} />;
    default:
      return <FrontendTemplate data={data} />;
  }
};
