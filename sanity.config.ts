import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/lib/sanity/schemas";
import {
  projectId,
  dataset,
  apiVersion,
  previewSecretId,
} from "@/lib/sanity/sanity.api";

export default defineConfig({
  name: "Ayuda_Content_Studio",
  title: "Ayuda Content Studio",
  basePath: "/studio",
  projectId,
  dataset,
  // Sanity studio plugins
  plugins: [deskTool(), visionTool()],
  // Schemas
  schema: {
    types: schemaTypes,
  },
});
