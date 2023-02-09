import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/lib/sanity/schemas";
import siteConfig from "@/lib/sanity/schemas/documents/site-config";

import {
  projectId,
  dataset,
  apiVersion,
  previewSecretId,
} from "@/lib/sanity/sanity.api";
import { settingsStructure } from "@/lib/sanity/plugins/settings";

export default defineConfig({
  title: "Ayuda Content Studio",
  name: "Ayuda_Content_Studio",
  basePath: "/studio",
  projectId,
  dataset,
  // Sanity studio plugins
  plugins: [
    deskTool({
      structure: settingsStructure(siteConfig),
    }),
    visionTool(),
  ],
  // Schemas
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => templateItem.templateId != "site-config"
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      console.log("schemaType", schemaType);
      if (schemaType === "site-config") {
        return prev.filter(
          ({ action }: any) =>
            !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return prev;
    },
  },
});
