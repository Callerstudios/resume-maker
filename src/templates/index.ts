import FrontendTemplate from "./FrontendTemplate";
import BackendTemplate from "./BackendTemplate";
import DataScientistTemplate from "./DataScientistTemplate";
import UXDesignerTemplate from "./UXDesignerTemplate";

// Import the form data type
import type { FormData } from "../utils/types";

// Define the type for a template component
export type TemplateComponent = React.FC<{ data: FormData }>;

// Mapping for templates
export const templates: Record<string, TemplateComponent> = {
  frontend: FrontendTemplate,
  backend: BackendTemplate,
  dataScientist: DataScientistTemplate,
  uxDesigner: UXDesignerTemplate,
};
