import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemaTypes from "./sanity/schemaTypes";

const config = defineConfig({
  projectId: "mzm91lcm",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2025-07-19",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});

export default config;
